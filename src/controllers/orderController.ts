import express from "express";
import { createOrder } from "../database/order";

export const createNewOrder = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { user, products } = req.body;
    const order = await createOrder({ user, products });
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(404);
  }
};
