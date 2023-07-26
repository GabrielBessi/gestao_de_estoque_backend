const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name_product: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  code_product: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
});

module.exports = ProductSchema;
