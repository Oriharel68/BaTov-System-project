


export function setDate(dat){
    const targetdate = new Date();
    targetdate.setTime(dat)
   return ` יום ${ToAday(targetdate.getDay())} ${targetdate.getHours()}:${AddZero(targetdate.getMinutes())},${targetdate.getDate()}/${(targetdate.getMonth()+1)}/${targetdate.getFullYear()}`;

}


function ToAday(numDay){
    const DaysInString = ['ראשון','שני','שלישי','רביעי','חמישי','שישי','שבת'];
    return DaysInString[numDay];
    
}
function AddZero(num){
    if(num < 10){
        return `${num}0`
    }
    return `${num}`;
}
// timing filter function 
//convert to time 
export function getOrderWithDate(orders){
    const ordersWithDate = orders.map((item) =>{
    const date = new Date() ;
    date.setTime(item.DateTime);
    return {...item, date: date }
})
return ordersWithDate;
}
//filter functions
export function getMoneyByDay(orders){
    const currentDay = new Date();
const perDay = orders.filter((item)=>{
return item.date.getDate() === currentDay.getDate() && currentDay.getMonth() === item.date.getMonth() && item.date.getFullYear() === currentDay.getFullYear();


})

return calculateSum(perDay); 
}

export function getMoneyByMonth(orders){
    const currentDay = new Date();
const perMonth = orders.filter((item)=>{
return currentDay.getMonth() === item.date.getMonth() && item.date.getFullYear() === currentDay.getFullYear();


})
return calculateSum(perMonth); 
}


export function getMoneyByYear(orders){
    const currentDay = new Date();
const perYear = orders.filter((item)=>{
return  item.date.getFullYear() === currentDay.getFullYear();


})
return  calculateSum(perYear); 
}


function calculateSum(orders) {
    const sumWithInitial = orders.reduce(
        (accumulator, currentValue) => accumulator + currentValue.Price,
        0
      );
      return sumWithInitial;
}