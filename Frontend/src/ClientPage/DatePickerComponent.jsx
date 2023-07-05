import React from 'react'


function DatePickerComponent() {


  return (
    <div>DatePickerComponent</div>
  )
}

export default DatePickerComponent


// () => {
//   const [startDate, setStartDate] = useState(null);
//   const isWeekday = (date) => {
//     const day = getDay(date);
//     return day !==5 && day !== 6;
//   };
//   return (
//     <DatePicker
//       selected={startDate}
//       onChange={(date) => setStartDate(date)}
//       filterDate={isWeekday}
//       placeholderText="Select a weekday"
//     />
//   );
// };

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