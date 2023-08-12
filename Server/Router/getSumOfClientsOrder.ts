import {Request,Response} from 'express';
import { Model } from "mongoose";
import {Client,Order} from '../models/interface'


const express = require('express');
const router = express.Router();
const ClientModel:Model<Client> = require('../models/ClientsModel');
const OrdersModel:Model<Order> = require('../models/OrderModel');


router.get('/',async (req:Request,res:Response)=>{
    try {
        const ClientDB = await ClientModel.find();
        const ClientWithPrice = Promise.all(
            ClientDB.map(async (Client)=>{
            const OrderOfClient = await OrdersModel.find({ClientId:Client._id});
            
            
               const TotalMoney = OrderOfClient.reduce((acc,currnetValue)=>acc+(currnetValue.Price as number),0);
      
               
               return {ClientName:`${Client.FirstName} ${Client.LastName}`,Total:TotalMoney,Email:Client.Email,PhoneNumber:Client.PhoneNumber};
            })).then((value)=>{
                res.status(200).send(value);
            })
    } catch (error) {
        res.status(500).send(error);
    }

})

export default router;