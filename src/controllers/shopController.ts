import { getShops } from "../database/shop";
import express from "express";

export const getAllShops = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const shops = await getShops();
    res.json({ shops }).status(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(404);
  }
};
