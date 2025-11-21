import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

/**
 * Extended JWT payload used by the authentication middleware.
 *
 * Includes application-specific claims in addition to the standard JwtPayload fields.
 *
 * @remarks
 * - "nik" is the user's unique identifier present in the token (for example, a
 *   national identity number or internal user ID) and is used to identify the
 *   authenticated subject.
 * - "role" indicates the user's authorization level (for example "admin", "user", etc.)
 *   and is used for access control decisions.
 *
 * @extends JwtPayload
 *
 * @property {string} nik - Unique user identifier contained in the token.
 * @property {string} role - Role or permission level assigned to the user.
 */
export interface TokenPayload extends JwtPayload {
  nik: string;
  role: string;
}

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const header = req.headers.authorization;

    if (!header || !header.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const token = header.split(" ")[1];

    // Tambahkan pengecekan supaya type bukan undefined
    if (!token) {
      return res.status(401).json({ message: "Token not provided" });
    }

    const secret = process.env.JWT_SECRET;
    if (!secret) {
      throw new Error("JWT_SECRET is not defined");
    }

    const decoded = jwt.verify(token, secret) as unknown as TokenPayload;

    if (!decoded.nik || !decoded.role) {
      return res.status(401).json({ message: "Invalid token payload" });
    }

    (req as any).user = decoded;

    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid Token" });
  }
};
