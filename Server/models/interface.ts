
export interface Order{
    TypeOfService:String,
    DateTime:String,
    ClientId:String,
    WorkerName:String,
    Price:Number,
  }
export interface Client{
    FirstName:String,
  LastName:String,
  Email:String,
  PhoneNumber:String,
  firebaseUid:String
}

export interface Service{
    TypeOfService:String,
    WorkerName:String,
    Price:Number,
}
export interface Company{
    email:String,
}