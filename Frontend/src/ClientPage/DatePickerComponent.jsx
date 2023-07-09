import axios from 'axios';
import React, { memo, useEffect, useState } from 'react'
import DatePicker  from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DatePickerComponent({setSelectedDate,Provider}) {
 
  const [startDate, setStartDate] = useState(null);


  useEffect(() => {
    async function getorders(){
      const {TypeOfService,WorkerName} = Provider;
      const {data} = await axios.post('http://localhost:4000/getExistingOrders',{
        TypeOfService,
        WorkerName
      });
      console.log(data);//save and exclude from the datepicker
    }
    getorders();
  }, [])
  


  useEffect(() => {
    const a = new Date(startDate);
    console.log(a.getTime());
    setSelectedDate(a.getTime());
  }, [startDate])



  const isWeekday = (date) => {
    const day = date.getDay();
    return day !==5 && day !== 6; // without saturday and friday

  };


  const filterPassedTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);
        console.log(selectedDate);
        return currentDate.getTime() < selectedDate.getTime();
      };//fix disable times in specific date

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      minDate={new Date()}
      filterDate={(date)=>isWeekday(date)}
      filterTime={filterPassedTime}
      dateFormat="d MMMM, yyyy h:mm aa"
    />
  )
}

export default memo(DatePickerComponent)






