import { createNewOrder } from "../controllers/orderController";
import express from "express";

export default (router: express.Router) => {
  router.post("/order", createNewOrder);
};
