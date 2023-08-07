import { Model } from "mongoose";
import { Order } from "../models/interface";
import {Router ,Request,Response} from 'express'

const express = require('express');
const removeOrder:Router = express.Router();
const Orders:Model<Order> = require('../models/OrderModel');


removeOrder.delete('/',async (req:Request,res:Response)=>{
    try {
        const {orderId} = req.query;
        console.log(req.query);
        const removed = await Orders.findByIdAndRemove(orderId);
        console.log(removed);
        
        res.status(200).send({deleted:true});
    } catch (error) {
        res.status(500).send({deleted:false});
        
    }
})
export default removeOrder;