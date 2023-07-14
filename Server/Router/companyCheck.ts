import { Model } from "mongoose";
import { Company } from "../models/interface";
import {Router ,Request,Response} from 'express'

const express = require('express');
const companyCheck:Router = express.Router();
const CompanyModel:Model<Company> = require('../models/CompanyModel');


companyCheck.post('/',async (req:Request,res:Response)=>{
    try {
        const {email} = req.body;
        if(!email)throw new Error("No email(in post /GetMyOrders)");
        const Client = await CompanyModel.findOne({email});
        if(!Client){
          res.send({ok: false})
        } else{
          res.send({ok:true})
        }
      } catch (error) {
        console.log(error.message);
        res.send({ ok: false, error: error.message });
     }
});

export default companyCheck;

