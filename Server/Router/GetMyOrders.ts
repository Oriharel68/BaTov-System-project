import { Model } from "mongoose";
import { Order,Client } from "../models/interface";
import { Request,Response,Router} from 'express';


const express = require('express');
const GetMyOrders:Router = express.Router();
const OrdersModel:Model<Order> = require('../models/OrderModel');
const ClientsModel:Model<Client> = require('../models/ClientsModel');

GetMyOrders.post('/',async(req:Request,res:Response)=>{
    try {
        const {Email} = req.body;
        if(!Email)throw new Error("No email(in post /GetMyOrders)");
        
        const Client = await ClientsModel.findOne({Email});
        if(!Client) throw new Error("Client doesnt exist(in post /GetMyOrders)");
        
        const MyOrders = await OrdersModel.find({ClientId:Client._id.toString()});
        res.send(MyOrders);
      } catch (error) {
        console.log(error.message);
        res.status(500).send({ok:false,error:error});
      }    
});


export default GetMyOrders;
