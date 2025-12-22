import prisma from "../prismaClient";
import { Role, Jurusan } from "../../generated/prisma";

export const authService = {
  findAll: (filters?: { role?: Role }) =>
    prisma.user.findMany({
      where: filters || {},
      select: {
        nik: true,
        nomor_identitas_tunggal: true,
        email: true,
        nama: true,
        role: true,
        jurusan: true,
        createdAt: true,
      },
      orderBy: { createdAt: "desc" },
    }),

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
        jurusan: true,
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
        jurusan: true,
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
        jurusan: true,
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
    jurusan?: Jurusan;
  }) =>
    prisma.user.create({
      data: {
        ...data,
        jurusan: data.jurusan || "umum",
      },
      select: {
        nik: true,
        nomor_identitas_tunggal: true,
        email: true,
        nama: true,
        role: true,
        jurusan: true,
        createdAt: true,
      },
    }),

  findOne: (nik: string) =>
    prisma.user.findUnique({
      where: { nik },
      select: {
        nik: true,
        email: true,
        nama: true,
        role: true,
        jurusan: true,
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
      jurusan?: Jurusan;
      resetToken?: string | null;
      resetTokenExpiry?: Date | null;
    }
  ) => {
    const updateData: {
      nama?: string;
      email?: string;
      password?: string;
      jurusan?: Jurusan;
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
    if (data.jurusan !== undefined) {
      updateData.jurusan = data.jurusan;
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
        jurusan: true,
        createdAt: true,
      },
    });
  },

  updateUserAdmin: (
    nik: string,
    data: {
      nama?: string;
      email?: string;
      password?: string;
      role?: Role;
      jurusan?: Jurusan;
    }
  ) => {
    const updateData: any = {};
    if (data.nama !== undefined) updateData.nama = data.nama;
    if (data.email !== undefined) updateData.email = data.email;
    if (data.password !== undefined) updateData.password = data.password;
    if (data.role !== undefined) updateData.role = data.role;
    if (data.jurusan !== undefined) updateData.jurusan = data.jurusan;

    return prisma.user.update({
      where: { nik },
      data: updateData,
      select: {
        nik: true,
        email: true,
        nama: true,
        role: true,
        jurusan: true,
      },
    });
  },
};
