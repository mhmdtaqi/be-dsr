// src/routes/peminjamanRoutes.ts

import { Router } from "express";
import { peminjamanController } from "../controllers/peminjamancontroller";
import { authMiddleware } from "../middleware/authmiddleware";
import { authorize } from "../middleware/authorize";

const router = Router();

// POST: Civitas Faste dapat membuat permintaan peminjaman baru
router.post(
    "/", 
    authMiddleware, 
    authorize(['civitas_faste']), 
    peminjamanController.create
);

// GET All/One: Staff dan Kepala Bagian melihat semua peminjaman. Civitas Faste melihat peminjaman miliknya sendiri (logika harus ada di controller)
router.get(
    "/", 
    authMiddleware, 
    authorize(['civitas_faste', 'staff', 'staff_prodi', 'kepala_bagian_akademik']), 
    peminjamanController.findAll
);

router.get(
    "/:id", 
    authMiddleware, 
    authorize(['civitas_faste', 'staff', 'staff_prodi', 'kepala_bagian_akademik']), 
    peminjamanController.findOne
);

// PUT Cancel: Civitas Faste bisa membatalkan permintaan sendiri
router.put(
    "/cancel/:id", 
    authMiddleware, 
    authorize(['civitas_faste']), 
    peminjamanController.cancel
);

// PUT Return: Hanya Staff yang dapat memproses pengembalian barang
router.put(
    "/return/:id", 
    authMiddleware, 
    authorize(['staff', 'staff_prodi']), 
    peminjamanController.returnBarang
);

export default router;