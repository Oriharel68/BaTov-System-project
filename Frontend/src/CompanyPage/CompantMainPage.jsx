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
import {
  GetOrdersByMonth,
  MoneyByMonth,
} from "../CompanyPage/subTitlelsComponents/Statistic Compant List/GetData";
import StatisticCompanyLine from "./subTitlelsComponents/Statistic Compant List/StatisticCompanyLine";

import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import Fullcalender from "./Calenders/Fullcalender";
import ActiceOrdersList from "./subTitlelsComponents/order list's/ActiceOrdersList";
import MoneyStatistics from "./MoneyStatistics";
import Footer from "../Main page/Footer";
import NavLogo from "../Main page/NavLogo";

function CompantMainPage() {
  // fixxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  const [orderData, setOrdersData] = useState([]);
  const [OrdersActive, setOrdersActive] = useState([]);
  const [allClients, SetAllClients] = useState([]);
  const [TotalSum, setTotalSum] = useState(0);
  const [LineStatistic, SetLineStatistic] = useState([]);
  const [statisticData, setStatisticData] = useState([]);

  useEffect(() => {
    async function getOrdersData() {
      try {
        const Promises = await Promise.all([
          axios.get("http://localhost:4000/getAllOrders"),
          axios.get("http://localhost:4000/findAllClients"),
          axios.get("http://localhost:4000/getSumOfClientsOrder"),
        ]);
        const Clients = Promises[1].data;
        const { Orders } = Promises[0].data;
        const SumClients = Promises[2].data;
        SetAllClients(SumClients);
        ActiveOrders(Orders, Clients);
        SumOfClients(SumClients);
        setOrdersData(getOrderWithDate(Orders));
        const OrderByM = GetOrdersByMonth(Orders);
        setStatisticData(OrderByM);
        const MoneyBy = MoneyByMonth(Orders);
        SetLineStatistic(MoneyBy);
      } catch (error) {
        console.log(error);
      }
    }
    function ActiveOrders(Orders, Clients) {
      const currdate = new Date().getTime();

      const oldOrders = [];
      const OngoingOrders = [];

      const OrdersWithName = Orders.map((item) => {
        const With = Clients.find((value) => {
          return value._id === item.ClientId;
        });
        return { ...item, ClientName: `${With.FirstName} ${With.LastName}` };
      });

      OrdersWithName.forEach((item) => {
        if (currdate > item.DateTime) oldOrders.push(item);
        else OngoingOrders.push(item);
      });
      setOrdersActive(OngoingOrders);
    }
    function SumOfClients(Clients) {
      console.log(Clients);
      const Total = Clients.reduce(
        (accumulator, currentValue) => accumulator + currentValue.Total,
        0
      );
      const TotalWithoutTax = Total - Total * 0.17;
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
 

  //cheking the user if in/ out
  // console.log(userIn);

  // useEffect(() => {
  //   if (userAuth.currentUser == null) {
  //     navigate("/");
  //     alert("useer is not assianged");
  //   }
  // }, []);

  return (
    <>
      <CombaibnedNavCompany />
      <div className="page-wraper-company">
        <div className="statistic-container">
          <h3>מספר הזמנות</h3>
          <div className="main-content">
            <div className="left-container">
              <h3> :רווחי חברה </h3>
              <p id="emphasis" style={{ paddingTop: "2em", color: "#3a3" }}>
                {" "}
                <b> +₪{TotalSum.toLocaleString()} </b>{" "}
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
                        label: "מספר הזמנות",
                        data: statisticData,
                        borderColor: "black",
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
                      data: LineStatistic,
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

                    {allClients.map((client) => {
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
                {" "}
                <AiOutlineMail />{" "}
              </li>
            </a>
            <li>תצרו איתנו קשר</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default CompantMainPage;
