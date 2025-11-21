import { Request, Response } from "express";
import { monitoringService } from "../services/monitoringservice";

export const monitoringController = {
  create: async (req: Request, res: Response) => {
    try {
      const data = await monitoringService.create(req.body);
      res.json(data);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  },

  findAll: async (_req: Request, res: Response) => {
    res.json(await monitoringService.findAll());
  },

  findOne: async (req: Request, res: Response) => {
    const id = req.params.id;
    if (!id) return res.status(400).json({ error: "Missing ID" });

    const data = await monitoringService.findOne(id);
    if (!data) return res.status(404).json({ error: "Monitoring not found" });

    res.json(data);
  },

  update: async (req: Request, res: Response) => {
      try {
        const id = req.params.kode;
        if (!id) return res.status(400).json({ error: "Missing kode parameter" });
        const data = await monitoringService.update(
          id,
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
      await monitoringService.delete(kode);
      res.json({ message: "Barang deleted" });
    },
  
};
