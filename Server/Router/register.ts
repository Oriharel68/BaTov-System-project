import { Model } from "mongoose";
import { Client } from "../models/interface";
import { Request,Response } from "express";



const express = require('express');
const register = express.Router();
const ClientsModel:Model<Client> = require('../models/ClientsModel');



register.post('/',async(req:Request,res:Response)=>{
    try {
        let { FirstName, LastName, Email, PhoneNumber } = req.body;
        if (!FirstName || !LastName || !Email || !PhoneNumber)
          throw new Error("missing info complete required info(in post /register)");
        if (await ClientsModel.findOne({ $or: [{ Email }, { PhoneNumber }] }))
          throw new Error("Email or Phone Number already exists in the system ");
        const ClientDB = new ClientsModel({
          FirstName,
          LastName,
          Email,
          PhoneNumber,
        });
        
        await ClientDB.save().then((data) => {
          res.send({ ok: true, data });
        });
      } catch (err) {
        console.log(err.message);
        res.send({ ok: false, error: err.message });
      }
});


export default register;