import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";
import { authService } from "../services/authservice";

export const authController = {
  register: async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    try {
      const {
        nik,
        nomor_identitas_tunggal,
        email,
        password,
        nama,
        role
      } = req.body;

      const existEmail = await authService.findByEmail(email);
      if (existEmail)
        return res.status(400).json({ message: "Email sudah digunakan" });

      const existNik = await authService.findByNik(nik);
      if (existNik)
        return res.status(400).json({ message: "NIK sudah digunakan" });

      const hashed = await bcrypt.hash(password, 10);

      const newUser = await authService.createUser({
        nik,
        nomor_identitas_tunggal,
        email,
        password: hashed,
        nama,
        role, // default CIVITAS_FASTE jika tidak dikirim
      });

      res.status(201).json({
        message: "Registrasi berhasil",
        user: {
          nik: newUser.nik,
          email: newUser.email,
          nama: newUser.nama,
          role: newUser.role
        }
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    }
  },

  login: async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    try {
      const { email, password } = req.body;

      const user = await authService.findByEmail(email);
      if (!user)
        return res.status(404).json({ message: "User tidak ditemukan" });

      const match = await bcrypt.compare(password, user.password);
      if (!match)
        return res.status(401).json({ message: "Password salah" });

      const token = jwt.sign(
        {
          nik: user.nik,
          role: user.role
        },
        process.env.JWT_SECRET!,
        { expiresIn: "1d" }
      );

      res.json({
        message: "Login berhasil",
        token,
        user: {
          nik: user.nik,
          email: user.email,
          nama: user.nama,
          role: user.role
        }
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server error" });
    }
  }
};
