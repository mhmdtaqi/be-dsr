import prisma from "../prismaClient";
import {
  Prisma,
  StatusB,
  StatusP,
  StatusBooking,
  StatusLokasi,
  Role,
  Jurusan,
} from "../../generated/prisma";

// ✅ hanya jenis_barang berikut yang boleh dipinjam
const ALLOWED_JENIS = ["Proyektor", "Microphone", "Sound System"];

export const peminjamanService = {
  // CREATE (booking + barang)
  create: async (data: {
    userNik: string;
    kodeLokasi?: string;
    lokasiTambahan?: string;
    no_hp: string;
    Agenda: string;
    waktuMulai: Date;
    waktuSelesai: Date;
    barangList: string[]; // Array of NUP
  }) => {
    const {
      userNik,
      kodeLokasi,
      lokasiTambahan,
      no_hp,
      Agenda,
      waktuMulai,
      waktuSelesai,
      barangList,
    } = data;

    console.log("DEBUG SERVICE: Starting peminjaman create for userNik:", userNik);
    console.log("DEBUG SERVICE: Payload - kodeLokasi:", kodeLokasi, "lokasiTambahan:", lokasiTambahan, "barangList:", barangList);

    // 1. Validasi Input Dasar
    if (!barangList || barangList.length === 0) {
      console.log("DEBUG SERVICE: barangList empty");
      throw new Error("Daftar barang (barangList) wajib diisi minimal 1 item");
    }

    if (!kodeLokasi && !lokasiTambahan) {
      throw new Error("Lokasi atau lokasi tambahan wajib diisi");
    }

    // Note: Kita perbolehkan kodeLokasi & lokasiTambahan kosong jika logic frontend mengizinkan, 
    // tapi di sini validasi Anda mewajibkan salah satu. Itu oke.

    if (kodeLokasi && lokasiTambahan) {
      throw new Error(
        "Tidak boleh mengisi kodeLokasi dan lokasiTambahan bersamaan"
      );
    }

    // 2. Validasi User (Max Peminjaman & Peminjaman Aktif)
    console.log("DEBUG SERVICE: Checking user validations");
    const existingActive = await prisma.peminjamanP.findFirst({
      where: {
        userNik,
        status: { in: [StatusP.booking, StatusP.aktif] },
      },
    });
    console.log("DEBUG SERVICE: existingActive:", existingActive);

    if (existingActive) {
      console.log("DEBUG SERVICE: User has active borrowing");
      throw new Error(
        "Anda masih memiliki peminjaman aktif. Selesaikan terlebih dahulu"
      );
    }

    const total = await prisma.peminjamanP.count({
      where: {
        userNik,
        NOT: { status: StatusP.batal },
      },
    });
    console.log("DEBUG SERVICE: total borrowings:", total);

    if (total >= 3) {
      console.log("DEBUG SERVICE: Max borrowings reached");
      throw new Error("Anda sudah mencapai batas maksimal 3 peminjaman");
    }

    // 3. Validasi Barang (Ketersediaan & Jenis)
    console.log("DEBUG SERVICE: Checking barang validations");
    const barangChecks = await prisma.barangUnit.findMany({
      where: { nup: { in: barangList } },
      select: {
        nup: true,
        status: true,
        jurusan: true,
        dataBarang: {
          select: {
            jenis_barang: true,
            merek: true,
          },
        },
      },
    });
    console.log("DEBUG SERVICE: barangChecks:", barangChecks);

    if (barangChecks.length !== barangList.length) {
      const foundNups = barangChecks.map((b) => b.nup);
      const notFound = barangList.filter((nup) => !foundNups.includes(nup));
      console.log("DEBUG SERVICE: notFound barang:", notFound);
      throw new Error(`Barang tidak ditemukan: ${notFound.join(", ")}`);
    }

    // Cek jenis barang yang diperbolehkan
    const notAllowed = barangChecks.filter((b) => {
      const jenis = b.dataBarang?.jenis_barang;
      if (!jenis) return true;
      return !ALLOWED_JENIS.includes(jenis);
    });

    if (notAllowed.length > 0) {
      const list = notAllowed
        .map(
          (b) =>
            `${b.nup} (${b.dataBarang?.jenis_barang ?? "-"} - ${
              b.dataBarang?.merek ?? "-"
            })`
        )
        .join(", ");
      throw new Error(
        `Barang berikut tidak boleh dipinjam melalui sistem ini: ${list}`
      );
    }

    // Cek status ketersediaan barang
    const unavailable = barangChecks.filter(
      (b) => b.status !== StatusB.Tersedia
    );
    if (unavailable.length > 0) {
      const unavailableList = unavailable
        .map((b) => `${b.nup} (${b.dataBarang?.jenis_barang})`)
        .join(", ");
      throw new Error(`Barang tidak tersedia: ${unavailableList}`);
    }

    // --- BAGIAN YANG DIHAPUS ---
    // Logika "Jika ada lokasi, barang harus umum" SUDAH DIHAPUS DI SINI.
    // Sekarang Barang Jurusan boleh dipinjam dengan lokasi apapun.
    // ---------------------------

    // 4. Validasi Lokasi (Jika pakai Lokasi Database)
    if (kodeLokasi) {
      console.log("DEBUG SERVICE: Checking lokasi:", kodeLokasi);
      const lokasiData = await prisma.dataLokasi.findUnique({
        where: { kode_lokasi: kodeLokasi },
      });
      console.log("DEBUG SERVICE: lokasiData:", lokasiData);

      if (!lokasiData) {
        console.log("DEBUG SERVICE: lokasi not found");
        throw new Error(`Lokasi dengan kode ${kodeLokasi} tidak ditemukan`);
      }

      // Cek apakah lokasi bisa dipinjam (hanya jika user benar-benar booking ruangan)
      // TAPI: Karena ini peminjaman Barang, lokasi mungkin hanya keterangan.
      // Jika Anda ingin lokasi tetap dicek statusnya (agar tidak bentrok event lain), biarkan kode ini.
      // Jika lokasi HANYA label (misal pinjam proyektor buat di kelas), validasi ini mungkin terlalu ketat 
      // jika kelas sedang dipakai kuliah. 
      // Namun untuk keamanan data, kita biarkan cek status ketersediaan lokasi DB.
      
      if (lokasiData.status === StatusLokasi.dipinjam) {
        throw new Error("Lokasi sedang dipinjam / digunakan kegiatan lain");
      }

      if (lokasiData.status === StatusLokasi.belumTersedia) {
        throw new Error("Lokasi belum tersedia untuk digunakan");
      }
    }

    // 5. Eksekusi Transaksi Database
    const pinjam = await prisma.$transaction(
      async (tx) => {
        // Create Header Peminjaman
        const newPeminjaman = await tx.peminjamanP.create({
          data: {
            userNik,
            kodeLokasi: kodeLokasi || null,
            lokasiTambahan: lokasiTambahan || null,
            no_hp,
            Agenda,
            waktuMulai: new Date(waktuMulai),
            waktuSelesai: new Date(waktuSelesai),
            status: StatusP.booking,
            verifikasi: StatusBooking.pending,
            items: {
              create: barangList.map((nup: string) => ({
                nupBarang: nup,
              })),
            },
          },
          include: {
            items: {
              include: {
                barangUnit: {
                  include: {
                    dataBarang: true,
                  },
                },
              },
            },
            user: {
              select: {
                nik: true,
                nama: true,
                email: true,
              },
            },
            lokasi: true,
          },
        });

        // Barang tetap Tersedia sampai peminjaman aktif

        // Update Status Lokasi -> Dipinjam (Hanya jika pakai lokasi DB)
        if (kodeLokasi) {
          await tx.dataLokasi.update({
            where: { kode_lokasi: kodeLokasi },
            data: { status: StatusLokasi.dipinjam },
          });
        }

        return newPeminjaman;
      },
      { timeout: 10000 }
    );

    return pinjam;
  },

  // BATALKAN
  cancel: async (id: number, userNik: string) => {
    const pem = await prisma.peminjamanP.findUnique({
      where: { id },
      include: { items: true },
    });

    if (!pem) {
      throw new Error("Peminjaman tidak ditemukan");
    }

    if (pem.userNik !== userNik) {
      throw new Error(
        "Anda tidak memiliki akses untuk membatalkan peminjaman ini"
      );
    }

    if (pem.status === StatusP.selesai) {
      throw new Error("Peminjaman sudah selesai, tidak dapat dibatalkan");
    }

    if (pem.status === StatusP.batal) {
      throw new Error("Peminjaman sudah dibatalkan sebelumnya");
    }

    if (pem.status === StatusP.aktif) {
      throw new Error("Peminjaman sudah aktif, hubungi staff untuk pembatalan");
    }

    const result = await prisma.$transaction(async (tx) => {
      const updated = await tx.peminjamanP.update({
        where: { id },
        data: { status: StatusP.batal, verifikasi: StatusBooking.ditolak },
        include: {
          items: {
            include: {
              barangUnit: {
                include: {
                  dataBarang: true,
                },
              },
            },
          },
          user: true,
          lokasi: true,
        },
      });

      await tx.barangUnit.updateMany({
        where: { nup: { in: pem.items.map((i) => i.nupBarang) } },
        data: { status: StatusB.Tersedia },
      });

      if (pem.kodeLokasi) {
        await tx.dataLokasi.update({
          where: { kode_lokasi: pem.kodeLokasi },
          data: { status: StatusLokasi.tidakDipinjam },
        });
      }

      return updated;
    });

    return result;
  },

  // VERIFIKASI (staff_prodi & kepala_bagian_akademik & staff)
  verify: async (id: number, verifikasi: StatusBooking, role: Role, userJurusan?: Jurusan) => {
    const pem = await prisma.peminjamanP.findUnique({
      where: { id },
      include: {
        items: {
          include: {
            barangUnit: {
              include: {
                dataBarang: true,
              },
            },
          },
        },
        lokasi: true,
      },
    });

    if (!pem) {
      throw new Error("Peminjaman tidak ditemukan");
    }

    if (pem.status !== StatusP.booking) {
      throw new Error(
        "Hanya peminjaman dengan status booking yang dapat diverifikasi"
      );
    }



    // LOGIC VERIFIKASI YANG LEBIH FLEKSIBEL
    // Kita hapus aturan ketat lokasi vs barang.
    // Fokus pada ROLE USER vs JENIS BARANG.
    
    // 1. Staff Prodi: Hanya boleh verify jika ada barang dengan jurusan sama seperti jurusan staff_prodi
    if (role === Role.staff_prodi) {
        if (!userJurusan) {
             // Jika ada barang yang BUKAN alat prodi, staff prodi mungkin tidak boleh akses?
             // Atau biarkan saja? Untuk amannya, kita izinkan jika ada minimal 1 barang prodi.
             // Tapi logic lama Anda ketat (harus semua). Kita ikuti logic lama tapi lebih loose.
             const adaBarangJurusan = pem.items.some((item) => item.barangUnit?.jurusan === userJurusan);
             if (!adaBarangJurusan) {
                 throw new Error(`Peminjaman ini tidak mengandung barang jurusan ${userJurusan}`);
             }
        }
    } 
    // 2. Staff Umum: Hanya verify peminjaman dengan barang jurusan umum
    else if (role === Role.staff) {
        const adaBarangUmum = pem.items.some((item) => item.barangUnit?.jurusan === Jurusan.umum);
        if (!adaBarangUmum) {
            throw new Error("Peminjaman ini tidak mengandung barang jurusan umum");
        }
    }
    // 3. Kepala Bagian Akademik: Boleh verify semua

    // Jika ditolak, kembalikan barang dan lokasi
    if (verifikasi === StatusBooking.ditolak) {
      const result = await prisma.$transaction(async (tx) => {
        const updated = await tx.peminjamanP.update({
          where: { id },
          data: {
            verifikasi,
            status: StatusP.batal,
          },
          include: {
            items: true,
            user: true,
            lokasi: true,
          },
        });

        const items = await tx.peminjamanItem.findMany({
          where: { peminjamanId: id },
        });

        await tx.barangUnit.updateMany({
          where: { nup: { in: items.map((i) => i.nupBarang) } },
          data: { status: StatusB.Tersedia },
        });

        if (pem.kodeLokasi) {
          await tx.dataLokasi.update({
            where: { kode_lokasi: pem.kodeLokasi },
            data: { status: StatusLokasi.tidakDipinjam },
          });
        }

        return updated;
      });

      return result;
    }

    // Jika diterima, update verifikasi saja
    return await prisma.peminjamanP.update({
      where: { id },
      data: { verifikasi },
      include: {
        items: {
          include: {
            barangUnit: {
              include: {
                dataBarang: true,
              },
            },
          },
        },
        user: true,
        lokasi: true,
      },
    });
  },

  // AKTIVASI (staff mengaktifkan setelah barang diambil)
  activate: async (id: number) => {
    const pem = await prisma.peminjamanP.findUnique({
      where: { id },
    });

    if (!pem) {
      throw new Error("Peminjaman tidak ditemukan");
    }

    if (pem.verifikasi !== StatusBooking.diterima) {
      throw new Error("Peminjaman harus diverifikasi terlebih dahulu");
    }

    if (pem.status !== StatusP.booking) {
      throw new Error(
        "Hanya peminjaman dengan status booking yang dapat diaktifkan"
      );
    }

    const result = await prisma.$transaction(async (tx) => {
      const updated = await tx.peminjamanP.update({
        where: { id },
        data: { status: StatusP.aktif },
        include: {
          items: true,
          user: true,
          lokasi: true,
        },
      });

      // Set barang TidakTersedia saat aktifkan manual
      const nupList = updated.items.map((item) => item.nupBarang);
      await tx.barangUnit.updateMany({
        where: { nup: { in: nupList } },
        data: { status: StatusB.TidakTersedia },
      });

      if (updated.kodeLokasi) {
        await tx.dataLokasi.update({
          where: { kode_lokasi: updated.kodeLokasi },
          data: { status: StatusLokasi.dipinjam },
        });
      }

      return updated;
    });

    return result;
  },

  // SELESAIKAN (staff memproses pengembalian)
  returnBarang: async (id: number) => {
    const pem = await prisma.peminjamanP.findUnique({
      where: { id },
      include: { items: true },
    });

    if (!pem) {
      throw new Error("Peminjaman tidak ditemukan");
    }

    if (pem.status !== StatusP.aktif) {
      throw new Error("Hanya peminjaman aktif yang dapat dikembalikan");
    }

    const result = await prisma.$transaction(async (tx) => {
      const updated = await tx.peminjamanP.update({
        where: { id },
        data: { status: StatusP.selesai, waktuKembali: new Date() },
        include: {
          items: {
            include: {
              barangUnit: {
                include: {
                  dataBarang: true,
                },
              },
            },
          },
          user: true,
          lokasi: true,
        },
      });

      await tx.barangUnit.updateMany({
        where: { nup: { in: pem.items.map((i) => i.nupBarang) } },
        data: { status: StatusB.Tersedia },
      });

      if (pem.kodeLokasi) {
        await tx.dataLokasi.update({
          where: { kode_lokasi: pem.kodeLokasi },
          data: { status: StatusLokasi.tidakDipinjam },
        });
      }

      return updated;
    });

    return result;
  },

  // SCAN PICKUP (QR pertama / harian) – catat log + waktuAmbil pertama
  scanPickup: async (id: number, petugasNik: string) => {
    const pem = await prisma.peminjamanP.findUnique({
      where: { id },
    });

    if (!pem) {
      throw new Error("Peminjaman tidak ditemukan");
    }

    if (pem.verifikasi !== StatusBooking.diterima) {
      throw new Error("Peminjaman belum diterima, tidak dapat scan pickup");
    }

    // Boleh scan pickup selama status booking atau aktif
    if (pem.status !== StatusP.booking && pem.status !== StatusP.aktif) {
      throw new Error(
        "Peminjaman tidak dalam status yang dapat di-scan pickup"
      );
    }

    const now = new Date();

    const updated = await prisma.$transaction(async (tx) => {
      // Set waktuAmbil pertama kali (hanya untuk pencatatan)
      const updateData: Prisma.PeminjamanPUpdateInput = {};
      if (!pem.waktuAmbil) {
        (updateData as any).waktuAmbil = now;
      }

      const pemAfterUpdate =
        Object.keys(updateData).length > 0
          ? await tx.peminjamanP.update({
              where: { id },
              data: updateData,
            })
          : pem;

      // Insert log scan (untuk pencatatan pickup)
      await tx.logScanBMN.create({
        data: {
          peminjamanId: id,
          jenis: "pickup",
          waktuScan: now,
          petugasNik,
        },
      });

      return pemAfterUpdate;
    });

    return updated;
  },

  // SCAN RETURN (QR kedua / harian) – catat log + waktuKembali terakhir (opsional)
  scanReturn: async (id: number, petugasNik: string) => {
    const pem = await prisma.peminjamanP.findUnique({
      where: { id },
    });

    if (!pem) {
      throw new Error("Peminjaman tidak ditemukan");
    }

    if (pem.status !== StatusP.aktif) {
      throw new Error("Hanya peminjaman aktif yang dapat di-scan return");
    }

    const now = new Date();

    const updated = await prisma.$transaction(async (tx) => {
      // Catat log setiap scan return
      await tx.logScanBMN.create({
        data: {
          peminjamanId: id,
          jenis: "return",
          waktuScan: now,
          petugasNik,
        },
      });

      // Opsional: update waktuKembali setiap scan,
      // atau hanya kalau ini scan terakhir (di sini kita update saja).
      const pemAfterUpdate = await tx.peminjamanP.update({
        where: { id },
        data: {
          waktuKembali: now,
        },
      });

      return pemAfterUpdate;
    });

    return updated;
  },

  // FIND ALL dengan filter
  findAll: (filters?: {
    userNik?: string;
    status?: StatusP;
    verifikasi?: StatusBooking;
    jurusan?: string;
  }) => {
    const where: Prisma.PeminjamanPWhereInput = {};

    if (filters?.userNik) where.userNik = filters.userNik;
    if (filters?.status) where.status = filters.status;
    if (filters?.verifikasi) where.verifikasi = filters.verifikasi;

    // Filter for staff: only peminjaman with items from their jurusan
    // ATAU peminjaman yang melibatkan lokasi mereka (opsional)
    if (filters?.jurusan) {
        // Logic ini memfilter "Tampilkan peminjaman yang ADA item jurusan X"
        // Ini sudah benar untuk Staff Prodi.
        where.items = {
        some: {
          barangUnit: {
            jurusan: filters.jurusan as Jurusan,
          },
        },
      };
    }

    return prisma.peminjamanP.findMany({
      where,
      include: {
        items: {
          include: {
            barangUnit: {
              include: {
                dataBarang: true,
              },
            },
          },
        },
        user: {
          select: {
            nik: true,
            nama: true,
            email: true,
            role: true,
          },
        },
        lokasi: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  },

  findOne: (id: number) =>
    prisma.peminjamanP.findUnique({
      where: { id },
      select: {
        id: true,
        userNik: true,
        kodeLokasi: true,
        lokasiTambahan: true,
        no_hp: true,
        Agenda: true,
        waktuMulai: true,
        waktuSelesai: true,
        verifikasi: true,
        status: true,
        qrCode: true,
        waktuAmbil: true,
        waktuKembali: true,
        createdAt: true,
        items: {
          include: {
            barangUnit: {
              include: {
                dataBarang: true,
              },
            },
          },
        },
        user: {
          select: {
            nik: true,
            nama: true,
            email: true,
            role: true,
          },
        },
        lokasi: true,
      },
    }),

  checkExists: async (id: number): Promise<boolean> => {
    const count = await prisma.peminjamanP.count({
      where: { id },
    });
    return count > 0;
  },
};
