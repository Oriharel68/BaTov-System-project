import React from 'react'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar as BigCalender, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';


const localizer = momentLocalizer(moment);


function Calender(props) {
  return (
    <BigCalender {...props} localizer={localizer}/>
  )
}

export default Calender