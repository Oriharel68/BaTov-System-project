import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NewOrderList from './NewOrderList';
import DatePickerComponent from './DatePickerComponent';
import ClientNavBarOrderMain from '../nav/ClientNavBarOrderMain';
import Url from '../ApiClient/Url';
import AxiosClient from '../ApiClient/AxiosClient';
import { toast } from 'react-toastify';

function NewOrder() {
  const navigate = useNavigate();
  const [ServiceProviders, setServiceProviders] = useState<[]>([]);
  const [Provider, setProvider]: any = useState<object | null>(null);
  const [Choice, setChoice] = useState<boolean>(true);
  const [SelectedDate, setSelectedDate] = useState(null);



  const CurrentDate = new Date();
  if (CurrentDate.getDay() === 5 || CurrentDate.getDay() === 6) {
    CurrentDate.setDate(CurrentDate.getDate() + 2); //default date may be in a forbidden date 
  }

  const handleComplete = async () => {
    const { TypeOfService, WorkerName, Price } = Provider;
    if (!SelectedDate || !Provider) {
      toast.error('תאריך או בודק לא נכונים/ריקים אנא תקן את המידע');
      return;
    }

    const response = await AxiosClient.post(`${Url}/addOrder`, {
      TypeOfService,
      WorkerName,
      DateTime: SelectedDate,
      Price,
    });// adding the order
    if (response?.status !== 200) {
      return toast.error('order could not be placed');
    }
    navigate('/order/orderCompelte');
  };

  const addServiceProvider = (item: any) => {
    setProvider(item);
    setChoice(false);//after choosing the provider the provider choices will disapper and the datepicker will appear
  };

  useEffect(() => {
    async function getServiceProviders() {
      try {
        const response = await AxiosClient.get(`${Url}/getServiceProvider`);

        if (response?.status !== 200) return alert('שגיאה בעת בקשת עובדים');
        const { data } = response;
        setServiceProviders(data);//getting the provider to display in a list
      } catch (err) {
        console.log(err);
      }
    }
    getServiceProviders();
  }, []);

  return (
    <>
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
                          <NewOrderList Provider={item} key={item._id} addServiceProvider={addServiceProvider} />
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
    </>
  );
}

export default NewOrder;
