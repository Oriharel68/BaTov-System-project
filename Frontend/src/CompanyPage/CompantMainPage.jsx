import React, { useContext, useEffect, useState } from "react";
import NavBar from "../nav/NavBar";
import Companysubtitle from "../nav/Companysubtitle";
import CompanyNavBar from "../nav/CompanyNavBar";
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
import { GetOrdersByMonth } from "../CompanyPage/subTitlelsComponents/Statistic Compant List/GetData";
import StatisticCompanyLine from "./subTitlelsComponents/Statistic Compant List/StatisticCompanyLine";

import AddworkerCompany from "./subTitlelsComponents/AddworkerCompany";
import CompnatCalenderDetaills from "./subTitlelsComponents/CompnatCalenderDetaills";
import OrderOfTheCompany from "./subTitlelsComponents/OrderOfTheCompany";

function CompantMainPage() {
  // const context = useContext(AppContext);
  // if (!context) {
  //   throw new Error('Cannot access context. Make sure you are rendering this component inside the AppContext.Provider');
  // }
  // const { TOTAL_VALUE } = context;

  const [orderData, setOrdersData] = useState([]);

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
      } catch (error) {
        console.log(error);
      }
    }
    getOrdersData();
  }, []);

  //     const [showSecondDiv, setShowSecondDiv] = useState(false);

  //     const handleMouseEnter = () => {
  //       setShowSecondDiv(true);
  //     };

  //     const handleMouseLeave = () => {
  //       setShowSecondDiv(false);
  //     };
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

  // console.log(userIn.currentUser);

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
              {/* <p id="emphasis"> <b > ₪{(TOTAL_VALUE).toLocaleString()} </b> </p> */}
              <p id="emphasis" style={{paddingTop:'4em'}}> <b > CONTEXT FROM ORDERS </b> </p>
            </div>
            <StatisticCompanyLine statisticData={statisticData} />
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
           {/* <AddworkerCompany/> */}
          </div>
          <div className="list">
          <h3>CONTEXT of things we want to display to our clients</h3>

             {/* <CompnatCalenderDetaills/> */}
          </div>
          <div className="list">
          <h3>CONTEXT of things we want to display to our clients</h3>

      {/* <OrderOfTheCompany/> */}
          </div>

        </div>
      </div>
    </>
  );
}

export default CompantMainPage;
