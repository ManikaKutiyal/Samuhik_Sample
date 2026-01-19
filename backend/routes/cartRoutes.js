const express = require("express");
const Cart = require("../models/Cart");

const router = express.Router();

// get cart
router.get("/", async (req, res) => {
  let cart = await Cart.findOne();
  if (!cart) cart = await Cart.create({ items: [] });
  res.json(cart);
});

// add to cart
router.post("/add", async (req, res) => {
  const item = req.body;
  let cart = await Cart.findOne();
  if (!cart) cart = await Cart.create({ items: [] });

  const existing = cart.items.find(i => i.id === item.id);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.items.push({ ...item, quantity: 1 });
  }

  await cart.save();
  res.json(cart);
});

// update quantity
router.put("/update", async (req, res) => {
  const { id, quantity } = req.body;
  const cart = await Cart.findOne();

  cart.items = cart.items.filter(item => {
    if (item.id === id) {
      if (quantity > 0) item.quantity = quantity;
      return quantity > 0;
    }
    return true;
  });

  await cart.save();
  res.json(cart);
});

// remove
router.delete("/:id", async (req, res) => {
  const cart = await Cart.findOne();
  cart.items = cart.items.filter(item => item.id !== req.params.id);
  await cart.save();
  res.json(cart);
});

module.exports = router;
