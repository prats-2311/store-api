const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "product name mus be provided"],
  },
  price: {
    type: Number,
    required: [true, "product price must be provided"],
  },
  //   "name": "accent chair",
  //   "price": 25,
  //   "company": "marcos",
  //   "rating": 4
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ["ikea", "liddy", "caressa", "marcos"],
      message: "{VALUE} is not supported",
    },
    // enum: ["ikea", "marcos", "liddy", "caressa"],
  },
});
module.exports = mongoose.model("Product", productSchema);
