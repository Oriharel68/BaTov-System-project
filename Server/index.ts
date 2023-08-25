

import { Request, Response,Express } from "express";


import getAllOrders from './Router/getAllOrders';
import addOrder from './Router/addOrder';
import GetMyOrders from './Router/GetMyOrders';
import register from './Router/register';
import companyCheck from './Router/companyCheck';
import getSumOfClientsOrder from './Router/getSumOfClientsOrder';
import removeOrder from './Router/RemoveOrder';
import removeWork from './Router/removeWorker';
import EditCompanyWorker from './Router/EditCompanyWorker';
import login from './Router/login'
import Init from './fireBase/FireBaseInit'
import Autnticate from './fireBase/Autnticate'
import  findAllClients from './Router/FindAllClient';
import getServiceProvider from './Router/getServiceProvider';
import addprovider from './Router/addProvider';
import getExistingOrders from './Router/getExistingOrders';


const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const cookie = require('cookie-parser')
require("dotenv").config();


const app:Express = express();

var port = process.env.PORT;
var mongo_uri = process.env.MONGO_URI;
Init();

app.use(express.json());
app.use(cors({origin:['http://localhost:3000','https://batov.netlify.app'],credentials: true}));
app.use(cookie());
mongoose.set("strictQuery", true);


mongoose
  .connect(mongo_uri)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(`at mongoose connect: ${err.message}`);
  });


  app.use('/login',login);
  app.use('/register',register);
  app.use('/companyCheck',companyCheck);

  app.use("/findAllClients",Autnticate,findAllClients); 
  app.use("/addProvider",Autnticate,addprovider);   
  app.use("/getServiceProvider",Autnticate,getServiceProvider); 
  app.use('/getExistingOrders',Autnticate,getExistingOrders);
  app.use('/getAllOrders',Autnticate,getAllOrders);
  app.use('/addOrder',Autnticate,addOrder);
  app.use('/GetMyOrders',Autnticate,GetMyOrders);
  app.use('/removeworker',Autnticate,removeWork);
  app.use('/EditCompanyWorker',Autnticate,EditCompanyWorker);
  app.use('/getSumOfClientsOrder',Autnticate,getSumOfClientsOrder); 
  app.use('/RemoveOrder',Autnticate,removeOrder);


 
app.use('/*',(req:Request,res:Response)=>{
  res.status(404).send('Doesnt exists');
})

app.listen(port, () => {
  console.log("server is on port " + port);
});
