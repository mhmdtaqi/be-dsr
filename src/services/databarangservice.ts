import prisma from "../prismaClient";

export const dataBarangService = {
  create: (data: any) => prisma.dataBarang.create({ data }),
  findAll: () => prisma.dataBarang.findMany({ include: { barangUnit: true } }),
  findOne: (kode: string) => prisma.dataBarang.findUnique({ where: { kode_barang: kode }, include: { barangUnit: true } }),
  update: (kode: string, data: any) => prisma.dataBarang.update({ where: { kode_barang: kode }, data }),
  remove: (kode: string) => prisma.dataBarang.delete({ where: { kode_barang: kode } }),
};
