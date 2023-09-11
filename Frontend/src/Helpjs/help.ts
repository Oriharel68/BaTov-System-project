
import Url from '../ApiClient/Url'
import AxiosClient from '../ApiClient/AxiosClient';

export function setDate(dat: number) {
  const targetdate = new Date();
  targetdate.setTime(dat);
  return ` יום ${ToAday(targetdate.getDay())} ${targetdate.getHours()}:${AddZero(targetdate.getMinutes())},${targetdate.getDate()}/${
    targetdate.getMonth() + 1}/${targetdate.getFullYear()}`;
}

function ToAday(numDay: number) {
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
function AddZero(num: number) {
  if (num < 10) {
    return `${num}0`;
  }
  return `${num}`;
}
// timing filter function
//convert to time
export function getOrderWithDate(orders: any) {
  const ordersWithDate = orders.map((item: any) => {
    const date = new Date();
    date.setTime(item.DateTime);
    return { ...item, date: date };
  });
  return ordersWithDate;
}
//filter functions
export function getMoneyByDay(orders: any) {
  const currentDay = new Date();
  const perDay = orders.filter((item: any) => {
    return (
      item.date.getDate() === currentDay.getDate() &&
      currentDay.getMonth() === item.date.getMonth() &&
      item.date.getFullYear() === currentDay.getFullYear()
    );
  });

  return calculateSum(perDay);
}

export function getMoneyByMonth(orders: any) {
  const currentDay = new Date();
  const perMonth = orders.filter((item: any) => {
    return (
      currentDay.getMonth() === item.date.getMonth() &&
      item.date.getFullYear() === currentDay.getFullYear()
    );
  });
  return calculateSum(perMonth);
}

export function getMoneyByYear(orders: any) {
  const currentDay = new Date();
  const perYear = orders.filter((item: any) => {
    return item.date.getFullYear() === currentDay.getFullYear();
  });
  return calculateSum(perYear);
}

function calculateSum(orders: any) {
  const sumWithInitial = orders.reduce(
    (accumulator: number, currentValue: any) =>
      accumulator + currentValue?.Price,
    0
  );
  return sumWithInitial;
}


export async function getOrdersData() :Promise<any> {
  let Clients: any, Orders: any,SumClientsMoney:any;
  try {
    await Promise.all([
      AxiosClient.get(`${Url}/findAllClients`),
      AxiosClient.get(`${Url}/getSumOfClientsOrder`),
      AxiosClient.get(`${Url}/getAllOrders`),
    ]).then((values) => {
      values.forEach((item: any, index: number) => {
        if (item.request.responseURL.includes('/findAllClients')) {
          Clients = values[index].data;
        } else if (item.request.responseURL.includes('/getSumOfClientsOrder')) {
          SumClientsMoney = values[index].data;
        } else {
          Orders = values[index].data.Orders;
        }
      });
    });
    const currdate = new Date().getTime();

    const oldOrders: any = [];
    const OngoingOrders: any = [];

    const OrdersWithName = Orders.map((item: any) => {
      const With = Clients.find((value: any) => {
        return value._id === item.ClientId;
      });

      return { ...item, ClientName: `${With.FirstName} ${With.LastName}` };
    });
    

    OrdersWithName.forEach((item: any) => {
      if (currdate > item.DateTime) oldOrders.push(item);
      else OngoingOrders.push(item);
    });
    // setOldOrders(oldOrders);
    // setActiveOrders(OngoingOrders);
    // setVisible(true);
    return [oldOrders,OngoingOrders,SumClientsMoney,true];
  } catch (err:any) {
    console.log(err);
    
    return err;
  }
 
}