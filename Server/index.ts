import { Request, Response, Express } from 'express';

import getAllOrders from './Router/getAllOrders';
import addOrder from './Router/addOrder';
import GetMyOrders from './Router/GetMyOrders';
import register from './Router/register';
import companyCheck from './Router/companyCheck';
import getSumOfClientsOrder from './Router/getSumOfClientsOrder';
import removeOrder from './Router/RemoveOrder';
import removeWork from './Router/removeWorker';
import EditCompanyWorker from './Router/EditCompanyWorker';
import login from './Router/login';
import authenticator from './fireBase/authenticator';
import logout from './Router/logout';
import findAllClients from './Router/FindAllClient';
import getServiceProvider from './Router/getServiceProvider';
import addprovider from './Router/addProvider';
import getExistingOrders from './Router/getExistingOrders';

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app: Express = express();

var port = process.env.PORT;
var mongo_uri = process.env.MONGO_URI;

app.use(express.json());
app.use(                                //cors options 
  cors({
    origin: ['http://localhost:3000', 'https://batov.netlify.app'],
  })
);

mongoose.set('strictQuery', true);

mongoose                                  //mongosose connetion 
  .connect(mongo_uri)
  .then(() => {
    console.log('Connected to DB');
  })
  .catch((err) => {
    console.log(`at mongoose connect: ${err.message}`);
  });

  // the end-point,  the callback file 
app.use('/login', login);
app.use('/register', register);
app.use('/companyCheck', companyCheck);

 // the end-point,-  he middleWare for each and point -, the callback file 
app.use('/findAllClients', authenticator, findAllClients);
app.use('/addProvider', authenticator, addprovider);
app.use('/getServiceProvider', authenticator, getServiceProvider);
app.use('/getExistingOrders', authenticator, getExistingOrders);
app.use('/getAllOrders', authenticator, getAllOrders);
app.use('/addOrder', authenticator, addOrder);
app.use('/GetMyOrders', authenticator, GetMyOrders);
app.use('/removeworker', authenticator, removeWork);
app.use('/EditCompanyWorker', authenticator, EditCompanyWorker);
app.use('/getSumOfClientsOrder', authenticator, getSumOfClientsOrder);
app.use('/RemoveOrder', authenticator, removeOrder);
app.use('/logout', authenticator, logout);

app.use('/*', (req: Request, res: Response) => {
  res.status(404).send('Doesnt exists');
});

app.listen(port, () => {
  console.log('server is on port ' + port);
});
