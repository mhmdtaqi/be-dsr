import express from "express";
import {
  addProy,
  getProy,
  getProyById,
  updateStatProy,
  deleteProy,
} from "../controllers/proyController";

const router = express.Router();

router.post("/", addProy);
router.get("/", getProy);
router.get("/:id", getProyById);
router.put("/:id", updateStatProy);
router.put("/:id", updateStatProy);
router.delete("/:id", deleteProy);

export default router;
