// const mongooseProvider = require("mongoose");
import mongooseProvider from  "mongoose"

const ServiceScehma = new mongooseProvider.Schema({
  TypeOfService:String,
  WorkerName:String,
  Price:Number,
});

var ServiceProvidersModel = mongooseProvider.model("ServiceProviders", ServiceScehma);

module.exports = ServiceProvidersModel;
