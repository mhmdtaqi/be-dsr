import  prisma  from "../prismaClient";

export const barangUnitService = {
  create: (data: any) => prisma.barangUnit.create({ data }),
  findAll: () => prisma.barangUnit.findMany({ include: { user: true, dataBarang: true, dataLokasi: true } }),
  findOne: (nup: string) => prisma.barangUnit.findUnique({ where: { nup }, include: { user: true, dataBarang: true, dataLokasi: true } }),
  update: (nup: string, data: any) => prisma.barangUnit.update({ where: { nup }, data }),
  delete: (nup: string) => prisma.barangUnit.delete({ where: { nup } }),
  setStatus: (nup: string, status: "Tersedia" | "TidakTersedia") => prisma.barangUnit.update({ where: { nup }, data: { status } }),
};
