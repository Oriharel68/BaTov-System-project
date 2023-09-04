import React, { useEffect, useMemo, useState } from 'react';
import ClientNavBar from '../nav/ClientNavBar';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import NewOrderList from './NewOrderList';
import DatePickerComponent from './DatePickerComponent';
import ClientNavBarOrderMain from '../nav/ClientNavBarOrderMain';
import { getAuth } from 'firebase/auth';
import Url from '../ApiClient/Url';
import Auth from '../FireBase/auth';
import AxiosClient from '../ApiClient/AxiosClient';

function NewOrder() {
  const navigate = useNavigate();
  const [auth, setAuth]: any = useState(Auth);
  const [ServiceProviders, setServiceProviders] = useState([]);
  const [Provider, setProvider]: any = useState(null);
  const [Choice, setChoice] = useState(true);
  const [SelectedDate, setSelectedDate] = useState(null);
  const CurrentDate = new Date();
  if (CurrentDate.getDay() === 5 || CurrentDate.getDay() === 6) {
    CurrentDate.setDate(CurrentDate.getDate() + 2);
  }
  //useMemo
  //   const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const handleComplete = async () => {
    const { TypeOfService, WorkerName, Price } = Provider;
    if (!SelectedDate || !Provider) {
      alert('date or Provider is empty or invalid');
      return;
    }

    const response = await AxiosClient.post(`${Url}/addOrder`, {
      TypeOfService,
      WorkerName,
      Email: auth.currentUser.email,
      DateTime: SelectedDate,
      Price,
    });
    if (response?.status !== 200) {
     return alert('order could not be placed');
    }
    navigate('/order/orderCompelte');
  };

  const addServiceProvider = (item: any) => {
    setProvider(item);
    setChoice(false);
  };

  useEffect(() => {
    async function getServiceProviders() {
      try {
        const response = await AxiosClient.get(`${Url}/getServiceProvider`);
        
        if(response?.status !== 200)return alert('שגיאה בעת בקשת עובדים');
        const {data} = response;
        setServiceProviders(data);
      } catch (err) {
        console.log(err);
      }
    }
    getServiceProviders();
  }, []);
  // console.log(ServiceProviders);

  return (
    <div>
      <div className="page-wraper">
        <div className="mainClient-page-wraper">
          <ClientNavBarOrderMain />

          <div className="mainClient-page">
            <div className="clientbuttonContainer-client">
              <div className="clientNewOrderPage">
                {Choice ? (
                  <>
                    <h3> 🧑‍🔧:סוג איש מקצוע</h3>
                    <div className="New-order-list-wraper">
                      {ServiceProviders.map((item: any) => {
                        return (
                          <NewOrderList
                            item={item}
                            key={item._id}
                            addServiceProvider={addServiceProvider}
                          />
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <div className="calender-container">
                    <h3> 🗓️:בחירת תאריך</h3>

                    <div className="bootmCalender-container">
                      <DatePickerComponent
                        CurrentDate={CurrentDate}
                        Provider={Provider}
                        setSelectedDate={setSelectedDate}
                      />
                      <button onClick={handleComplete} id="Calender">
                        בחר
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewOrder;
