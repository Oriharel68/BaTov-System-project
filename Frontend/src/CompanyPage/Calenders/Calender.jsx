import React from 'react'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Calendar as BigCalender, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/he';
import messages from './Messages';

moment.locale('he');
const localizer = momentLocalizer(moment);

function Calender(props) {
  return (
    <BigCalender messages={messages} {...props} localizer={localizer}/>
  )
}

export default Calender