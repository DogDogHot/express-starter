import express from "express";

const router = express.Router();

router.post("/signup", (req, res) => res.send("end"));
router.post("/login", (req, res) => res.send("end"));
router.post("/logout", (req, res) => res.send("end"));
router.post("/refresh", (req, res) => res.send("end"));
router.get("/check", (req, res) => res.send("end"));

export default router;
