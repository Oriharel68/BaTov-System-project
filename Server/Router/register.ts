import { Model } from "mongoose";
import { Client } from "../models/interface";
import { Request,Response } from "express";



const express = require('express');
const router = express.Router();
const ClientsModel:Model<Client> = require('../models/ClientsModel');



router.post('/',async(req:Request,res:Response)=>{
    try {
        let { FirstName, LastName, Email, PhoneNumber } = req.body;
        if (!FirstName || !LastName || !Email || !PhoneNumber)
          return res.status(400).send({ok:false,error:'missing/invalid info'})
        if (await ClientsModel.findOne({ $or: [{ Email }, { PhoneNumber }] }))
        return res.status(404).send({ok:false,error:'missing/invalid info'})
        const ClientDB = new ClientsModel({
          FirstName,
          LastName,
          Email,
          PhoneNumber,
        });
        
        await ClientDB.save().then((data) => {
          return res.send({ ok: true, data });
        });
      } catch (err) {
        console.log(err.message);
        return res.send({ ok: false, error: err.message });
      }
});


export default router;