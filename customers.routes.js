import { Router } from "express";
const router = Router();
router.get("/", (_, res) => res.json({ data: [] }));
router.post("/", (req, res) => res.status(201).json({ message: "Customer endpoint ready", data: req.body }));
export default router;
