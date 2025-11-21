import { Request, Response } from "express";
import { peminjamanService } from "../services/peminjamanservice";
import { generateQR } from "../utils/generateQR";

export const peminjamanController = {

  create: async (req: Request, res: Response) => {
    try {
      const data = await peminjamanService.create(req.body);
      const qr = await generateQR(`PINJAM-${data.id}`);
      res.json({ peminjaman: data, qr });
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  },

  findAll: async (_req: Request, res: Response) => {
    res.json(await peminjamanService.findAll());
  },

  findOne: async (req: Request, res: Response) => {
    res.json(await peminjamanService.findOne(Number(req.params.id)));
  },

  cancel: async (req: Request, res: Response) => {
    try {
      const data = await peminjamanService.cancel(Number(req.params.id));
      res.json(data);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  },

  returnBarang: async (req: Request, res: Response) => {
    try {
      const data = await peminjamanService.returnBarang(Number(req.params.id));
      res.json(data);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  },
};
