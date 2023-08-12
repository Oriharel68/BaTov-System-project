import axios from "axios";
import React, { memo, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import he from "date-fns/locale/he";

function DatePickerComponent({ setSelectedDate, Provider, CurrentDate }:any) {
  const [startDate, setStartDate]:any = useState(null);
  const [OrderData, setOrderData] = useState([]);

  useEffect(() => {
    async function getorders() {
      const { TypeOfService, WorkerName } = Provider;
      const { data } = await axios.post(
        "http://localhost:4000/getExistingOrders",
        {
          TypeOfService,
          WorkerName,
        }
      );
      const FilterTime = data.map((item:any) => {
        return item.DateTime;
      });
      setOrderData(FilterTime);
    }
    getorders();
  }, []);

  useEffect(() => {
    const a = new Date(startDate);
    a.setMilliseconds(0);
    a.setSeconds(0);
    setSelectedDate(a.getTime());
  }, [startDate]);

  const isWeekday = (date:any) => {
    const day = date.getDay();
    return day !== 5 && day !== 6; // without saturday and friday
  };

  const filterPassedTime = (time:any) => {
    let isBusy = true;
    const currentDate = new Date();
    const selectedDate = new Date(time);

    OrderData.forEach((item:any) => {
      if (item == selectedDate.getTime()) {
        isBusy = false;
      }
    });
    return currentDate.getTime() < selectedDate.getTime() && isBusy;
  };

  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      locale={he}
      minDate={CurrentDate}
      filterDate={(date) => isWeekday(date)}
      filterTime={filterPassedTime}
      dateFormat="d MMMM, yyyy h:mm aa"
    />
  );
}

export default memo(DatePickerComponent);
