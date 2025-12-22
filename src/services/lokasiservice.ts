import prisma from "../prismaClient";
import { Prisma, StatusLokasi, Jurusan } from "../../generated/prisma";

export const lokasiService = {
  create: (data: Prisma.DataLokasiCreateInput) =>
    prisma.dataLokasi.create({
      data,
      select: {
        kode_lokasi: true,
        lokasi: true,
        status: true,
      },
    }),

  findAll: (filters?: { status?: StatusLokasi }) => {
    const where: Prisma.DataLokasiWhereInput = {};

    if (filters?.status) where.status = filters.status;

    return prisma.dataLokasi.findMany({
      where,
      include: {
        barangUnit: {
          select: {
            nup: true,
            status: true,
            dataBarang: {
              select: {
                jenis_barang: true,
                merek: true,
              },
            },
          },
        },
        peminjamanP: {
          where: {
            status: {
              in: ["booking", "aktif"], // Hanya peminjaman aktif
            },
          },
          select: {
            id: true,
            userNik: true,
            Agenda: true,
            waktuMulai: true,
            waktuSelesai: true,
            status: true,
            verifikasi: true,
            no_hp: true, // no_hp ada di PeminjamanP, bukan di User
            user: {
              select: {
                nama: true,
                email: true,
              },
            },
          },
          orderBy: {
            waktuMulai: "desc",
          },
        },
        monitoring: {
          select: {
            id: true,
            waktu: true,
            kondisiBarang: true,
            plt: true,
          },
          orderBy: {
            waktu: "desc",
          },
          take: 10, // 10 monitoring terakhir
        },
      },
      orderBy: {
        kode_lokasi: "asc",
      },
    });
  },

  findOne: (kode: string) =>
    prisma.dataLokasi.findUnique({
      where: { kode_lokasi: kode },
      include: {
        barangUnit: {
          select: {
            nup: true,
            status: true,
            createdAt: true,
            dataBarang: {
              select: {
                kode_barang: true,
                jenis_barang: true,
                merek: true,
              },
            },
          },
        },
        peminjamanP: {
          select: {
            id: true,
            userNik: true,
            Agenda: true,
            waktuMulai: true,
            waktuSelesai: true,
            status: true,
            verifikasi: true,
            no_hp: true, // no_hp ada di PeminjamanP
            createdAt: true,
            user: {
              select: {
                nik: true,
                nama: true,
                email: true,
              },
            },
          },
          orderBy: {
            createdAt: "desc",
          },
        },
        monitoring: {
          select: {
            id: true,
            nupBarang: true,
            waktu: true,
            plt: true,
            kondisiBarang: true,
            keterangan: true,
            barangUnit: {
              select: {
                dataBarang: {
                  select: {
                    jenis_barang: true,
                    merek: true,
                  },
                },
              },
            },
          },
          orderBy: {
            waktu: "desc",
          },
        },
      },
    }),

  update: (kode: string, data: Prisma.DataLokasiUpdateInput) =>
    prisma.dataLokasi.update({
      where: { kode_lokasi: kode },
      data,
      select: {
        kode_lokasi: true,
        lokasi: true,
        status: true,
      },
    }),

  delete: (kode: string) =>
    prisma.dataLokasi.delete({
      where: { kode_lokasi: kode },
      select: {
        kode_lokasi: true,
        lokasi: true,
      },
    }),

  setStatus: (kode: string, status: StatusLokasi) =>
    prisma.dataLokasi.update({
      where: { kode_lokasi: kode },
      data: { status },
      select: {
        kode_lokasi: true,
        lokasi: true,
        status: true,
      },
    }),

  checkExists: async (kode: string): Promise<boolean> => {
    const count = await prisma.dataLokasi.count({
      where: { kode_lokasi: kode },
    });
    return count > 0;
  },

  // Cek apakah lokasi sedang digunakan (ada barang atau peminjaman aktif)
  checkInUse: async (
    kode: string
  ): Promise<{
    hasBarang: boolean;
    hasPeminjaman: boolean;
  }> => {
    const [barangCount, peminjamanCount] = await Promise.all([
      prisma.barangUnit.count({
        where: { lokasi: kode },
      }),
      prisma.peminjamanP.count({
        where: {
          kodeLokasi: kode,
          status: {
            in: ["booking", "aktif"],
          },
        },
      }),
    ]);

    return {
      hasBarang: barangCount > 0,
      hasPeminjaman: peminjamanCount > 0,
    };
  },

  // Get available lokasi (tidak sedang dipinjam)
  findAvailable: (userJurusan?: string) => {
    const excludedKodeLokasi = [
      "24.2.01",
      "24.2.02",
      "24.2.03",
      "24.2.04",
      "24.1.01",
      "24.1.02.001",
      "24.1.03",
      "24.1.02",
      "24.2.01.002",
      "481.STI.007",
      "24.2.01.001",
      "24.1.11",
      "24.1.12",
      "24.1.15",
      "24.1.13",
      "24.1.14",
      "24.3.01",
      "24.3.02",
      "24.3.03",
      "24.3.04",
      "24.3.05",
    ];

    const where: any = {
      status: StatusLokasi.tidakDipinjam,
      kode_lokasi: {
        notIn: excludedKodeLokasi,
      },
    };

    if (userJurusan) {
      where.jurusan = {
        in: [userJurusan as Jurusan, Jurusan.umum],
      };
    }

    return prisma.dataLokasi.findMany({
      where,
      select: {
        kode_lokasi: true,
        lokasi: true,
        status: true,
      },
      orderBy: {
        lokasi: "asc",
      },
    });
  },
};
