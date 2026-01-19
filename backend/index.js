const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const cartRoutes = require("./routes/cartRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/cart", cartRoutes);

app.get("/", (req, res) => {
  res.send("Backend running");
});

mongoose.connect(process.env.MONGO_URI)
  .then(()=> console.log("Mongo connected"))
  .catch(err => console.log(err));

module.exports = app;
