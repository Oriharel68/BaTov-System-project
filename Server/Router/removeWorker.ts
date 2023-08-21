
import { Model } from "mongoose";
import { Service } from "../models/interface";
import {Router ,Request,Response} from 'express'

const express = require('express');
const router:Router = express.Router();
const ServiceProvider:Model<Service> = require('../models/ServiceProviderModel');


router.post('/',async (req:Request,res:Response)=>{
    try {
        const { WorkerName } = req.body;
        

  
        const result = await ServiceProvider.deleteOne({WorkerName});
    
       
        if(!result){
          res.status(401).send({ok: false})
        } else{
          res.status(200).send({ok:true})
        }

      } catch (error) {
        console.log(error.message);
        res.send({ ok: false, error: error.message });
     }
});

export default router;

