import mongoose, { Schema } from "mongoose";
import { ProductModel } from "./product";

const OrderSchema = new mongoose.Schema({
  user: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
  },
  products: [
    {
      product: { type: Schema.ObjectId, required: true, ref: "Product" },
      quantity: { type: Number, required: true },
      totalPrice: { type: Number, required: true },
    },
  ],
});

export const OrderModel = mongoose.model("Order", OrderSchema);

export const createOrder = (values: Record<string, any>) => {
  new OrderModel(values).save().then((order) => order.toObject());
};
