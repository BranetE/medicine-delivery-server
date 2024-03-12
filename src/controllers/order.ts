import express from "express";

export const createOrder = async(req: express.Request, res: express.Response) =>
{
    try{

    }catch(error) {
        console.log(error);
        return res.sendStatus(404)
    }
};
