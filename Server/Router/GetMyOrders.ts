import { Model } from "mongoose";
import { Order,Client } from "../models/interface";
import { Request,Response,Router} from 'express';


const express = require('express');
const router:Router = express.Router();
const OrdersModel:Model<Order> = require('../models/OrderModel');
const ClientsModel:Model<Client> = require('../models/ClientsModel');

router.post('/',async(req:Request,res:Response)=>{
    try {
        const {Email} = req.body;
        if(!Email)return res.status(400).send({ok:false,error:"No email(in post /GetMyOrders)"});
        
        const Client = await ClientsModel.findOne({Email});
        if(!Client)return res.status(400).send({ok:false,error:"No email(in post /GetMyOrders)"});
        
        const MyOrders = await OrdersModel.find({ClientId:Client._id.toString()});
        return res.status(200).send(MyOrders);
      } catch (error) {
        console.log(error.message);
        return res.status(500).send({ok:false,error:error});
      }    
});


export default router;
