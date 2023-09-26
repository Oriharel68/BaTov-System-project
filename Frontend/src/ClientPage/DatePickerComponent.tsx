import { memo, useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import he from 'date-fns/locale/he';
import Url from '../ApiClient/Url';
import AxiosClient from '../ApiClient/AxiosClient';
import { Provider,Order } from '../Types/Types';

interface DatePickerProps {setSelectedDate:(a:number)=>void,Provider:Provider,CurrentDate:Date}

function DatePickerComponent({ setSelectedDate, Provider, CurrentDate }:DatePickerProps) {
  const [startDate, setStartDate] = useState<any>(null);
  const [OrderData, setOrderData] = useState<[]>([]);

  useEffect(() => {
    async function getorders() {
      const { TypeOfService, WorkerName } = Provider; // the provider that was selceted
      const { data } = await AxiosClient.get(
        `${Url}/getExistingOrders?TypeOfService=${TypeOfService}&WorkerName=${WorkerName}`
      );// getting the orders from the workerProvider and filter it by datetime
      const FilterTime = data.map((item: Order) => {
        return item.DateTime;
      });
      setOrderData(FilterTime);
    }
    getorders();
  }, []);

  useEffect(() => {
    const a = new Date(startDate);
    a.setMilliseconds(0);
    a.setSeconds(0);// to fix a bug that the time wasnt blocked/grey out to indicate that the time is taken
    setSelectedDate(a.getTime());// updating the selected date
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
    return currentDate.getTime() < selectedDate.getTime() && isBusy; // the fillter by time
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
