import mongoose, { Schema } from "mongoose";

const ShopSchema = new mongoose.Schema({
  title: { type: String },
});

export const ShopModel = mongoose.model("Shop", ShopSchema);

export const getShops = () => ShopModel.find();

const initialData = [
  {
    _id: "65f0faaf31316b923806cf5f",
    title: "The Green Thumb",
  },
  {
    _id: "65f0faaf31316b923806cf60",
    title: "Stitches & Seams",
  },
  {
    _id: "65f0faaf31316b923806cf61",
    title: "The Wandering Wardrobe",
  },
  {
    _id: "65f0faaf31316b923806cf62",
    title: "Clockwork Sparrow",
  },
  {
    _id: "65f0faaf31316b923806cf63",
    title: "Fizz & Clink",
  },
];

initialData.forEach((item) => {
  ShopModel.findOneAndUpdate(item, {}, { upsert: true, new: true }).catch(
    (error) => {
      console.error("Error creating product:", error);
    }
  );
});
