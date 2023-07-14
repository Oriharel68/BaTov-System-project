import mongooseOrder from "mongoose";
import { Order } from "./interface";



const OrderScehma = new mongooseOrder.Schema<Order>({
  TypeOfService:String,
  DateTime:String,
  ClientId:String,
  WorkerName:String,
});

var OrdersModel = mongooseOrder.model("Orders", OrderScehma);

module.exports = OrdersModel;
