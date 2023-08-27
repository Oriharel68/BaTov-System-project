import { Model } from 'mongoose';
import { Order } from '../models/interface';
import { Request, Response, Router } from 'express';

const express = require('express');
const router: Router = express.Router();
const OrdersModel: Model<Order> = require('../models/OrderModel');

router.post('/', async (req: Request, res: Response) => {
  try {
    let { TypeOfService, WorkerName } = req.body;
    if (!TypeOfService || !WorkerName) {
      return res.status(400).send({ ok: false, error: 'missing info' });
    }
    const Orders = await OrdersModel.find({
      $and: [{ TypeOfService }, { WorkerName }],
    });
    return res.status(200).send(Orders);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ ok: false, error: error.message });
  }
});
export default router;
