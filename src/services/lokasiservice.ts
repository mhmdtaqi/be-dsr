import  prisma  from "../prismaClient";

export const lokasiService = {
  create: (data: any) => prisma.dataLokasi.create({ data }),
  findAll: () => prisma.dataLokasi.findMany({ include: { barangUnit: true, peminjamanP: true, monitoring: true } }),
  findOne: (kode: string) => 
    prisma.dataLokasi.findUnique({ where: { kode_lokasi: kode }, include: { barangUnit: true, peminjamanP: true, monitoring: true } }),
  update: (kode: string, data: any) => 
    prisma.dataLokasi.update({ where: { kode_lokasi: kode }, data }),
  delete: (kode: string) =>
     prisma.dataLokasi.delete({ where: { kode_lokasi: kode } }),
};
