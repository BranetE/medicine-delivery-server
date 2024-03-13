import { getProductsByShopId } from "../controllers/productController";
// import { getByShopId, getProducts } from "../database/product";
import express from "express";

export default (router: express.Router) => {
  //   router.get("/product", getProducts);
  router.get(`/product/shop/:shopId`, getProductsByShopId);
};
