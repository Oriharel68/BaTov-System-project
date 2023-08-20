
import  findAllClients from './Router/FindAllClient';
import getServiceProvider from './Router/getServiceProvider';
import addprovider from './Router/addProvider';
import getExistingOrders from './Router/getExistingOrders';
import { Request, Response } from "express";
import getAllOrders from './Router/getAllOrders';
import addOrder from './Router/addOrder';
import GetMyOrders from './Router/GetMyOrders';
import register from './Router/register';
import companyCheck from './Router/companyCheck';
import getSumOfClientsOrder from './Router/getSumOfClientsOrder';
import removeOrder from './Router/RemoveOrder';
import removeWork from './Router/removeWorker';
import EditCompanyWorker from './Router/EditCompanyWorker';

const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
require("dotenv").config();


const app = express();
var port = process.env.PORT;
var mongo_uri = process.env.MONGO_URI;



app.use(express.json());
app.use(cors({origin:['http://localhost:3000','https://batov.netlify.app']}));





mongoose.set("strictQuery", true);


mongoose
  .connect(mongo_uri)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(`at mongoose connect: ${err.message}`);
  });



  app.use("/findAllClients",findAllClients); 
  app.use("/addProvider",addprovider);   
  app.use("/getServiceProvider",getServiceProvider); 
  app.use('/getExistingOrders',getExistingOrders);
  app.use('/getAllOrders',getAllOrders);
  app.use('/addOrder',addOrder);
  app.use('/GetMyOrders',GetMyOrders);
  app.use('/register',register);
  app.use('/companyCheck',companyCheck);
  app.use('/removeworker',removeWork);
  app.use('/EditCompanyWorker',EditCompanyWorker);
  app.use('/getSumOfClientsOrder',getSumOfClientsOrder); 
  app.use('/RemoveOrder',removeOrder);


 
app.use('/*',(req:Request,res:Response)=>{
  res.status(404).send('Doesnt exists');
})

app.listen(port, () => {
  console.log("server is on port " + port);
});
