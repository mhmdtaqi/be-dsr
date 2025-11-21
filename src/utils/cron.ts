import cron from "node-cron";
import prisma from "../prismaClient";
import dayjs from "dayjs";

// 1. Otomatis aktifkan peminjaman ketika waktu mulai tiba
cron.schedule("*/1 * * * *", async () => {
  const now = new Date();

  const bookings = await prisma.peminjamanP.findMany({
    where: {
      status: "booking",
      verifikasi: "diterima",
      waktuMulai: { lte: now },
    },
    include: { items: true },
  });

  for (const booking of bookings) {
    await prisma.peminjamanP.update({
      where: { id: booking.id },
      data: { status: "aktif" },
    });

    // ubah barang jadi TidakTersedia
    for (const item of booking.items) {
      await prisma.barangUnit.update({
        where: { nup: item.nupBarang },
        data: { status: "TidakTersedia" },
      });
    }

    console.log("Booking otomatis aktif:", booking.id);
  }
});

// 2. Otomatis selesai ketika waktu habis (TIDAK mengubah status barang)
cron.schedule("*/1 * * * *", async () => {
  const now = new Date();

  const active = await prisma.peminjamanP.findMany({
    where: {
      status: "aktif",
      waktuSelesai: { lte: now },
    },
  });

  for (const booking of active) {
    await prisma.peminjamanP.update({
      where: { id: booking.id },
      data: { status: "selesai" },
    });

    console.log("Booking otomatis selesai:", booking.id);
  }
});

// 3. Batalkan pending BMN yang lebih dari 5 menit
cron.schedule("*/1 * * * *", async () => {
  const nowMinus5 = dayjs().subtract(5, "minute").toDate();

  const pending = await prisma.peminjamanP.findMany({
    where: {
      verifikasi: "pending",
      createdAt: { lte: nowMinus5 },
      items: { some: {} }, // BMN only
    },
  });

  for (const booking of pending) {
    await prisma.peminjamanP.update({
      where: { id: booking.id },
      data: { status: "batal", verifikasi: "ditolak" },
    });

    console.log("Booking pending dibatalkan:", booking.id);
  }
});
