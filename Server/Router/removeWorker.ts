
import { Model } from "mongoose";
import { Service } from "../models/interface";
import {Router ,Request,Response} from 'express'

const express = require('express');
const removeWorker:Router = express.Router();
const ServiceProvider:Model<Service> = require('../models/ServiceProviderModel');


removeWorker.delete('/removeworker',async (req:Request,res:Response)=>{
    try {
        const {WorkerName} = req.body;
        // const query = { WorkerName};
        console.log(WorkerName);
        

        // if(!WorkerName)throw new Error("No WorkerName(in post /removeWorker)");
        const result = await ServiceProvider.deleteOne({WorkerName});
        if (result.deletedCount === 1) {
            alert("Successfully deleted one document.");
          } else {
            alert("No documents matched the query. Deleted 0 documents.");
          }
      
        // if(!Client){
        //   res.send({ok: false})
        // } else{
        //   res.send({ok:true})
        // }

      } catch (error) {
        console.log(error.message);
        res.send({ ok: false, error: error.message });
     }
});

export default removeWorker;

