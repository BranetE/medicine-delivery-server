import mongoose, { Schema } from "mongoose";
import { ProductModel } from "./product";
import { title } from "process";

const ShopSchema = new mongoose.Schema({
  title: { type: String },
  products: [{ type: Schema.ObjectId }],
});

export const ShopModel = mongoose.model("Shop", ShopSchema);

export const getShops = () => ShopModel.find({});

const initialData = [
  {
    title: "The Green Thumb",
  },
  {
    title: "Stitches & Seams",
  },
  {
    title: "The Wandering Wardrobe",
  },
  {
    title: "Clockwork Sparrow",
  },
  {
    title: "Fizz & Clink",
  },
];

initialData.forEach((item) => {
  ShopModel.create(item)
    .then((createdItem) => {
      console.log("Shop created: ", createdItem);
    })
    .catch((error) => {
      console.error("Error creating product:", error);
    });
});
