import { Request, Response } from "express";
import { lokasiService } from "../services/lokasiservice";

export const lokasiController = {
  create: async (req: Request, res: Response) => {
    try {
      const data = await lokasiService.create(req.body);
      res.json(data);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  },

  findAll: async (_req: Request, res: Response) => {
    try{
        res.json(await lokasiService.findAll());
    }catch (err: any){
        res.status(400).json({error: err.message })
    }
  },

  findOne: async (req: Request, res: Response) => {
    const kode = req.params.kode;
    if (!kode) return res.status(400).json({ error: "Missing kode parameter" });
    const data = await lokasiService.findOne(kode);
    if (!data) return res.status(404).json({ error: "Barang not found" });
    res.json(data);
  },

  update: async (req: Request, res: Response) => {
    try {
      const kode = req.params.kode;
      if (!kode) return res.status(400).json({ error: "Missing kode parameter" });
      const data = await lokasiService.update(
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
    await lokasiService.delete(kode);
    res.json({ message: "Barang deleted" });
  },
};
