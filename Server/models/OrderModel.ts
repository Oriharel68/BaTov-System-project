import mongooseOrder from "mongoose";

const OrderScehma = new mongooseOrder.Schema({
  TypeOfService:String,
  DateTime:String,
  ClientId:String,
  WorkerName:String,
});

var OrdersModel = mongooseOrder.model("Orders", OrderScehma);

module.exports = OrdersModel;
