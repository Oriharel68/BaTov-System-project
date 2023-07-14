import { Model } from "mongoose";
import { Service } from "../models/interface";
import {Router ,Request,Response} from 'express'

const ServiceProviderModel:Model<Service> = require('../models/ServiceProviderModel');
const express = require('express');

const addProvider:Router = express.Router();


addProvider.put('/',async (req:Request,res:Response)=>{
   try {
    let { Price, WorkerName, TypeOfService } = req.body;

    if (!Price || !WorkerName || !TypeOfService )
    throw new Error("missing info complete required info");
    
  if (await ServiceProviderModel.findOne({ WorkerName }))
    throw new Error("workerName already exists in the system ");
    const ServiceDB = new ServiceProviderModel({
      Price,
      WorkerName,
      TypeOfService,
    });
  // console.log(ServiceDB);
  
    await ServiceDB.save().then((data)=>{
    res.send({ ok: true, data });
    })
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ ok: false, error: error.message });
  }  
});

export default addProvider;





