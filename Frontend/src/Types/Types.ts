export interface Provider {
    TypeOfService: string;
    WorkerName: string;
    Price: number;
    _id:string;
  }

  export interface Event{
    start: Date,
    end: Date,
    title: string,
  }
  export interface Order {
    TypeOfService: string;
    DateTime: string;
    ClientId: string;
    WorkerName: string;
    Price: number;
    _id:string;
  }
  export interface Client {
    FirstName: string;
    LastName: string;
    Email: string;
    PhoneNumber: string;
    firebaseUid: string;
    _id:string;
  }