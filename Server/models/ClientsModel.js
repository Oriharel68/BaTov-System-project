const mongoose = require("mongoose");

const clientScehma = new mongoose.Schema({
  FirstName:String,
  LastName:String,
  Email:String,
  PhoneNumber:String
});

const ClientsModel = mongoose.model("Clients", clientScehma);

module.exports = ClientsModel;
