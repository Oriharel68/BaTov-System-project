import {Request,Response} from 'express';
import { Model } from "mongoose";
import {Client,Order} from '../models/interface'


const express = require('express');
const getSumOfClientsOrder = express.Router();
const ClientModel:Model<Client> = require('../models/ClientsModel');
const OrdersModel:Model<Order> = require('../models/OrderModel');


getSumOfClientsOrder.get('/',async (req:Request,res:Response)=>{
    try {
        const ClientDB = await ClientModel.find();
        const ClientWithPrice = Promise.all(
            ClientDB.map(async (Client)=>{
            const OrderOfClient = await OrdersModel.find({ClientId:Client._id});
            //    console.log(OrderOfClient);
            //    if(OrderOfClient.length === 0)return;
            
               const TotalMoney = OrderOfClient.reduce((acc,currnetValue)=>acc+(currnetValue.Price as number),0);
            //    console.log(TotalMoney);
               
               return {ClientName:`${Client.FirstName} ${Client.LastName}`,Total:TotalMoney,Email:Client.Email};
            })).then((value)=>{
                res.status(200).send(value);
            })
    } catch (error) {
        res.status(500).send(error);
    }

})

export default getSumOfClientsOrder;