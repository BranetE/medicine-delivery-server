import mongoose, { Schema } from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  shop: { type: Schema.ObjectId, ref: "Shop" },
});

export const ProductModel = mongoose.model("Product", ProductSchema);

export const getProducts = () => ProductModel.find();
export const getByShopId = (shopId: string) =>
  ProductModel.find({ getByShopId });
export const getById = (id: string) => ProductModel.findById(id);

const initialData = [
  {
    title: "Snake Plant (Sansevieria)",
    price: 14.99,
    shop: "65f0faaf31316b923806cf5f",
  },
  {
    title: "Monstera Deliciosa",
    price: 29.99,
    shop: "65f0faaf31316b923806cf5f",
  },
  {
    title: "Golden Pothos (Epipremnum)",
    price: 9.99,
    shop: "65f0faaf31316b923806cf5f",
  },
  {
    title: "Cactus (assorted varieties)",
    price: 10.99,
    shop: "65f0faaf31316b923806cf5f",
  },
  {
    title: "Potting mix",
    price: 7.49,
    shop: "65f0faaf31316b923806cf5f",
  },
  {
    title: "Basic hem alteration",
    price: 10.0,
    shop: "65f0faaf31316b923806cf60",
  },
  {
    title: "Jean waist adjustment",
    price: 15.0,
    shop: "65f0faaf31316b923806cf60",
  },
  {
    title: "Shirt tailoring (basic)",
    price: 25.0,
    shop: "65f0faaf31316b923806cf60",
  },
  {
    title: "Custom dress shirt",
    price: 120.0,
    shop: "65f0faaf31316b923806cf60",
  },
  {
    title: "Zipper replacement",
    price: 12.0,
    shop: "65f0faaf31316b923806cf60",
  },
  {
    title: "Flowy maxi dress",
    price: 89.99,
    shop: "65f0faaf31316b923806cf61",
  },
  {
    title: "Cashemere blend sweater",
    price: 129.0,
    shop: "65f0faaf31316b923806cf61",
  },
  {
    title: "High-wasted skinny jeans",
    price: 64.99,
    shop: "65f0faaf31316b923806cf61",
  },
  {
    title: "Delicate gold necklace",
    price: 49.99,
    shop: "65f0faaf31316b923806cf61",
  },
  {
    title: "Crystal wine glasses",
    price: 49.99,
    shop: "65f0faaf31316b923806cf63",
  },
  {
    title: "Hand-blown glass vase",
    price: 79.99,
    shop: "65f0faaf31316b923806cf63",
  },
  {
    title: "Sea of whisky tumblers",
    price: 39.99,
    shop: "65f0faaf31316b923806cf63",
  },
  {
    title: "Decorative decanter",
    price: 54.99,
    shop: "65f0faaf31316b923806cf63",
  },
  {
    title: "Champagne flutes",
    price: 29.99,
    shop: "65f0faaf31316b923806cf63",
  },
];

initialData.forEach((item) => {
  ProductModel.findOneAndUpdate(item, {}, { new: true, upsert: true }).catch(
    (error) => {
      console.error("Error creating product:", error);
    }
  );
});
