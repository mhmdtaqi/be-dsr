import prisma from "../prismaClient";
import { Role } from "../../generated/prisma";

export const authService = {
  findByEmail: (email: string) =>
    prisma.user.findUnique({
      where: { email },
      select: {
        nik: true,
        nomor_identitas_tunggal: true,
        email: true,
        password: true,
        nama: true,
        role: true,
        createdAt: true,
      },
    }),

  findByNik: (nik: string) =>
    prisma.user.findUnique({
      where: { nik },
      select: {
        nik: true,
        email: true,
        nama: true,
        role: true,
      },
    }),

  createUser: (data: {
    nik: string;
    nomor_identitas_tunggal: string;
    email: string;
    password: string;
    nama: string;
    role?: Role;
  }) =>
    prisma.user.create({
      data,
      select: {
        nik: true,
        nomor_identitas_tunggal: true,
        email: true,
        nama: true,
        role: true,
        createdAt: true,
      },
    }),

  // ✅ update data akun user (nama/email/password)
  // nik diambil dari user yg sedang login (misal dari JWT)
  updateUserByNik: (
    nik: string,
    data: {
      nama?: string;
      email?: string;
      password?: string; // sudah di-hash sebelum dipassing ke sini
    }
  ) => {
    const updateData: {
      nama?: string;
      email?: string;
      password?: string;
    } = {};

    if (data.nama !== undefined) {
      updateData.nama = data.nama;
    }
    if (data.email !== undefined) {
      updateData.email = data.email;
    }
    if (data.password !== undefined) {
      updateData.password = data.password;
    }

    return prisma.user.update({
      where: { nik },
      data: updateData,
      select: {
        nik: true,
        nomor_identitas_tunggal: true,
        email: true,
        nama: true,
        role: true,
        createdAt: true,
      },
    });
  },
};
