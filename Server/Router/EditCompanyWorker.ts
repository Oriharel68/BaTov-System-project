import { Model } from 'mongoose';
import { Service } from '../models/interface';
import { Router, Request, Response } from 'express';

const ServiceProviderModel: Model<Service> = require('../models/ServiceProviderModel');
const express = require('express');

const router: Router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  try {
    const { _id, WorkerName, TypeOfService, Price } = req.body;
    // console.log(req.body);

    const ClientDB = await ServiceProviderModel.findOneAndUpdate(
      { _id },
      { WorkerName: WorkerName, TypeOfService: TypeOfService, Price: Price }
    );
    return res.status(200).json({ ClientDB }); //updating the service provider info
  } catch (error) {
    return res.status(500).json({error: error.message });
  }
});

export default router;
