import express from "express";
import { authController } from "../controllers/authcontroller";
import { body } from "express-validator";
import rateLimit from "express-rate-limit";
import { Role } from "../../generated/prisma";
import { authMiddleware } from "../middleware/authmiddleware";

const router = express.Router();

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    success: false,
    message:
      "Terlalu banyak percobaan login. Silakan coba lagi dalam 15 menit",
  },
  standardHeaders: true,
  legacyHeaders: false,
  keyGenerator: (req) => {
    console.log('Rate limit key for login:', req.body?.email);
    return (req.body?.email || '').toLowerCase();
  },
});

// REGISTER
router.post(
  "/register",
  [
    body("nik")
      .notEmpty()
      .withMessage("NIK wajib diisi")
      .isLength({ min: 16, max: 16 })
      .withMessage("NIK harus 16 karakter"),
    body("nomor_identitas_tunggal")
      .notEmpty()
      .withMessage("Nomor identitas tunggal wajib diisi"),
    body("email")
      .isEmail()
      .withMessage("Format email tidak valid")
      .normalizeEmail(),
    body("password")
      .isLength({ min: 8 })
      .withMessage("Password minimal 8 karakter")
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
      .withMessage(
        "Password harus mengandung huruf besar, huruf kecil, dan angka"
      ),
    body("nama").notEmpty().withMessage("Nama wajib diisi").trim(),
    body("role")
      .optional()
      .isIn(Object.values(Role))
      .withMessage(
        `Role harus salah satu dari: ${Object.values(Role).join(", ")}`
      ),
  ],
  authController.register
);

// LOGIN
router.post(
  "/login",
  loginLimiter,
  [
    body("email")
      .isEmail()
      .withMessage("Format email tidak valid")
      .normalizeEmail(),
    body("password").notEmpty().withMessage("Password wajib diisi"),
  ],
  authController.login
);

// FORGOT PASSWORD
router.post("/forgot-password", authController.forgotPassword);

// RESET PASSWORD
router.post("/reset-password", authController.resetPassword);

// UPDATE AKUN (diproteksi JWT)
router.put(
  "/akun",
  authMiddleware,
  [
    body("nama").optional().isString().trim(),
    body("email")
      .optional()
      .isEmail()
      .withMessage("Format email tidak valid")
      .normalizeEmail(),
    body("password")
      .optional()
      .isLength({ min: 8 })
      .withMessage("Password minimal 8 karakter")
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
      .withMessage(
        "Password harus mengandung huruf besar, huruf kecil, dan angka"
      ),
  ],
  authController.updateMe
);

export default router;
