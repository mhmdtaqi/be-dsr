// src/routes/databarangRoutes.ts

import { Router } from "express";
import { data_Barang_Controller } from "../controllers/databarangcontroller";
import { authMiddleware } from "../middleware/authmiddleware";
import { authorize } from "../middleware/authorize";

const router = Router();

// POST: Hanya Staff yang boleh membuat item baru
router.post(
    "/", 
    authMiddleware, 
    authorize(['staff']), 
    data_Barang_Controller.create
);

// GET All/One: Semua Staff yang terautentikasi boleh melihat data master
router.get(
    "/", 
    authMiddleware, 
    authorize(['staff', 'staff_prodi', 'kepala_bagian_akademik']), 
    data_Barang_Controller.findAll
);

router.get(
    "/:kode", 
    authMiddleware, 
    authorize(['staff', 'staff_prodi', 'kepala_bagian_akademik']), 
    data_Barang_Controller.findOne
);

// PUT/DELETE: Hanya Kepala Bagian Akademik yang boleh mengubah/menghapus
router.put(
    "/:kode", 
    authMiddleware, 
    authorize(['kepala_bagian_akademik']), 
    data_Barang_Controller.update
);

router.delete(
    "/:kode", 
    authMiddleware, 
    authorize(['kepala_bagian_akademik']), 
    data_Barang_Controller.remove
);

export default router;