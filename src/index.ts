import express from "express";
import proyRoutes from "./routes/proyRoutes";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/proy", proyRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});