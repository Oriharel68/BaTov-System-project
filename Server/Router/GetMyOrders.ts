import { Model } from 'mongoose';
import { Order, Client } from '../models/interface';
import { Request, Response, Router } from 'express';

const express = require('express');
const router: Router = express.Router();
const OrdersModel: Model<Order> = require('../models/OrderModel');
const ClientsModel: Model<Client> = require('../models/ClientsModel');

router.get('/', async (req: Request, res: Response) => {
  try {
    const { Email } = req.query;
    if (!Email)
      return res
        .status(400)
        .json({error: 'No email(in post /GetMyOrders)' });

    const Client = await ClientsModel.findOne({ Email });
    if (!Client)
      return res
        .status(400)
        .json({error: 'No email(in post /GetMyOrders)' });

    const MyOrders = await OrdersModel.find({
      ClientId: Client._id.toString(),
    });
    return res.status(200).json(MyOrders);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: error });
  }
});

export default router;
