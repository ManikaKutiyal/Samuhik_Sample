const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const cartRoutes = require("./routes/cartRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/cart", cartRoutes);

app.get("/", (req, res) => {
  res.send("Backend running");
});

mongoose
  .connect("mongodb://127.0.0.1:27017/ecommerce")
  .then(() => {
    console.log("MongoDB connected");
    app.listen(5000, () =>
      console.log("Server running on port 5000")
    );
  })
  .catch(err => console.log(err));
