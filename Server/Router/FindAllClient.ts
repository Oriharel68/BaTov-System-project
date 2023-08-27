import { Model } from "mongoose";
import { Client } from "../models/interface";
import { Request,Response } from "express";


const express = require('express');
const router = express.Router();
const ClientsModel:Model<Client> = require('../models/ClientsModel');




router.get("/", async (req:Request, res:Response) => {
    try {
      const ClientDB = await ClientsModel.find(); //find all of the clients in the company
      return res.send(ClientDB);
    } catch (error) {
      console.log(error.message);
      return res.status(500).send({ ok: false, error: error.message });
    }
  });

export default router;