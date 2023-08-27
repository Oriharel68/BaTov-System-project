import { Model } from "mongoose";
import { Company } from "../models/interface";
import {Router ,Request,Response} from 'express'

const express = require('express');
const router:Router = express.Router();
const CompanyModel:Model<Company> = require('../models/CompanyModel');


router.post('/',async (req:Request,res:Response)=>{
    try {
        const {email} = req.body;
        if(!email)
        return res.status(400).send({ ok: false, error:'missing info'})
        const Company = await CompanyModel.findOne({email});
        if(!Company){
          return res.status(400).send({ok: false})
        }else{
          return res.status(200).send({ok:true})// checking if a email is autorized to go to comapny side
        }
      } catch (error) {
        console.log(error.message);
        return res.send({ ok: false, error: error.message });
     }
});

export default router;

