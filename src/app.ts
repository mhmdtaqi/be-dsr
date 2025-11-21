import express from "express";
import "./utils/cron";
import databarangRoutes from "./routes/databarangroute";
import barangunitRoutes from "./routes/barangunitroute";
import lokasiRoutes from "./routes/lokasiroute";
import monitoringRoutes from "./routes/monitoringroute";
import peminjamanRoutes from "./routes/peminjamanroute";
import userRoute from "./routes/authroute";

const app = express();
app.use(express.json());

// mount
app.use("/user", userRoute)
app.use("/databarang", databarangRoutes);
app.use("/barangunit", barangunitRoutes);
app.use("/lokasi", lokasiRoutes);
app.use("/monitoring", monitoringRoutes);
app.use("/peminjaman", peminjamanRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
