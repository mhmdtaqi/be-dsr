import { Request, Response } from "express";
import prisma from "../prismaClient";

// CREATE user
export const addProy = async (req: Request, res: Response) => {
  try {
    const { merek } = req.body;
    const newProy = await prisma.proyektor.create({
      data: { merek },
    });
    res.status(201).json(newProy);
  } catch (err) {
    res.status(500).json({ error: "Failed to add the thing" });
  }
};

// READ all users
export const getProy = async (req: Request, res: Response) => {
  const proy = await prisma.proyektor.findMany();
  res.json(proy);
};

// READ single user
export const getProyById = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const proy = await prisma.proyektor.findUnique({ where: { id } });
  proy
    ? res.json(proy)
    : res.status(404).json({ error: "The thing not found" });
};

// UPDATE user
export const updateStatProy = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { status } = req.body;
  try {
    const updated = await prisma.proyektor.update({
      where: { id },
      data: { status },
    });
    res.json(updated);
  } catch {
    res.status(404).json({ error: "The thing not found to update it" });
  }
};

export const deleteProy = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  try {
    await prisma.proyektor.delete({ where: { id } });
    res.status(204).end();
  } catch {
    res.status(404).json({ error: "The thing not found to delete it" });
  }
};
