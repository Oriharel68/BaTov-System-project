import mongooseCompany from "mongoose";

const CompanyScehma = new mongooseCompany.Schema({
  email:String,
});

var CompanyModel = mongooseCompany.model("Company", CompanyScehma);

module.exports = CompanyModel;
