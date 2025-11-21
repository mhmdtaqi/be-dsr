import prisma from "../prismaClient";

export const monitoringService = {
  create: (data: any) => prisma.monitoring.create({ data }),

  findAll: () =>
    prisma.monitoring.findMany({
      include: {
        barangUnit: true,
        dataLokasi: true,
      },
    }),

  findOne: (id: string) =>
    prisma.monitoring.findUnique({
      where: { id },
      include: {
        barangUnit: true,
        dataLokasi: true,
      },
    }),

  update: (id: string, data: any) =>
    prisma.monitoring.update({
      where: { id },
      data,
    }),

  delete: (id: string) =>
    prisma.monitoring.delete({
      where: { id },
    }),
};
