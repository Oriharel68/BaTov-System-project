
export function GetOrdersByMonth(Orders){
    const MonthsOrders=[0,0,0,0,0,0,0,0,0,0,0,0]
    const OrdersMonth = Orders.map((order)=>{
        const date = new Date();
        date.setTime(order.DateTime);
        return {...order,Month:date.getMonth()};
    });
        OrdersMonth.forEach((order) => {
            MonthsOrders[order.Month]++;
        });
    return MonthsOrders;
}

export function MoneyByMonth(Orders){
    const MonthsOrders=[0,0,0,0,0,0,0,0,0,0,0,0]
    const OrdersMonth = Orders.map((order)=>{
        const date = new Date();
        date.setTime(order.DateTime);
        return {...order,Month:date.getMonth()};
    });
        OrdersMonth.forEach((order) => {
            MonthsOrders[order.Month] += order.Price;
        });
        
    return MonthsOrders;
}
