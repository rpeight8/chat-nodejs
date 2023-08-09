import express from "express";

const router = express.Router();

router.get("/api/rooms", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Default",
    },
  ]);
});

router.post("/api/rooms/:id/connect", (req, res) => {
  res.json([]);
});

router.post("/api/rooms/:id/messages", (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  res.json({
    id,
    text,
  });
});

export default router;
