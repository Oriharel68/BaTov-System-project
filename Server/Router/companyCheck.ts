import { Model } from 'mongoose';
import { Company } from '../models/interface';
import { Router, Request, Response } from 'express';

const express = require('express');
const router: Router = express.Router();
const CompanyModel: Model<Company> = require('../models/CompanyModel');

router.post('/', async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    if (!email)
      return res.status(400).json({error: 'missing info' });
    const Company = await CompanyModel.findOne({ email });
    if (!Company) {
      return res.sendStatus(400);
    } else {
      return res.sendStatus(200); // checking if a email is autorized to go to comapny side
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({error: error.message });
  }
});

export default router;
