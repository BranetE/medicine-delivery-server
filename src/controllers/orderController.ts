import express from "express";
import { createOrder } from "../database/order";
import { ProductModel, getById } from "../database/product";

type User = {
  name: string;
  email: string;
  phone: string;
  address: string;
};

type Product = {
  product: string;
  quantity: number;
  totalPrice?: number;
};

interface ReqBody {
  user: User;
  products: Product[];
}

export const createNewOrder = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const order: ReqBody = req.body;
    order.products = await Promise.all(
      order.products.map(async (e) => {
        var price = (await getById(e.product).exec()).price;
        e.totalPrice = price * e.quantity;
        return e;
      })
    );
    await createOrder(order);
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(404);
  }
};
