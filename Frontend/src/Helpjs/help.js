


export function setDate(dat){
   return `${ToAday(dat.getDay())} ${dat.getHours()}:${AddZero(dat.getMinutes())},${dat.getDate()}/${(dat.getMonth()+1)}/${dat.getFullYear()}`;

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