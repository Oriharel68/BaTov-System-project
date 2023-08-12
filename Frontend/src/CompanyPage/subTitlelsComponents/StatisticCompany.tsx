import React, { useEffect, useState } from "react";
import CombaibnedNavCompany from "../../nav/CombaibnedNavCompany";
import StatisticCompanyList from "./Statistic Compant List/StatisticCompanyList";
import StatisticCompanyLine from "./Statistic Compant List/StatisticCompanyLine";

import axios from "axios";
import { GetOrdersByMonth } from "./Statistic Compant List/GetData";
import {
  getOrderWithDate,
  getMoneyByDay,
  getMoneyByMonth,
  getMoneyByYear,
} from "../../Helpjs/help";
function StatisticCompany() {
  const [ServiceProviders, setServiceProviders] = useState([]);
  // const [orderReady,setOrderReady] = useState(false)

  const [orderData, setOrdersData] = useState([]);
  console.log(orderData);
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
  // fixxxxxxxxxxxx

  useEffect(() => {
    async function getServiceProviders() {
      try {
        const { data } = await axios.get(
          "http://localhost:4000/getServiceProvider"
        );
        setServiceProviders(data);
      } catch (err) {
        console.log(err);
      }
    }
    async function getOrdersData() {
      try {
        const { data } = await axios.get("http://localhost:4000/getAllOrders");
        const { Orders } = data;
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
              // backgroundColor: [
              //   "rgba(75,192,192,1)",
              //   "#ecf0f1",
              //   "#50AF95",
              //   "#f3ba2f",
              //   "#2a71d0",
              // ],
              borderColor: "black",
              borderWidth: 2,
            },
          ],
        });
      } catch (error) {
        console.log(error);
      }
    }

    getServiceProviders();
    getOrdersData();
    // NewOrdersDate()
    // setOrderReady(true)
  }, []);

  return (
    <div>
      <CombaibnedNavCompany />
      <div className="main-statistics-page-wraper">
        <h3>מספר הזמנות</h3>
        <div className="main-statistics-page">
          <StatisticCompanyLine statisticData={statisticData} />
        </div>
        <h3>דוח הכנסות</h3>
        <div className="money--statistics">
          {/* {ServiceProviders.map((item)=>{
          return(
     
            <StatisticCompanyList item={item} key={item.id}/>
            
          )
        })} */}
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

      <div className="TotalAmmount">
        <h3>רווחים</h3>
      </div>
    </div>
  );
}

export default StatisticCompany;
