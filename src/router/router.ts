import express from "express";
import orderRouter from "./orderRouter";
import productRouter from "./productRouter";
import shopRouter from "./shopRouter";

const router = express.Router();

export default (): express.Router => {
  orderRouter(router);
  productRouter(router);
  shopRouter(router);

  return router;
};
