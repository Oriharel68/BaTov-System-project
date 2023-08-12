import { Model } from "mongoose";
import { Service } from "../models/interface";
import {Router ,Request,Response} from 'express'

const ServiceProviderModel:Model<Service> = require('../models/ServiceProviderModel');
const express = require('express');

const router:Router = express.Router();


router.post("/", async (req:Request, res:Response) => {
    try {
        const { _id,WorkerName,TypeOfService,Price} = req.body;
        // console.log(req.body);
        
      const ClientDB = await ServiceProviderModel.findOneAndUpdate({_id},{WorkerName:WorkerName,TypeOfService:TypeOfService,Price:Price});
      res.send({ClientDB,ok:true});
      
    } catch (error) {
      res.send({ ok: false, error: error.message });
    }
  });

export default router;