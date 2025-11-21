import prisma from "../prismaClient";

export const authService = {
  findByEmail: (email: string) =>
    prisma.user.findUnique({
      where: { email }
    }),

  findByNik: (nik: string) =>
    prisma.user.findUnique({
      where: { nik }
    }),

  createUser: (data: any) =>
    prisma.user.create({ data }),
};
