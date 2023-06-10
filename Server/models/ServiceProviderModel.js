const mongoose = require("mongoose");

const ServiceScehma = new mongoose.Schema({
  TypeOfService:String,
});

const ServiceProvidersModel = mongoose.model("ServiceProviders", ServiceScehma);

module.exports = ServiceProvidersModel;
