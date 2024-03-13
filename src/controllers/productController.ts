import { getByShopId } from "../database/product";
import express from "express";
export const getProductsByShopId = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const products = await getByShopId(req.params.shopId);
    return res.json(products).status(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(404);
  }
};
