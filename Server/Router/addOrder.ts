import { Model } from "mongoose";
import { Order,Client } from "../models/interface";
import { Request,Response,Router} from 'express';

const express = require('express');
const router:Router = express.Router();
const OrdersModel:Model<Order> = require('../models/OrderModel');
const ClientsModel:Model<Client> = require('../models/ClientsModel');


router.post('/',async(req:Request,res:Response)=>{
    try {
        let {TypeOfService, WorkerName,Email,DateTime,Price} = req.body;
        if(!TypeOfService ||!WorkerName||!Email||!DateTime||!Price){
          throw new Error("missing info complete required info(in get /addOrder)");
        }
        const clientId = await ClientsModel.findOne({Email});
        if(!clientId){
          throw new Error("client doesnt exists(in post /addOrder)");
        }
        const orderDB = new OrdersModel({
          TypeOfService, 
          WorkerName,
          ClientId:clientId._id.toString(),
          DateTime,
          Price,
        })
        // // const combinedObject = { ...dbObject, ...stateObject }; // Merge using the spread operator (shallow merge)
        await orderDB.save().then(()=>{
          res.send({ok:true});
        });
    
      } catch (error) {
        console.log(error.message);
        res.send({ ok: false, error: error.message })
      }
});


export default router;
