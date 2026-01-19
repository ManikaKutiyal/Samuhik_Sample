const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// fake cart storage (server memory)
let cart = [];

// get cart
app.get("/api/cart", (req, res) => {
  res.json(cart);
});

// add to cart
app.post("/api/cart/add", (req, res) => {
  const item = req.body;
  const existing = cart.find(i => i.id === item.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...item, quantity: 1 });
  }

  res.json(cart);
});

// update quantity
app.put("/api/cart/update", (req, res) => {
  const { id, quantity } = req.body;

  cart = cart
    .map(item =>
      item.id === id ? { ...item, quantity } : item
    )
    .filter(item => item.quantity > 0);

  res.json(cart);
});

// remove item
app.delete("/api/cart/:id", (req, res) => {
  cart = cart.filter(item => item.id !== req.params.id);
  res.json(cart);
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
