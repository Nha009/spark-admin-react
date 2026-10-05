import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";
import usersRoutes from "./routes/users.routes.js";
import customersRoutes from "./routes/customers.routes.js";
import productsRoutes from "./routes/products.routes.js";
import salesRoutes from "./routes/sales.routes.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:3001" }));
app.use(express.json());

app.get("/api/health", (_, res) => res.json({ ok: true, service: "spark-admin-api" }));
app.use("/api/auth", authRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/users", usersRoutes);
app.use("/api/customers", customersRoutes);
app.use("/api/products", productsRoutes);
app.use("/api/sales", salesRoutes);

app.use((_, res) => res.status(404).json({ message: "API route not found" }));
app.listen(port, () => console.log(`Spark Admin API running on http://localhost:${port}`));
