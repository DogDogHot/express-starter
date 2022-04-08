import express from "express";

const router = express.Router();

router.get("/", (req, res) => res.send("end"));
router.get("/me", (req, res) => res.send("end"));
router.get("/:userId", (req, res) => res.send("end"));
router.patch("/:userId", (req, res) => res.send("end"));
router.delete("/:userId", (req, res) => res.send("end"));
router.patch("/:userId/password", (req, res) => res.send("end"));

export default router;
