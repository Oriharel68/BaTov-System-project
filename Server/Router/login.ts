import { Request, Response, Router } from 'express';
import { Model } from 'mongoose';
import { Client } from '../models/interface';

const express = require('express');
const router: Router = express.Router();
const jwt = require('jsonwebtoken');
const ClientsModel: Model<Client> = require('../models/ClientsModel');

router.post('/', async (req: Request, res: Response) => {
  try {
    const uid = req.body?.uid;
    if (!uid) return res.sendStatus(400);
    const client = await ClientsModel.findOne({ firebaseUid: uid });
    if (!client) return res.sendStatus(400);
    const token = jwt.sign(uid, process.env.ACCESS_TOKEN_SECRET || '');
    return res.status(200).json({ token });
  } catch (error) {
    console.log(error);

    return res.sendStatus(500);
  }
});

export default router;
