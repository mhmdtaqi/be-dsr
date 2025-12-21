-- CreateEnum
CREATE TYPE "Jurusan" AS ENUM ('umum', 'tif');

-- AlterTable
ALTER TABLE "BarangUnit" ADD COLUMN     "jurusan" "Jurusan" NOT NULL DEFAULT 'umum';

-- AlterTable
ALTER TABLE "DataLokasi" ADD COLUMN     "jurusan" "Jurusan" NOT NULL DEFAULT 'umum';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "jurusan" "Jurusan" NOT NULL DEFAULT 'umum';
