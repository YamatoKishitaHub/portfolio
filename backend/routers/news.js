const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  const news = await prisma.news.findMany();
  return res.json(news);
});

module.exports = router;
