const mongoose = require("mongoose");

const CompanyScehma = new mongoose.Schema({
  email:String,

});

const CompanyModel = mongoose.model("Company", CompanyScehma);

module.exports = CompanyModel;
