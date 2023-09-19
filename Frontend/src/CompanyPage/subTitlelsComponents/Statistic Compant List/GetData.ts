export function GetOrdersByMonth(Orders: any) {
  const MonthsOrders = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const OrdersMonth = Orders.map((order: any) => {
    const date = new Date();
    date.setTime(order.DateTime);
    return { ...order, Month: date.getMonth() };
  });
  OrdersMonth.forEach((order: any) => {
    MonthsOrders[order.Month]++;//return the the number of orders by month
  });
  return MonthsOrders;
}

export function MoneyByMonth(Orders: any) {
  const MonthsOrders = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const OrdersMonth = Orders.map((order: any) => {
    const date = new Date();//order
    date.setTime(order.DateTime);
    return { ...order, Month: date.getMonth() };
  });
  OrdersMonth.forEach((order: any) => {
    MonthsOrders[order.Month] += order.Price;
  });

  return MonthsOrders;//returning the money per month
}
