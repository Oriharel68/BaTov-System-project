


export function setDate(dat){
    const targetdate = new Date();
    targetdate.setTime(dat)
   return `${ToAday(targetdate.getDay())} ${targetdate.getHours()}:${AddZero(targetdate.getMinutes())},${targetdate.getDate()}/${(targetdate.getMonth()+1)}/${targetdate.getFullYear()}`;

}


function ToAday(numDay){
    const DaysInString = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return DaysInString[numDay];
    
}
function AddZero(num){
    if(num < 10){
        return `${num}0`
    }
    return `${num}`;
}