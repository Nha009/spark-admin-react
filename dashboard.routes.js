import { Router } from "express";
const router = Router();
router.get("/summary", (_, res) => res.json({ products: 0, customers: 0, orders: 0, revenue: 0, sales: [] }));
export default router;
