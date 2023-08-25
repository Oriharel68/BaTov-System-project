import { Model } from "mongoose";
import { Order } from "../models/interface";
import {Router ,Request,Response} from 'express'

const express = require('express');
const router:Router = express.Router();
const Orders:Model<Order> = require('../models/OrderModel');


router.delete('/',async (req:Request,res:Response)=>{
    try {
        const {orderId} = req.query;
        const removed = await Orders.findByIdAndRemove(orderId);
        return res.status(200).send({deleted:true});
    } catch (error) {
        return res.status(500).send({deleted:false});
        
    }
})
export default router;