
import Url from '../ApiClient/Url'
import AxiosClient from '../ApiClient/AxiosClient';
import { Client, Order } from '../Types/Types';

export function setDate(dat: number) {                        //seting new date 
  const targetdate = new Date();
  targetdate.setTime(dat);
  return ` יום ${ToAday(targetdate.getDay())} ${targetdate.getHours()}:${AddZero(targetdate.getMinutes())},${targetdate.getDate()}/${
    targetdate.getMonth() + 1}/${targetdate.getFullYear()}`;
}

function ToAday(numDay: number) {                        //all the days function 
  const DaysInString = [
    'ראשון',
    'שני',
    'שלישי',
    'רביעי',
    'חמישי',
    'שישי',
    'שבת',
  ];
  return DaysInString[numDay];
}
function AddZero(num: number) {                         //adding zero function
  if (num < 10) {
    return `${num}0`;
  }
  return `${num}`;
}
// timing filter function
//convert to time
export function getOrderWithDate(orders: Order[]) {                       //geting the order by date
  const ordersWithDate = orders.map((item: Order) => {
    const date = new Date();
    date.setTime(item.DateTime as any);
    return { ...item, date: date };// getting a obj with datetime as a number and return it as a Date object
  });
  return ordersWithDate;
}
         //filter functions
export function getMoneyByDay(orders: (Order&{date:Date})[]) {                 //canculate the money we make per day
  const currentDay = new Date();
  const perDay = orders.filter((item) => {
    return (
      item.date.getDate() === currentDay.getDate() &&
      currentDay.getMonth() === item.date.getMonth() &&
      item.date.getFullYear() === currentDay.getFullYear()
    );
  });

  return calculateSum(perDay);
}

export function getMoneyByMonth(orders: (Order&{date:Date})[]) {                 //canculate the money we make per month
  const currentDay = new Date();
  const perMonth = orders.filter((item) => {
    return (
      currentDay.getMonth() === item.date.getMonth() &&
      item.date.getFullYear() === currentDay.getFullYear()
    );
  });
  return calculateSum(perMonth);
}

export function getMoneyByYear(orders:(Order&{date:Date})[] ) {                 //canculate the money we make per year
  const currentDay = new Date();
  const perYear = orders.filter((item) => {
    return item.date.getFullYear() === currentDay.getFullYear();
  });
  return calculateSum(perYear);
}

function calculateSum(orders: (Order&{Price:number})[]) {                    //canculate the total sum of each and each order
  const sumWithInitial = orders.reduce(
    (accumulator: number, currentValue: any) =>
      accumulator + currentValue?.Price,
    0
  );
  return sumWithInitial;
}


export async function getOrdersData() :Promise<any> {// a function that does all of the calls and sorting by date used in OrderOfTheCompany Component
  let Clients:any, Orders:any,SumClientsMoney:any;
  try {
    await Promise.all([
      AxiosClient.get(`${Url}/findAllClients`),
      AxiosClient.get(`${Url}/getSumOfClientsOrder`),
      AxiosClient.get(`${Url}/getAllOrders`),
    ]).then((values) => {                                     //fixing a bug that sometimes  the order of the requests changes 
      values.forEach((item: any, index: number) => {                                                                         //
        if (item.request.responseURL.includes('/findAllClients')) {                                                           //
          Clients = values[index].data;                                                                                         //
        } else if (item.request.responseURL.includes('/getSumOfClientsOrder')) {                                                 //
          SumClientsMoney = values[index].data;                                                                                  //
        } else {                                                                                                                //
          Orders = values[index].data.Orders;                                                                                 //                  
        }                                                                                                                    //
      });                                                                                                                   //
    });
    const currdate = new Date().getTime();

    const oldOrders: any = [];
    const OngoingOrders: any = [];

    const OrdersWithName = Orders!.map((item: any) => {                      //connecting all orders with clients names funcion 
      const With = Clients.find((value: any) => {
        return value._id === item.ClientId;
      });

      return { ...item, ClientName: `${With.FirstName} ${With.LastName}` };//getting all of the orders and making that the order will include the name of the client
    });
    

    OrdersWithName.forEach((item: any) => {
      if (currdate > item.DateTime) oldOrders.push(item);
      else OngoingOrders.push(item);
    }); //old Orders VS New Orders
    
    return [oldOrders,OngoingOrders,SumClientsMoney];
  } catch (err:any) {
    console.log(err);
    
    return err;
  }
 
}