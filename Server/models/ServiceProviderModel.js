const mongoose = require("mongoose");

const ServiceScehma = new mongoose.Schema({
  TypeOfService:String,
  WorkerName:String,
});

const ServiceProvidersModel = mongoose.model("ServiceProviders", ServiceScehma);

module.exports = ServiceProvidersModel;
