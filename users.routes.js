import { Router } from "express";
const router = Router();
router.get("/", (_, res) => res.json({ data: [] }));
router.post("/", (req, res) => res.status(201).json({ message: "User endpoint ready", data: req.body }));
router.put("/:id", (req, res) => res.json({ message: "User endpoint ready", id: req.params.id, data: req.body }));
router.delete("/:id", (req, res) => res.json({ message: "User endpoint ready", id: req.params.id }));
export default router;
