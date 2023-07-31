import React, { useContext, useEffect, useState } from "react";
import IncomesList from "./subTitlelsComponents/order list's/IncomesList";
import CombaibnedNavCompany from "../nav/CombaibnedNavCompany";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  getOrderWithDate,
  getMoneyByDay,
  getMoneyByMonth,
  getMoneyByYear,
} from "../Helpjs/help";
import { GetOrdersByMonth,MoneyByMonth } from "../CompanyPage/subTitlelsComponents/Statistic Compant List/GetData";
import StatisticCompanyLine from "./subTitlelsComponents/Statistic Compant List/StatisticCompanyLine";


import Fullcalender from "./Calenders/Fullcalender";
import ActiceOrdersList from "./subTitlelsComponents/order list's/ActiceOrdersList";
import MoneyStatistics from "./MoneyStatistics";

function CompantMainPage() {
 
  
// fixxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  const [orderData, setOrdersData] = useState([]);
const [OrdersActive,setOrdersActive] = useState([]);
const [allClients,SetAllClients] = useState([]);
const [TotalSum, setTotalSum] = useState(0);
const [LineStatistic,SetLineStatistic] = useState({
  labels: [
    "ינואר",
    "פברואר",
    "מרץ",
    "אפריל",
    "מאי",
    "יוני",
    "יולי",
    "אוגוסט",
    "ספטמבר",
    "אוקטובר",
    "נובמבר",
    "דצמבר",
  ],
  datasets: [
    {
      label: "מספר הזמנות",
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      borderColor: "black",
      borderWidth: 2,
    },
  ],
})
  const [statisticData, setStatisticData] = useState({
    labels: [
      "ינואר",
      "פברואר",
      "מרץ",
      "אפריל",
      "מאי",
      "יוני",
      "יולי",
      "אוגוסט",
      "ספטמבר",
      "אוקטובר",
      "נובמבר",
      "דצמבר",
    ],
    datasets: [
      {
        label: "מספר הזמנות",
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    async function getOrdersData() {
      try {
        const Promises = await Promise.all([axios.get("http://localhost:4000/getAllOrders"),axios.get("http://localhost:4000/findAllClients"),axios.get('http://localhost:4000/getSumOfClientsOrder')]);
        const Clients = Promises[1].data;
        const { Orders } = Promises[0].data;
        const SumClients = Promises[2].data;
        SetAllClients(SumClients)
        ActiveOrders(Orders,Clients);
        SumOfClients(SumClients);
        setOrdersData(getOrderWithDate(Orders));
        const OrderByM = GetOrdersByMonth(Orders);
        setStatisticData({
          labels: [
            "ינואר",
            "פברואר",
            "מרץ",
            "אפריל",
            "מאי",
            "יוני",
            "יולי",
            "אוגוסט",
            "ספטמבר",
            "אוקטובר",
            "נובמבר",
            "דצמבר",
          ],
          datasets: [
            {
              label: "מספר הזמנות",
              data: OrderByM,
              backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0",
              ],
              borderColor: "black",
              borderWidth: 2,
            },
          ],
        });
        const MoneyBy = MoneyByMonth(Orders);
        SetLineStatistic({
          labels: [
            "ינואר",
            "פברואר",
            "מרץ",
            "אפריל",
            "מאי",
            "יוני",
            "יולי",
            "אוגוסט",
            "ספטמבר",
            "אוקטובר",
            "נובמבר",
            "דצמבר",
          ],
          datasets: [
            {
              label: `₪סה"כ`,
              data: MoneyBy,
              backgroundColor: [
                "#e74c3c", // Alizarin Red
                "#3498db", // Curious Blue
                "#9b59b6", // Amethyst Purple
                "#f39c12", // Orange Yellow
                "#1abc9c", // Mountain Meadow
                "#d35400", // Pumpkin Orange
                "rgba(75,192,192,1)",
                "#8e44ad", // Wisteria Purple
                "#f1c40f", // Sunglow Yellow
                "#16a085", // Ocean Green
                "#c0392b", // Pomegranate Red
                "#27ae60", // Eucalyptus Green
              ],
              borderColor: "black",
              borderWidth: 2,
            },
          ],
        })
      } catch (error) {
        console.log(error);
      }
    }
  function ActiveOrders(Orders,Clients){
      const currdate = new Date().getTime();
        
      const oldOrders = [];
      const OngoingOrders = []; 

      const OrdersWithName = Orders.map((item) => {
        const With = Clients.find((value)=>{
          return value._id === item.ClientId;
        });
        return {...item,ClientName:`${With.FirstName} ${With.LastName}`}
      });
      
        
      OrdersWithName.forEach((item) => {
        if (currdate > item.DateTime) oldOrders.push(item);
        else OngoingOrders.push(item);
      });
      setOrdersActive(OngoingOrders);
    }
    function SumOfClients(Clients){
      console.log(Clients);
      const Total = Clients.reduce((accumulator, currentValue) => accumulator + currentValue.Total,0)
      const TotalWithoutTax = Total - (Total*0.17);
      setTotalSum(TotalWithoutTax);
    }
    getOrdersData();
  }, []);
/*
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);
*/

  const navigate = useNavigate();
  const auth = getAuth();
  const [userAuth, setUserAuth] = useState(auth);

  //cheking the user if in/ out
  // console.log(userIn);
  useEffect(() => {
    if (userAuth == null) {
      navigate("/");
      alert("useer is not assianged");
    }
  }, []);



  return (
    <>
      <CombaibnedNavCompany />
      <div className="mainCompanyPage-container">
        <div className="main-statistics-page-wraper">
          <h3>מספר הזמנות</h3>
          <div className="main-statistics-page">
            <StatisticCompanyLine statisticData={statisticData} />
          </div>

          <h3>דוח הכנסות</h3>
          <div className="money--statistics">
            <div className="TotalAmmount">
              <h3> רווחי חברה </h3>
              <p id="emphasis" style={{paddingTop:'4em'}}> <b > ₪{(TotalSum).toLocaleString()} </b> </p>
            </div>
            <MoneyStatistics statisticData={LineStatistic} />
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


        <div className="components-list">

          {/* !!!!! need to use context  */}
          <div className="list" >
                <h3>CONTEXT of things we want to display to our clients</h3>
                <Fullcalender/>
           {/* <AddworkerCompany/> */}
          </div>
          <div className="list">
          <h3>CONTEXT of things we want to display to our clients</h3>
          <div className="main-ordeList-container">
          <div id="not-in-print" className="orderReceipts-container">
          <h3>הזמנות פעילות</h3>

          <table>
            <tr>
              <th >תאריכים</th>
              <th >הזמנה</th>
              <th >שם בודק</th>
              <th >סכום</th>
              <th >מספר הזמנה</th>
              <th >סטטוס</th>
            </tr>
                {OrdersActive.map((item)=>{
                  return(
                  <tr >
          
                    <ActiceOrdersList item={item} key={item._id} />
                 </tr>
                  )
                })}
       
          </table>
        </div>
        </div>
             {/* <CompnatCalenderDetaills/> */}
          </div>
          <div className="list">
          <h3>CONTEXT of things we want to display to our clients</h3>
          <div className="main-ordeList-container">
          <div className="orderReceipts-container" >
          <table>
            <tr>
              <th>הזמנה</th>
              <th>כתובת אלקטרונית</th>
              <th>סכום</th>
           
            </tr> 

            {/* {allClients.map((client)=>{ */}
   
             {allClients.map((client)=>{
              return  (            
               <tr>
            <IncomesList client={client} key={client._id}/>
        
             </tr>
             )})}   
             </table>
             
             </div>
      {/* <OrderOfTheCompany/> */}
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompantMainPage;
