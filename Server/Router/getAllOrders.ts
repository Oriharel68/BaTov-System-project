import { Model } from 'mongoose';
import { Order } from '../models/interface';
import { Request, Response, Router } from 'express';

const express = require('express');
const router: Router = express.Router();
const OrdersModel: Model<Order> = require('../models/OrderModel');

router.get('/', async (req: Request, res: Response) => {
  try {
    const OrdersDB = await OrdersModel.find(); // find the orders of the company
    return res.status(200).send({Orders: OrdersDB });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ ok: false, error: error.message });
  }
});
export default router;
