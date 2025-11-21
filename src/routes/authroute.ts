import express from "express";
import { authController } from "../controllers/authcontroller";
import { body } from "express-validator";

const router = express.Router();

// REGISTER
router.post(
  "/register",
  [
    body("nik").notEmpty(),
    body("nomor_identitas_tunggal").notEmpty(),
    body("email").isEmail(),
    body("password").isLength({ min: 6 }),
    body("nama").notEmpty(),
  ],
  authController.register
);

// LOGIN
router.post(
  "/login",
  [
    body("email").isEmail(),
    body("password").notEmpty(),
  ],
  authController.login
);

export default router;
