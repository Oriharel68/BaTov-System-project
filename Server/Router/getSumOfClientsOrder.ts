import { Request, Response } from 'express';
import { Model } from 'mongoose';
import { Client, Order } from '../models/interface';

const express = require('express');
const router = express.Router();
const ClientModel: Model<Client> = require('../models/ClientsModel');
const OrdersModel: Model<Order> = require('../models/OrderModel');

router.get('/', async (req: Request, res: Response) => {
  try {
    const ClientDB = await ClientModel.find();
    const ClientWithPrice = Promise.all(
      ClientDB.map(async (Client) => {
        const OrderOfClient = await OrdersModel.find({ ClientId: Client._id });

        const TotalMoney = OrderOfClient.reduce(
          (acc, currnetValue) => acc + (currnetValue.Price as number),
          0
        );
        //returns the sum of all the orders for all of the clients using promise all to wait for finding the order

        return {
          ClientName: `${Client.FirstName} ${Client.LastName}`,
          Total: TotalMoney,
          Email: Client.Email,
          PhoneNumber: Client.PhoneNumber,
        };
      })
    ).then((value) => {
      return res.status(200).json(value);
    });
  } catch (error) {
    return res.status(500).send(error);
  }
});

export default router;
