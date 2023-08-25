import { Model } from "mongoose";
import { Service } from "../models/interface";
import {Router ,Request,Response} from 'express'

const ServiceProviderModel:Model<Service> = require('../models/ServiceProviderModel');
const express = require('express');

const router:Router = express.Router();


router.put('/',async (req:Request,res:Response)=>{
   try {
    let { Price, WorkerName, TypeOfService } = req.body;

    if (!Price || !WorkerName || !TypeOfService )
    return res.status(400).send({ ok: false, error:'invalid info'});
    
  if (await ServiceProviderModel.findOne({ WorkerName }))//checking if a service provider exists if not adding him
  return res.status(409).send({ ok: false, error:'exists'});


    const ServiceDB = new ServiceProviderModel({
      Price,
      WorkerName,
      TypeOfService,
    });
  // console.log(ServiceDB);
  
    await ServiceDB.save().then((data)=>{
    return res.send({ ok: true, data });
    })
  } catch (error) {
    return res.send({ ok: false, error: error.message });
  }  
});

export default router;





