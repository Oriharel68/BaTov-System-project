// const mongooseClient = require("mongoose");
import mongooseClient from  "mongoose"

const clientScehma = new mongooseClient.Schema({
  FirstName:String,
  LastName:String,
  Email:String,
  PhoneNumber:String
});

var ClientsModel = mongooseClient.model("Clients", clientScehma);

module.exports = ClientsModel;
