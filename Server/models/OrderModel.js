const mongoose = require("mongoose");

const OrderScehma = new mongoose.Schema({
  TypeOfService:String,
  DateTime:String,
  ClientId:String,
  WorkerName:String,
});

const OrdersModel = mongoose.model("Orders", OrderScehma);

module.exports = OrdersModel;
