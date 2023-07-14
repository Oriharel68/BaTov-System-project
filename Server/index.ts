


const express = require("express");
const mongoose = require("mongoose");
var ClientsModel = require("./models/ClientsModel");
var OrdersModel= require('./models/OrderModel');
var ServiceProvidersModel = require('./models/ServiceProviderModel');
var CompanyModel = require('./models/CompanyModel');
const cors = require('cors');




require("dotenv").config();


const app = express();
var port = process.env.PORT;
var mongo_uri = process.env.MONGO_URI;



app.use(express.json());
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









app.get("/findAllClients", async (req, res) => {
  try {
    const ClientDB = await ClientsModel.find();
    res.send(ClientDB);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ ok: false, error: error.message });
  }
});

app.post('/addProvider',async (req,res)=>{
  try {
    let { Price, WorkerName, TypeOfService } = req.body;
    
    if (!Price || !WorkerName || !TypeOfService )
    throw new Error("missing info complete required info");
  // if (await ServiceProvidersModel.findOne({ $or: [{ workerName }] }))
  //   throw new Error("workerName already exists in the system ");

    const ServiceDB = new ServiceProvidersModel({
      Price,
      WorkerName,
      TypeOfService,
    });
  // console.log(ServiceDB);
  
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
});




app.get('/ServerStatus', (req,res)=>{
  res.send(true);
});

 

app.post('/getExistingOrders',async (req,res)=>{
  try {
  let {TypeOfService , WorkerName} = req.body;
  if(!TypeOfService || !WorkerName){
    throw new Error("missing info complete required info(in get /getExistingOrders)");
  }
  const Orders = await OrdersModel.find({$and:[{TypeOfService},{WorkerName}]});
  res.send(Orders);
  } catch (error) {
    console.log(error.message);
    res.send({ ok: false, error: error.message });
  }
});


// ---------------------------TOMER----------------------------------->
// app.get('/getExistingOrders',async (req,res)=>{
//   try {
//   const Orders = await OrdersModel.find();
  
//   // const dbObject = await collection.findOne({DateTime});

//   // const timestamp = dbObject.getTime();
//   // console.log(timestamp);

//   res.send(Orders);
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).send({ ok: false, error: error.message });
//   }
// });
// ------------------------------Tomer-------------------------------->



app.post('/addOrder',async (req,res)=>{
  try {
    let {TypeOfService, WorkerName,Email,DateTime} = req.body;
    if(!TypeOfService ||!WorkerName||!Email||!DateTime){
      throw new Error("missing info complete required info(in get /addOrder)");
    }
    const clientId = await ClientsModel.findOne({Email});
    if(!clientId){
      throw new Error("client doesnt exists(in post /addOrder)");
    }
    const orderDB = new OrdersModel({
      TypeOfService, 
      WorkerName,
      ClientId:clientId._id.toString(),
      DateTime,
    })
    // // const combinedObject = { ...dbObject, ...stateObject }; // Merge using the spread operator (shallow merge)
    await orderDB.save().then(()=>{
      res.send({ok:true});
    });

  } catch (error) {
    console.log(error.message);
    res.send({ ok: false, error: error.message })
  }
});




app.post('/GetMyOrders',async (req,res)=>{
  try {
    const {Email} = req.body;
    if(!Email)throw new Error("No email(in post /GetMyOrders)");
    
    const Client = await ClientsModel.findOne({Email});
    if(!Client) throw new Error("Client doesnt exist(in post /GetMyOrders)");
    
    const MyOrders = await OrdersModel.find({ClientId:Client._id.toString()});
    res.send(MyOrders);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ok:false,error:error});
  }
 

})







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


app.post("/companyCheck",async(req,res)=>{
  try {
    const {email} = req.body;
    // const {Password} = req.body;
    // console.log(req.body);
    if(!email)throw new Error("No email(in post /GetMyOrders)");
    const Client = await CompanyModel.findOne({email});
    if(!Client){
      res.send({ok: false})
    } else{
      res.send({ok:true})
    }
  } catch (error) {
    console.log(error.message);
    res.send({ ok: false, error: error.message });
 }
})


app.listen(port, () => {
  console.log("server is on port " + port);
});
