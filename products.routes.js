import { Router } from "express";
const router = Router();
router.get("/", (_, res) => res.json({ data: [] }));
router.post("/", (req, res) => res.status(201).json({ message: "Product endpoint ready", data: req.body }));
export default router;
