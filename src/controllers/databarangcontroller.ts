import { Request, Response } from "express";
import { dataBarangService } from "../services/databarangservice";

export const data_Barang_Controller = {
  create: async (req: Request, res: Response) => {
    try {
      const data = await dataBarangService.create(req.body);
      res.json(data);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  },

  findAll: async (_req: Request, res: Response) => {
    try{
        res.json(await dataBarangService.findAll());
    }catch (err: any){
        res.status(400).json({error: err.message })
    }
  },

  findOne: async (req: Request, res: Response) => {
    const kode = req.params.kode;
    if (!kode) return res.status(400).json({ error: "Missing kode parameter" });
    const data = await dataBarangService.findOne(kode);
    if (!data) return res.status(404).json({ error: "Barang not found" });
    res.json(data);
  },

  update: async (req: Request, res: Response) => {
    try {
      const kode = req.params.kode;
      if (!kode) return res.status(400).json({ error: "Missing kode parameter" });
      const data = await dataBarangService.update(
        kode,
        req.body
      );
      res.json(data);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  },

  remove: async (req: Request, res: Response) => {
    const kode = req.params.kode;
    if (!kode) return res.status(400).json({ error: "Missing kode parameter" });
    await dataBarangService.remove(kode);
    res.json({ message: "Barang deleted" });
  },
};
