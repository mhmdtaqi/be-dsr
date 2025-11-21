import { Request, Response } from "express";
import { barangUnitService } from "../services/barangunitservice";

export const barangUnitController = {
  create: async (req: Request, res: Response) => {
    try {
      const data = await barangUnitService.create(req.body);
      res.json(data);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  },

  findAll: async (_req: Request, res: Response) => {
    try{
        res.json(await barangUnitService.findAll());
    }catch (err: any){
        res.status(400).json({error: err.message })
    }
  },

  findOne: async (req: Request, res: Response) => {
    const kode = req.params.kode;
    if (!kode) return res.status(400).json({ error: "Missing kode parameter" });
    const data = await barangUnitService.findOne(kode);
    if (!data) return res.status(404).json({ error: "Barang not found" });
    res.json(data);
  },

  update: async (req: Request, res: Response) => {
    try {
      const kode = req.params.kode;
      if (!kode) return res.status(400).json({ error: "Missing kode parameter" });
      const data = await barangUnitService.update(
        kode,
        req.body
      );
      res.json(data);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  },

  delete: async (req: Request, res: Response) => {
    const kode = req.params.kode;
    if (!kode) return res.status(400).json({ error: "Missing kode parameter" });
    await barangUnitService.delete(kode);
    res.json({ message: "Barang deleted" });
  },
};
