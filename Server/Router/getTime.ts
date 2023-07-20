import {Request,Response} from 'express';
import { Model } from "mongoose";
import {Client,Order} from '../models/interface'


const express = require('express');
const getTime = express.Router();
// const ClientModel:Model<Client> = require('../models/ClientsModel');
const OrdersModel:Model<Order> = require('../models/OrderModel');



getTime.get('/', async (req:Request,res:Response)=>{
//  try {
//     const clientOrders = await OrdersModel.findOne({DateTime});
//     console.log(clientOrders);
//     const frameZones = Array.from(clientOrders);

//      const OrderDate = clientOrders.forEach( (Date) => {
//        const date = Date.DateTime;
//        const NewDate = date.getTime()
//      });

    
   
//  } catch (error) {
//     console.log(error.message);
    
//  }
})

export default getTime;