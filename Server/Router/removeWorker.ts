import { Model } from 'mongoose';
import { Service } from '../models/interface';
import { Router, Request, Response } from 'express';

const express = require('express');
const router: Router = express.Router();
const ServiceProvider: Model<Service> = require('../models/ServiceProviderModel');

router.post('/', async (req: Request, res: Response) => {
  try {
    const { WorkerName } = req.body;

    const result = await ServiceProvider.deleteOne({ WorkerName });

    if (!result) {
      return res.sendStatus(400);
    } else {
      return res.sendStatus(200);
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ error: error.message });
  }
});

export default router;
