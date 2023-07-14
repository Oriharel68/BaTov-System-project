import { Model } from "mongoose";
import { Order } from "../models/interface";
import { Request,Response,Router} from 'express';



const express = require('express');
const getAllOrders:Router = express.Router();
const OrdersModel:Model<Order> = require('../models/OrderModel');

getAllOrders.get('/',async (req:Request,res:Response)=>{
    try {
        const OrdersDB = await OrdersModel.find();
        res.send({ok:true,Orders:OrdersDB})
      } catch (error) {
        console.log(error.message);
        res.status(500).send({ ok: false, error: error.message });
      }
});
export default getAllOrders;
