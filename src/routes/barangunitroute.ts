// src/routes/barangunitroute.ts

import { Router } from "express";
import { barangUnitController } from "../controllers/barangunitcontroller";
import { authMiddleware } from "../middleware/authmiddleware"; 
import { authorize } from "../middleware/authorize";         

const router = Router();

// Endpoint untuk membuat data baru (Hanya Staff dan Staff Prodi)
router.post(
    "/",
    authMiddleware,
    authorize(['staff']), // <-- Menggunakan enum roles yang baru
    barangUnitController.create
);

// Endpoint untuk menghapus data (Hanya Kepala Bagian Akademik)
router.delete(
    "/:kode",
    authMiddleware,
    authorize(['staff']), // <-- Menggunakan enum roles yang baru
    barangUnitController.delete
);

export default router;