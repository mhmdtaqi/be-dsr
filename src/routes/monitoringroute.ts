// src/routes/monitoringRoutes.ts

import { Router } from "express";
import { monitoringController } from "../controllers/monitoringcontroller";
import { authMiddleware } from "../middleware/authmiddleware";
import { authorize } from "../middleware/authorize";

const router = Router();

// POST: Hanya Staff yang boleh membuat log monitoring secara manual (atau API internal)
router.post(
    "/", 
    authMiddleware, 
    authorize(['staff', 'staff_prodi']), 
    monitoringController.create
);

// GET All/One: Semua Staff (termasuk Kepala Bagian) yang berhak melihat audit log
router.get(
    "/", 
    authMiddleware, 
    authorize(['staff', 'staff_prodi', 'kepala_bagian_akademik']), 
    monitoringController.findAll
);

router.get(
    "/:id", 
    authMiddleware, 
    authorize(['staff', 'staff_prodi', 'kepala_bagian_akademik']), 
    monitoringController.findOne
);

// PUT/DELETE: Hanya Kepala Bagian Akademik yang boleh mengubah/menghapus log (ini jarang dilakukan, tapi untuk kontrol tertinggi)
router.put(
    "/:id", 
    authMiddleware, 
    authorize(['kepala_bagian_akademik']), 
    monitoringController.update
);

router.delete(
    "/:id", 
    authMiddleware, 
    authorize(['kepala_bagian_akademik']), 
    monitoringController.delete
);

export default router;