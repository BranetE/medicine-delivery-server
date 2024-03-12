import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
});

export const ProductModel = mongoose.model("Product", ProductSchema);

export const getProducts = () => ProductModel.find();
