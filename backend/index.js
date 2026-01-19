const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const cartRoutes = require("./routes/cartRoutes");

const app = express();

app.use(cors({
  origin: "https://samuhik-sample.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

// IMPORTANT for preflight
app.options("*", cors());

app.use(express.json());

// routes
app.use("/api/cart", cartRoutes);

app.get("/", (req, res) => {
  res.send("Backend running");
});
