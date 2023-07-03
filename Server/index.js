const express = require("express");
// const FireBaseApp = require('./FireBase/auth');
const mongoose = require("mongoose");
const ClientsModel = require("./models/ClientsModel");
const OrdersModel = require('./models/OrderModel');
const ServiceProvidersModel = require('./models/ServiceProviderModel');
const CompanyModel = require('./models/CompanyModel');
const cors = require('cors')


require("dotenv").config();


const app = express();
var port = process.env.PORT;
var mongo_uri = process.env.MONGO_URI;



app.use(express.json());
app.use(express.static("public"));
app.use(cors());





mongoose.set("strictQuery", true);


mongoose
  .connect(mongo_uri)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(`at mongoose connect: ${err.message}`);
  });




// app.get("/get", async (req, res) => {
//   try {
//     const ClientDB = new ClientsModel({
//       FirstName: "oro",
//       LastName: "harel",
//       Email: "ori@gmail.com",
//       PhoneNumber: "",
//     });
//     await ClientDB.save().then((data) => {
//       console.log(data);
//     });
//     res.send("saved in DB");
//   } catch (err) {
//     console.log(error.message);
//     res.status(500).send({ ok: false, error: error.message });
//   }
// }); 




app.get("/findAllClients", async (req, res) => {
  try {
    const ClientDB = await ClientsModel.find();
    res.send(ClientDB);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ ok: false, error: error.message });
  }
});

app.get('/addProvider',async (req,res)=>{
  try {
    const ServiceDB = new ServiceProvidersModel({
      TypeOfService:'IT',
      WorkerName:'ori'
    });
    await ServiceDB.save().then((data)=>{
    res.send({ ok: true, data });
    })
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ ok: false, error: error.message });
  }
})

app.get('/getServiceProvider',async (req,res)=>{
  try {
    const ServiceDB = await ServiceProvidersModel.find();
    res.send(ServiceDB);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ ok: false, error: error.message });
  }
})



app.get('/ServerStatus', (req,res)=>{
  res.send(true);
});









app.post("/register", async (req, res) => {
  try {
    let { FirstName, LastName, Email, PhoneNumber } = req.body;
    if (!FirstName || !LastName || !Email || !PhoneNumber)
      throw new Error("missing info complete required info(in post /register)");
    if (await ClientsModel.findOne({ $or: [{ Email }, { PhoneNumber }] }))
      throw new Error("Email or Phone Number already exists in the system ");
    const ClientDB = new ClientsModel({
      FirstName,
      LastName,
      Email,
      PhoneNumber,
    });
    await ClientDB.save().then((data) => {
      res.send({ ok: true, data });
    });
  } catch (err) {
    console.log(err.message);
    res.send({ ok: false, error: err.message });
  }
});





app.listen(port, () => {
  console.log("server is on port " + port);
});
