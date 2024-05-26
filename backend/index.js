const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const PORT = 5050;

const contactRoute = require("./routers/contact");
const newsRoute = require("./routers/news");

app.use(express.json());
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}));

app.use("/api/contact", contactRoute);
app.use("/api/news", newsRoute);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
