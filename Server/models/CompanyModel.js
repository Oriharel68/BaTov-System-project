const mongoose = require("mongoose");

const CompanyScehma = new mongoose.Schema({
  Username:String,
  Password:String,
});

const CompanyModel = mongoose.model("Company", CompanyScehma);

module.exports = CompanyModel;
