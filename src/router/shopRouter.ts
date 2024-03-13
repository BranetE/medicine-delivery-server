import { getAllShops } from "../controllers/shopController";
import { getShops } from "../database/shop";
import express from "express";

export default (router: express.Router) => {
  router.get("/shop", getAllShops);
};
