


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