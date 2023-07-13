const mongooseProvider = require("mongoose");

const ServiceScehma = new mongooseProvider.Schema({
  TypeOfService:String,
  WorkerName:String,
});

var ServiceProvidersModel = mongooseProvider.model("ServiceProviders", ServiceScehma);

module.exports = ServiceProvidersModel;
