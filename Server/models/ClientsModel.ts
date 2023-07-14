// const mongooseClient = require("mongoose");
import mongooseClient from  "mongoose"
import { Client } from "./interface";

const clientScehma = new mongooseClient.Schema<Client>({
  FirstName:String,
  LastName:String,
  Email:String,
  PhoneNumber:String
});

var ClientsModel = mongooseClient.model<Client>("Clients", clientScehma);

module.exports = ClientsModel;
