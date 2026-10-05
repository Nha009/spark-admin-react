import { Router } from "express";
const router = Router();

router.post("/login", (req, res) => {
  const { username } = req.body || {};
  res.json({ token: "replace-with-real-jwt", user: { username: username || "admin", role: "admin" } });
});

export default router;
