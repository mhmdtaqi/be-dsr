// src/routes/lokasiRoutes.ts

import { Router } from "express";
import { lokasiController }from "../controllers/lokasicontroller";
import { authMiddleware } from "../middleware/authmiddleware";
import { authorize } from "../middleware/authorize";

const router = Router();

// POST: Hanya Staff yang boleh membuat lokasi baru
router.post(
    "/", 
    authMiddleware, 
    authorize(['staff']), 
    lokasiController.create
);

// GET All/One: Semua Staff yang terautentikasi boleh melihat data master
router.get(
    "/", 
    authMiddleware, 
    authorize(['staff', 'staff_prodi', 'kepala_bagian_akademik']), 
    lokasiController.findAll
);

router.get(
    "/:kode", 
    authMiddleware, 
    authorize(['staff', 'staff_prodi', 'kepala_bagian_akademik']), 
    lokasiController.findOne
);

// PUT/DELETE: Hanya Kepala Bagian Akademik yang boleh mengubah/menghapus (kontrol tertinggi)
router.put(
    "/:kode", 
    authMiddleware, 
    authorize(['kepala_bagian_akademik']), 
    lokasiController.update
);

router.delete(
    "/:kode", 
    authMiddleware, 
    authorize(['kepala_bagian_akademik']), 
    lokasiController.delete
);

export default router;