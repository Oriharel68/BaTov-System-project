import mongooseCompany from 'mongoose';
import { Company } from './interface';

const CompanyScehma = new mongooseCompany.Schema<Company>({
  email: String,
});

var CompanyModel = mongooseCompany.model('Company', CompanyScehma);

module.exports = CompanyModel;
