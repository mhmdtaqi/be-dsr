// src/middleware/authorize.ts

import { Request, Response, NextFunction } from 'express';

// SESUAIKAN DENGAN ENUM PRISMA ANDA
export type UserRole = 
    | 'civitas_faste'
    | 'staff'
    | 'kepala_bagian_akademik'
    | 'staff_prodi';

/**
 * Middleware untuk membatasi akses berdasarkan peran (role) pengguna.
 * Harap dijalankan SETELAH authMiddleware.
 * @param allowedRoles Array peran yang diizinkan (misal: ['staff', 'staff_prodi']).
 */
export const authorize = (allowedRoles: UserRole[]) => {
    return (req: Request, res: Response, next: NextFunction) => {
        // req.user diisi oleh authMiddleware
        const userRole = req.user?.role; 

        if (!userRole) {
             // 403 Forbidden: User terautentikasi, tapi role tidak ditemukan di payload
             return res.status(403).json({ message: "Akses Ditolak: Informasi peran pengguna tidak ditemukan." });
        }

        // 1. Pastikan role dari token adalah salah satu dari tipe yang diizinkan (UserRole)
        // 2. Cek apakah role pengguna termasuk dalam daftar role yang diizinkan (allowedRoles)
        if (allowedRoles.includes(userRole as UserRole)) {
            next(); // Diizinkan, lanjutkan
        } else {
            // 403 Forbidden: User terautentikasi, tapi tidak punya izin untuk route ini
            return res.status(403).json({ message: "Akses Terlarang: Anda tidak memiliki izin untuk tindakan ini." });
        }
    };
};