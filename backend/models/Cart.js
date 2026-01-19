const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  items: [
    {
      id: String,
      name: String,
      price: Number,
      image: String,
      variant: String,
      quantity: {
        type: Number,
        default: 1
      }
    }
  ]
});

module.exports = mongoose.model("Cart", cartSchema);
