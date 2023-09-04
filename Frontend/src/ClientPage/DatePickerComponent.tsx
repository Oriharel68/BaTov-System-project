
import React, { memo, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import he from 'date-fns/locale/he';
import Url from '../ApiClient/Url';
import AxiosClient from '../ApiClient/AxiosClient';

function DatePickerComponent({ setSelectedDate, Provider, CurrentDate }: any) {
  const [startDate, setStartDate]: any = useState(null);
  const [OrderData, setOrderData] = useState([]);

  useEffect(() => {
    async function getorders() {
      const { TypeOfService, WorkerName } = Provider;
      const { data } = await AxiosClient.get(`${Url}/getExistingOrders?TypeOfService=${TypeOfService}&WorkerName=${WorkerName}`);
      const FilterTime = data.map((item: any) => {
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

  const isWeekday = (date: Date) => {
    const day = date.getDay();
    return day !== 5 && day !== 6; // without saturday and friday
  };

  const filterPassedTime = (time: number) => {
    let isBusy = true;
    const currentDate = new Date();
    const selectedDate = new Date(time);

    OrderData.forEach((item: number) => {
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
      filterTime={filterPassedTime as any}
      dateFormat="d MMMM, yyyy h:mm aa"
    />
  );
}

export default memo(DatePickerComponent);
