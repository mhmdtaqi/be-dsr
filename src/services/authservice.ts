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
        resetToken: true,
        resetTokenExpiry: true,
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

  findByResetToken: (token: string) =>
    prisma.user.findFirst({
      where: { resetToken: token },
      select: {
        nik: true,
        email: true,
        nama: true,
        role: true,
        resetToken: true,
        resetTokenExpiry: true,
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

  // ✅ update data akun user (nama/email/password/resetToken)
  // nik diambil dari user yg sedang login (misal dari JWT)
  updateUserByNik: (
    nik: string,
    data: {
      nama?: string;
      email?: string;
      password?: string; // sudah di-hash sebelum dipassing ke sini
      resetToken?: string | null;
      resetTokenExpiry?: Date | null;
    }
  ) => {
    const updateData: {
      nama?: string;
      email?: string;
      password?: string;
      resetToken?: string | null;
      resetTokenExpiry?: Date | null;
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
    if (data.resetToken !== undefined) {
      updateData.resetToken = data.resetToken;
    }
    if (data.resetTokenExpiry !== undefined) {
      updateData.resetTokenExpiry = data.resetTokenExpiry;
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
