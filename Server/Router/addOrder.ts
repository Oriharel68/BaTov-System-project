import { Model } from 'mongoose';
import { Order, Client } from '../models/interface';
import { Request, Response, Router } from 'express';

const express = require('express');
const router: Router = express.Router();
const OrdersModel: Model<Order> = require('../models/OrderModel');
const ClientsModel: Model<Client> = require('../models/ClientsModel');

router.post('/', async (req: Request, res: Response) => {
  try {
    let { TypeOfService, WorkerName, Email, DateTime, Price } = req.body;
    if (!TypeOfService || !WorkerName || !Email || !DateTime || !Price) {
      return res
        .status(400)
        .send({
          ok: false,
          error: 'missing info complete required info(in get /addOrder)',
        }); //checking if one of them empty
    }
    const clientId = await ClientsModel.findOne({ Email }); //finding the client that want to add an order
    if (!clientId) {
      return res.status(404).send({ ok: false, error: 'client not found' });
    }
    const orderDB = new OrdersModel({
      TypeOfService,
      WorkerName,
      ClientId: clientId._id.toString(),
      DateTime,
      Price,
    }); //adding the order to the database
    // // const combinedObject = { ...dbObject, ...stateObject }; // Merge using the spread operator (shallow merge)
    await orderDB.save().then(() => {
      return res.send({ ok: true });
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ ok: false, error: error.message });
  }
});

export default router;
