import React, { useState } from 'react'
import DatePicker  from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function DatePickerComponent() {
  const [startDate, setStartDate] = useState(null);


  const isWeekday = (date) => {
    const day = date.getDay();
    return day !==5 && day !== 6; // without saturday and friday

  };


  const filterPassedTime = (time) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);
    
        return currentDate.getTime() < selectedDate.getTime();
      };

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      filterDate={(date)=>isWeekday(date)}
      filterTime={filterPassedTime}
      dateFormat="d MMMM, yyyy h:mm aa"
    />
  )
}

export default DatePickerComponent






// () => {
//   const [startDate, setStartDate] = useState(
//     setHours(setMinutes(new Date(), 0), 9)
//   );
//   const filterPassedTime = (time) => {
//     const currentDate = new Date();
//     const selectedDate = new Date(time);

//     return currentDate.getTime() < selectedDate.getTime();
//   };
//   return (
//     <DatePicker
//       selected={startDate}
//       onChange={(date) => setStartDate(date)}
//       showTimeSelect
//       filterTime={filterPassedTime}
//       dateFormat="MMMM d, yyyy h:mm aa"
//     />
//   );
// };