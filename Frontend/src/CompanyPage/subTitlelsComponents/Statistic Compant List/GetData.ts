import { Order } from "../../../Types/Types";

export function GetOrdersByMonth(Orders: Order[]) {
  const MonthsOrders = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const OrdersMonth = Orders.map((order: Order) => {
    const date = new Date();
    date.setTime(order.DateTime as any);
    return { ...order, Month: date.getMonth() };
  });
  OrdersMonth.forEach((order: Order & {Month:number}) => {
    MonthsOrders[order.Month]++;//return the the number of orders by month
  });
  return MonthsOrders;
}

export function MoneyByMonth(Orders: Order[]) {
  const MonthsOrders = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const OrdersMonth = Orders.map((order: Order) => {
    const date = new Date();//order
    date.setTime(order.DateTime as any);
    return { ...order, Month: date.getMonth() };
  });
  OrdersMonth.forEach((order: Order&{Month:number}) => {
    MonthsOrders[order.Month] += order.Price;
  });

  return MonthsOrders;//returning the money per month
}
