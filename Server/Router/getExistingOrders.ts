import { Model } from "mongoose";
import { Order } from "../models/interface";
import { Request,Response,Router} from 'express';


const express = require('express');
const router:Router = express.Router();
const OrdersModel:Model<Order> = require('../models/OrderModel');




router.post('/',async(req:Request,res:Response)=>{
    try {
        let {TypeOfService , WorkerName} = req.body;
        if(!TypeOfService || !WorkerName){
          throw new Error("missing info complete required info(in get /getExistingOrders)");
        }
        const Orders = await OrdersModel.find({$and:[{TypeOfService},{WorkerName}]});
        res.send(Orders);
        } catch (error) {
          console.log(error.message);
          res.send({ ok: false, error: error.message });
        }
});
export default router;