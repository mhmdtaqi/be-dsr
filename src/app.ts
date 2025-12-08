import express, { Request, Response, NextFunction } from "express";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";

// Import routes
import authRoutes from "./routes/authroute";
import databarangRoutes from "./routes/databarangroute";
import barangunitRoutes from "./routes/barangunitroute";
import lokasiRoutes from "./routes/lokasiroute";
import monitoringRoutes from "./routes/monitoringroute";
import peminjamanRoutes from "./routes/peminjamanroute";
import laporanRoutes from "./routes/laporanroute";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security middleware
app.use(helmet());

// CORS configuration for Vercel serverless
const allowedOrigins = [
  "http://localhost:3000",
  "https://bmn-faste.vercel.app",
];

// Manual CORS middleware for Vercel
app.use((req, res, next) => {
  const origin = req.headers.origin;
  console.log("Request from origin:", origin);
  console.log("Allowed origins:", allowedOrigins);

  if (!origin || allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin || "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS, PATCH"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization, X-Requested-With"
    );
    res.setHeader("Access-Control-Allow-Credentials", "true");
    console.log("CORS allowed for origin:", origin);
  } else {
    console.log("CORS denied for origin:", origin);
  }

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    res.sendStatus(200);
    return;
  }

  next();
});

// Body parser middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
} else {
  app.use(morgan("combined"));
}

// Health check
app.get("/", (_req: Request, res: Response) => {
  res.json({
    success: true,
    message: "Backend DSR API is running",
    version: "1.0.0",
    timestamp: new Date().toISOString(),
  });
});

app.get("/health", (_req: Request, res: Response) => {
  res.json({
    success: true,
    status: "healthy",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

// API Routes
const API_PREFIX = "/api";

app.use(`${API_PREFIX}/auth`, authRoutes);
app.use(`${API_PREFIX}/databarang`, databarangRoutes);
app.use(`${API_PREFIX}/barangunit`, barangunitRoutes);
app.use(`${API_PREFIX}/lokasi`, lokasiRoutes);
app.use(`${API_PREFIX}/monitoring`, monitoringRoutes);
app.use(`${API_PREFIX}/peminjaman`, peminjamanRoutes);
app.use(`${API_PREFIX}/laporan`, laporanRoutes);

// 404 Handler
app.use((_req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Endpoint not found",
  });
});

// Global Error Handler
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error("Global error handler:", err);

  // Provide more specific error messages for common issues
  let errorMessage = "Terjadi kesalahan server";
  let statusCode = 500;

  if ((err as any).code === "P1001") {
    errorMessage = "Tidak dapat terhubung ke database";
    statusCode = 503;
  } else if ((err as any).code === "P2002") {
    errorMessage = "Data duplikat ditemukan";
    statusCode = 409;
  } else if ((err as any).code === "P2025") {
    errorMessage = "Data tidak ditemukan";
    statusCode = 404;
  } else if (err.message?.includes("CORS")) {
    errorMessage = "Masalah konfigurasi CORS";
    statusCode = 500;
  } else if (err.message?.includes("JWT")) {
    errorMessage = "Token tidak valid";
    statusCode = 401;
  } else if (err.message?.includes("bcrypt")) {
    errorMessage = "Masalah enkripsi password";
    statusCode = 500;
  }

  res.status(statusCode).json({
    success: false,
    message: process.env.NODE_ENV === "production" ? errorMessage : err.message,
    ...(process.env.NODE_ENV === "development" && {
      stack: err.stack,
      code: (err as any).code,
      originalMessage: err.message,
    }),
  });
});

// For Vercel serverless deployment
if (process.env.NODE_ENV !== "production") {
  // Only start server in development
  const server = app.listen(PORT, () => {
    console.log("=================================");
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📍 Environment: ${process.env.NODE_ENV || "development"}`);
    console.log(`🌐 API URL: http://localhost:${PORT}${API_PREFIX}`);
    console.log("=================================");
  });
}

export default app;
