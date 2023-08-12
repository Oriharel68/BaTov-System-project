export function setDate(dat: number) {
  const targetdate = new Date();
  targetdate.setTime(dat);
  return ` יום ${ToAday(
    targetdate.getDay()
  )} ${targetdate.getHours()}:${AddZero(
    targetdate.getMinutes()
  )},${targetdate.getDate()}/${
    targetdate.getMonth() + 1
  }/${targetdate.getFullYear()}`;
}

function ToAday(numDay: number) {
  const DaysInString = [
    "ראשון",
    "שני",
    "שלישי",
    "רביעי",
    "חמישי",
    "שישי",
    "שבת",
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
