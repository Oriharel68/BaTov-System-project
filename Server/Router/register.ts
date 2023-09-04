import { Model } from 'mongoose';
import { Client } from '../models/interface';
import { Request, Response } from 'express';

const express = require('express');
const router = express.Router();
const ClientsModel: Model<Client> = require('../models/ClientsModel');

router.post('/', async (req: Request, res: Response) => {
  try {
    let { FirstName, LastName, Email, PhoneNumber, firebaseUid } = req.body;
    if (!FirstName || !LastName || !Email || !PhoneNumber || !firebaseUid)
      return res.status(400).send({ error: 'missing/invalid info' });
    if (await ClientsModel.findOne({ $or: [{ Email }, { PhoneNumber }] }))
      return res.status(404).send({error: 'missing/invalid info' });
    const ClientDB = new ClientsModel({
      FirstName,
      LastName,
      Email,
      PhoneNumber,
      firebaseUid,
    });

    await ClientDB.save().then((data) => {
      return res.status(200).json({ data });
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).send({ error: err.message });
  }
});

export default router;
