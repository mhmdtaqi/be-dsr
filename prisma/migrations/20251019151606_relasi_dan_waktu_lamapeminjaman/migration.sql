-- CreateEnum
CREATE TYPE "StatusP" AS ENUM ('Tersedia', 'Digunakan', 'Rusak');

-- CreateTable
CREATE TABLE "Proyektor" (
    "id" SERIAL NOT NULL,
    "merek" TEXT NOT NULL,
    "status" "StatusP" NOT NULL DEFAULT 'Tersedia',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Proyektor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PeminjamanP" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "proyektorId" INTEGER NOT NULL,
    "no_hp" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Lokasi" TEXT NOT NULL,
    "Agenda" TEXT NOT NULL,
    "waktuMulai" TIMESTAMP(3) NOT NULL,
    "waktuSelesai" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PeminjamanP_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PeminjamanP_no_hp_key" ON "PeminjamanP"("no_hp");

-- AddForeignKey
ALTER TABLE "PeminjamanP" ADD CONSTRAINT "PeminjamanP_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PeminjamanP" ADD CONSTRAINT "PeminjamanP_proyektorId_fkey" FOREIGN KEY ("proyektorId") REFERENCES "Proyektor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
