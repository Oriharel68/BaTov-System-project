import { useEffect, useLayoutEffect, useState } from 'react';
import IncomesList from "./subTitlelsComponents/order list's/IncomesList";
import CombaibnedNavCompany from '../nav/CombaibnedNavCompany';
import { getOrderWithDate, getMoneyByDay, getMoneyByMonth, getMoneyByYear } from '../Helpjs/help';
import { GetOrdersByMonth, MoneyByMonth } from './subTitlelsComponents/Statistic Compant List/GetData';
import StatisticCompanyLine from './subTitlelsComponents/Statistic Compant List/StatisticCompanyLine';

import { AiOutlineMail } from 'react-icons/ai';
import MoneyStatistics from './MoneyStatistics';

import NavLogo from '../Main page/NavLogo';
import Url from '../ApiClient/Url';
import AxiosClient from '../ApiClient/AxiosClient';
import { ToastContainer, toast } from 'react-toastify';
import { Client, Order } from '../Types/Types';

function CompantMainPage() {
  const [orderData, setOrdersData]  = useState<(Order&{date:Date})[]>([]);
  const [allClients, SetAllClients] = useState<[]>([]);
  const [TotalSum, setTotalSum] = useState<number>(0);
  const [LineStatistic, SetLineStatistic] = useState<number[]>([]);
  const [statisticData, setStatisticData] = useState<number[]>([]);

  const [message, setMessage] = useState<boolean>(false);

  useEffect(() => {
    async function getOrdersData() {
      try {
        const Promises = await Promise.all([
          AxiosClient.get(`${Url}/getAllOrders`),
          AxiosClient.get(`${Url}/getSumOfClientsOrder`),
        ]);
        const { Orders } = Promises[0].data;
        const SumClients = Promises[1].data;
        SetAllClients(SumClients); //setting the clients
        SumOfClients(SumClients); //adding the sum of all of the clients
        setOrdersData(getOrderWithDate(Orders)); //getting the orders with date
        const OrderByM = GetOrdersByMonth(Orders); // ordering orders by months
        setStatisticData(OrderByM);
        const MoneyBy = MoneyByMonth(Orders); // ordering money by months
        SetLineStatistic(MoneyBy);
      } catch (error) {
        console.log(error);
      }
    }
    function SumOfClients(Clients: (Client&{Total:number})[]) {
      const Total = Clients.reduce(
        (accumulator: any, currentValue) => accumulator + currentValue.Total,
        0
      );
      const TotalWithoutTax = Total - Total * 0.17; // calculate with the tax
      setTotalSum(TotalWithoutTax);
    }
    getOrdersData();
  }, []);

  useEffect(() => {
    if(!document.cookie.includes('firstTimeAdmin')){
    setMessage(true);
    toast.info('בדקו את הכנסות החברה  ', {
      position: 'top-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
    toast.warn('עבור/י על יומן הבדיקות', {
      position: 'top-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
    document.cookie = "firstTimeAdmin = true";
    setTimeout(() => {
      setMessage(false);
    }, 5000);
  }
  }, [TotalSum]);
  return (
    <>
      <CombaibnedNavCompany />
      <div className="page-wraper-company">
        <div className="statistic-container">
          <h3>מספר הזמנות</h3>
          <div className="main-content">
            {message ? (
              <div className="form-alerts toasts">
                <div role="alert" className="fade form-warning alert alert-primary alert-dismissible show">
                  <button id="close" onClick={() => setMessage(!message)}>
                    x
                  </button>
                  <div className="d-flex align-items-center">
                    <img
                      alt="noti-icon"
                      src="https://brand.workingsolutions.com/components/images/ghost.svg"
                      width="28"
                      className="me-4"
                    />
                    <p>
                      <b className="d-flex">ברוכים השבים למערכת </b> , שמחים לראותכם 👋
                    </p>
                  </div>
                </div>
               
              </div>
            ) : <></>}

            <div className="left-container">
              <h3> :רווחי חברה </h3>
              <p id="emphasis" style={{ paddingTop: '2em', color: '#3a3' }}>
                {' '}
                <b> +₪{TotalSum.toLocaleString()} </b>{' '}
              </p>
              <div className="money-satus-content">
                <table>
                  <tr>
                    <th>שנתי </th>
                    <th>חודשי</th>
                    <th>יומי</th>
                  </tr>
                  <tr>
                    <td>{`₪${getMoneyByYear(orderData).toLocaleString()}`}</td>
                    <td>{`₪${getMoneyByMonth(orderData).toLocaleString()}`}</td>
                    <td>{`₪${getMoneyByDay(orderData).toLocaleString()}`}</td>
                  </tr>
                </table>
              </div>
            </div>

            <div className="right-container">
              <div className="statistics-page">
                <StatisticCompanyLine
                  statisticData={{
                    labels: [
                      'ינואר',
                      'פברואר',
                      'מרץ',
                      'אפריל',
                      'מאי',
                      'יוני',
                      'יולי',
                      'אוגוסט',
                      'ספטמבר',
                      'אוקטובר',
                      'נובמבר',
                      'דצמבר',
                    ],
                    datasets: [
                      {
                        backgroundColor: [
                          '#e74c3c', // Alizarin Red
                          '#3498db', // Curious Blue
                          '#9b59b6', // Amethyst Purple
                          '#f39c12', // Orange Yellow
                          '#1abc9c', // Mountain Meadow
                          '#d35400', // Pumpkin Orange
                          'rgba(75,192,192,1)',
                          '#8e44ad', // Wisteria Purple
                          '#f1c40f', // Sunglow Yellow
                          '#16a085', // Ocean Green
                          '#c0392b', // Pomegranate Red
                          '#27ae60', // Eucalyptus Green
                        ],
                        label: 'מספר הזמנות',
                        data: statisticData,
                        borderColor: 'black',
                        borderWidth: 2,
                      },
                    ],
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="sub-statistic-container">
          <h3>דוח הכנסות</h3>
          <div className="main-content">
            <div className="left-container">
              <MoneyStatistics
                statisticData={{
                  labels: [
                    'ינואר',
                    'פברואר',
                    'מרץ',
                    'אפריל',
                    'מאי',
                    'יוני',
                    'יולי',
                    'אוגוסט',
                    'ספטמבר',
                    'אוקטובר',
                    'נובמבר',
                    'דצמבר',
                  ],
                  datasets: [
                    {
                      label: `₪סה"כ`,
                      data: LineStatistic,
                      backgroundColor: [
                        '#e74c3c', // Alizarin Red
                        '#3498db', // Curious Blue
                        '#9b59b6', // Amethyst Purple
                        '#f39c12', // Orange Yellow
                        '#1abc9c', // Mountain Meadow
                        '#d35400', // Pumpkin Orange
                        'rgba(75,192,192,1)',
                        '#8e44ad', // Wisteria Purple
                        '#f1c40f', // Sunglow Yellow
                        '#16a085', // Ocean Green
                        '#c0392b', // Pomegranate Red
                        '#27ae60', // Eucalyptus Green
                      ],
                      borderColor: 'black',
                      borderWidth: 2,
                    },
                  ],
                }}
              />
            </div>
            <div className="right-container">
              <div className="main-ordeList-container">
                <div className="orderReceipts-container">
                  <h3>הכנסות</h3>

                  <table>
                    <tr>
                      <th>הזמנה</th>
                      <th>כתובת אלקטרונית</th>
                      <th>מספר טלפון</th>
                      <th>סכום</th>
                    </tr>

                    {allClients.map((client: Client) => {
                      return (
                        <tr>
                          <IncomesList client={client} key={client._id} />
                        </tr>
                      );
                    })}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="company-Footer">
        <div className="left-company-Footer-container">
          {/* <h3>Contact Us:</h3> */}
          <p> &copy; 2020 Batov, Inc. All rights reserved. </p>
          <NavLogo />
        </div>
        <div className="right-company-Footer-container">
          <ul>
            {/* <li><AiOutlineInstagram/></li>
        <li><BsFacebook/></li> */}
            <a href="mailto:admin@gmail.com">
              <li>
                {' '}
                <AiOutlineMail />{' '}
              </li>
            </a>
            <li>תצרו איתנו קשר</li>
          </ul>
        </div>
      </div>
      <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="colored"
                />
    </>
  );
}

export default CompantMainPage;
