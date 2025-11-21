import { PrismaClient, StatusB, StatusP } from "../../generated/prisma";

const prisma = new PrismaClient();



export const peminjamanService = {

  // CREATE (booking + barang)
  create: async (data: any) => {
    const {
      userNik,
      kodeLokasi,
      no_hp,
      Agenda,
      waktuMulai,
      waktuSelesai,
      barangList, // [ "NUP001", "NUP002", ... ]
    } = data;

    if (!barangList || barangList.length === 0) {
      throw new Error("Daftar barang (barangList) wajib diisi!");
    }

    // RULE 1 — hanya 1 booking/aktif
    const existingActive = await prisma.peminjamanP.findFirst({
      where: {
        userNik,
        status: { in: ["booking", "aktif"] },
      },
    });

    if (existingActive) {
      throw new Error("User masih memiliki peminjaman aktif!");
    }

    // RULE 2 — maksimal 3 peminjaman kecuali batal
    const total = await prisma.peminjamanP.count({
      where: { userNik, NOT: { status: "batal" } },
    });

    if (total >= 3) {
      throw new Error("User hanya boleh meminjam maksimal 3 kali!");
    }

    // CEK STATUS BARANG
    for (const nup of barangList) {
      const b = await prisma.barangUnit.findUnique({ where: { nup } });
      if (!b) throw new Error(`Barang dengan NUP ${nup} tidak ditemukan`);
      if (b.status !== StatusB.Tersedia)
        throw new Error(`Barang ${nup} sedang tidak tersedia`);
    }

    // BUAT PEMINJAMAN + ITEMS
    const pinjam = await prisma.peminjamanP.create({
      data: {
        userNik,
        kodeLokasi,
        no_hp,
        Agenda,
        waktuMulai: new Date(waktuMulai),
        waktuSelesai: new Date(waktuSelesai),
        status: StatusP.booking,

        items: {
          create: barangList.map((nup: string) => ({
            nupBarang: nup,
          })),
        },
      },
      include: {
        items: true,
      },
    });

    // UPDATE STATUS BARANG → TidakTersedia
    await prisma.barangUnit.updateMany({
      where: { nup: { in: barangList } },
      data: { status: StatusB.TidakTersedia },
    });

    return pinjam;
  },

  // BATALKAN
  cancel: async (id: number) => {
    const pem = await prisma.peminjamanP.update({
      where: { id },
      data: { status: StatusP.batal },
      include: { items: true },
    });

    await prisma.barangUnit.updateMany({
      where: { nup: { in: pem.items.map(i => i.nupBarang) } },
      data: { status: StatusB.Tersedia },
    });

    return pem;
  },

  // SELESAIKAN
  returnBarang: async (id: number) => {
    const pem = await prisma.peminjamanP.update({
      where: { id },
      data: { status: StatusP.selesai },
      include: { items: true },
    });

    await prisma.barangUnit.updateMany({
      where: { nup: { in: pem.items.map(i => i.nupBarang) } },
      data: { status: StatusB.Tersedia },
    });

    return pem;
  },

  findAll: () => prisma.peminjamanP.findMany({ include: { items: true } }),
  findOne: (id: number) =>
    prisma.peminjamanP.findUnique({
      where: { id },
      include: { items: true },
    }),
};
