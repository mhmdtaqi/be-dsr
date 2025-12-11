import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { validationResult } from "express-validator";
import { authService } from "../services/authservice";
import { sendResetEmail } from "../utils/emailSender";
import prisma from "../prismaClient";
import { Role } from "../../generated/prisma";

export const authController = {
  register: async (req: Request, res: Response): Promise<void> => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        success: false,
        message: "Data input tidak valid",
        errors: errors.array(),
      });
      return;
    }

    try {
      const { nik, nomor_identitas_tunggal, email, password, nama, role } =
        req.body;

      console.log("Register attempt for email:", email, "NIK:", nik);

      const existEmail = await authService.findByEmail(email);
      if (existEmail) {
        console.log("Email already exists:", email);
        res.status(409).json({
          success: false,
          message: "Email sudah terdaftar",
        });
        return;
      }

      const existNik = await authService.findByNik(nik);
      if (existNik) {
        console.log("NIK already exists:", nik);
        res.status(409).json({
          success: false,
          message: "NIK sudah terdaftar",
        });
        return;
      }

      console.log("Hashing password for user:", email);
      const hashed = await bcrypt.hash(password, 12);

      let userRole: Role = Role.civitas_faste;
      if (role && Object.values(Role).includes(role)) {
        userRole = role as Role;
      }

      console.log("Creating user:", email, "with role:", userRole);
      const newUser = await authService.createUser({
        nik,
        nomor_identitas_tunggal,
        email,
        password: hashed,
        nama,
        role: userRole,
      });

      console.log("User created successfully:", newUser.nik);
      res.status(201).json({
        success: true,
        message: "Registrasi berhasil",
        data: {
          nik: newUser.nik,
          email: newUser.email,
          nama: newUser.nama,
          role: newUser.role,
        },
      });
    } catch (err: any) {
      console.error("Register error:", err);

      // Provide more specific error messages based on error type
      let errorMessage = "Terjadi kesalahan server";
      let statusCode = 500;

      if (err.code === "P1001") {
        errorMessage = "Tidak dapat terhubung ke database";
        statusCode = 503;
      } else if (err.code === "P2002") {
        errorMessage = "Data sudah ada di database";
        statusCode = 409;
      } else if (err.message?.includes("connect")) {
        errorMessage = "Masalah koneksi database";
        statusCode = 503;
      }

      res.status(statusCode).json({
        success: false,
        message:
          process.env.NODE_ENV === "development" ? err.message : errorMessage,
        ...(process.env.NODE_ENV === "development" && {
          stack: err.stack,
          code: err.code,
        }),
      });
    }
  },

  login: async (req: Request, res: Response): Promise<void> => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        success: false,
        message: "Data input tidak valid",
        errors: errors.array(),
      });
      return;
    }

    try {
      const { email, password } = req.body;

      console.log("Login attempt for email:", email);

      const user = await authService.findByEmail(email);
      if (!user) {
        console.log("User not found for email:", email);
        res.status(401).json({
          success: false,
          message: "Email atau password tidak valid",
        });
        return;
      }

      console.log("Verifying password for user:", email);
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        console.log("Password mismatch for user:", email);
        res.status(401).json({
          success: false,
          message: "Email atau password tidak valid",
        });
        return;
      }

      const secret = process.env.JWT_SECRET;
      if (!secret) {
        console.error("JWT_SECRET environment variable not set");
        throw new Error("Server configuration error");
      }

      console.log("Generating JWT token for user:", user.nik);
      const accessToken = jwt.sign(
        {
          nik: user.nik,
          role: user.role,
        },
        secret,
        { expiresIn: "1h" }
      );

      console.log("Login successful for user:", user.nik);
      res.json({
        success: true,
        message: "Login berhasil",
        data: {
          accessToken,
          user: {
            nik: user.nik,
            email: user.email,
            nama: user.nama,
            role: user.role,
          },
        },
      });
    } catch (err: any) {
      console.error("Login error:", err);

      // Provide more specific error messages based on error type
      let errorMessage = "Terjadi kesalahan server";
      let statusCode = 500;

      if (err.code === "P1001") {
        errorMessage = "Tidak dapat terhubung ke database";
        statusCode = 503;
      } else if (err.message?.includes("connect")) {
        errorMessage = "Masalah koneksi database";
        statusCode = 503;
      } else if (err.message?.includes("JWT")) {
        errorMessage = "Konfigurasi server tidak valid";
        statusCode = 500;
      }

      res.status(statusCode).json({
        success: false,
        message:
          process.env.NODE_ENV === "development" ? err.message : errorMessage,
        ...(process.env.NODE_ENV === "development" && {
          stack: err.stack,
          code: err.code,
        }),
      });
    }
  },

  forgotPassword: async (req: Request, res: Response): Promise<void> => {
    try {
      const { email } = req.body;

      if (!email) {
        res.status(400).json({
          success: false,
          message: "Email wajib diisi",
        });
        return;
      }

      console.log("Forgot password request for email:", email);

      const user = await authService.findByEmail(email);
      if (!user) {
        // Return success to prevent email enumeration
        res.json({
          success: true,
          message: "Jika email terdaftar, link reset akan dikirim",
        });
        return;
      }

      // Generate reset token
      const resetToken = crypto.randomBytes(32).toString("hex");
      const resetTokenExpiry = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes

      // Save token to database
      await authService.updateUserByNik(user.nik, {
        resetToken,
        resetTokenExpiry,
      });

      // Send reset email
      await sendResetEmail(email, resetToken);

      res.json({
        success: true,
        message: "Link reset password telah dikirim ke email Anda",
      });
    } catch (err: any) {
      console.error("Forgot password error:", err);
      res.status(500).json({
        success: false,
        message: "Terjadi kesalahan server",
      });
    }
  },

  resetPassword: async (req: Request, res: Response): Promise<void> => {
    try {
      const { token, password } = req.body;

      if (!token || !password) {
        res.status(400).json({
          success: false,
          message: "Token dan password wajib diisi",
        });
        return;
      }

      console.log("Reset password attempt with token");

      // Find user by reset token
      const user = await authService.findByResetToken(token);
      if (!user || !user.resetTokenExpiry) {
        res.status(400).json({
          success: false,
          message: "Token reset tidak valid",
        });
        return;
      }

      // Check if token is expired
      if (new Date() > user.resetTokenExpiry) {
        res.status(400).json({
          success: false,
          message: "Token reset telah kadaluarsa",
        });
        return;
      }

      // Hash new password
      const hashedPassword = await bcrypt.hash(password, 12);

      // Update password and clear reset token
      await authService.updateUserByNik(user.nik, {
        password: hashedPassword,
        resetToken: null,
        resetTokenExpiry: null,
      });

      console.log("Password reset successful for user:", user.nik);

      res.json({
        success: true,
        message: "Password berhasil direset",
      });
    } catch (err: any) {
      console.error("Reset password error:", err);
      res.status(500).json({
        success: false,
        message: "Terjadi kesalahan server",
      });
    }
  },

  // Update akun (nama/email/password) user yang sedang login
  updateMe: async (req: Request, res: Response): Promise<void> => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        success: false,
        message: "Data input tidak valid",
        errors: errors.array(),
      });
      return;
    }

    try {
      // authMiddleware mengisi req.user dari JWT
      const userFromToken = (req as any).user as { nik: string };
      if (!userFromToken?.nik) {
        console.log("Invalid or missing token in update request");
        res.status(401).json({
          success: false,
          message: "Token tidak valid",
        });
        return;
      }

      const { nama, email, password } = req.body as {
        nama?: string;
        email?: string;
        password?: string;
      };

      console.log("Update attempt for user:", userFromToken.nik);

      let hashed: string | undefined;
      if (password) {
        console.log("Hashing new password for user:", userFromToken.nik);
        hashed = await bcrypt.hash(password, 12);
      }

      const updatePayload: {
        nama?: string;
        email?: string;
        password?: string;
      } = {};

      if (nama !== undefined) updatePayload.nama = nama;
      if (email !== undefined) updatePayload.email = email;
      if (hashed !== undefined) updatePayload.password = hashed;

      console.log("Updating user profile for:", userFromToken.nik);
      const updated = await authService.updateUserByNik(
        userFromToken.nik,
        updatePayload
      );

      console.log("Profile updated successfully for user:", userFromToken.nik);
      res.json({
        success: true,
        message: "Akun berhasil diperbarui",
        data: {
          nik: updated.nik,
          email: updated.email,
          nama: updated.nama,
          role: updated.role,
        },
      });
    } catch (err: any) {
      console.error("Update akun error:", err);

      // Provide more specific error messages based on error type
      let errorMessage = "Terjadi kesalahan server";
      let statusCode = 500;

      if (err.code === "P1001") {
        errorMessage = "Tidak dapat terhubung ke database";
        statusCode = 503;
      } else if (err.code === "P2025") {
        errorMessage = "User tidak ditemukan";
        statusCode = 404;
      } else if (err.message?.includes("connect")) {
        errorMessage = "Masalah koneksi database";
        statusCode = 503;
      }

      res.status(statusCode).json({
        success: false,
        message:
          process.env.NODE_ENV === "development" ? err.message : errorMessage,
        ...(process.env.NODE_ENV === "development" && {
          stack: err.stack,
          code: err.code,
        }),
      });
    }
  },
};
