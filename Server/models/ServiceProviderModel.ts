import mongooseProvider from 'mongoose';
import { Service } from '../models/interface'; 
                                                                        
const ServiceScehma = new mongooseProvider.Schema<Service>({
  TypeOfService: String,
  WorkerName: String,
  Price: Number,
});

var ServiceProvidersModel = mongooseProvider.model<Service>(
  'ServiceProviders',
  ServiceScehma
);

module.exports = ServiceProvidersModel;
