import React, { useEffect, useState } from "react";
import axios from "axios";
import ExistingOrderList from "./ExistingOrderList";
import ClientNavBarOrderMain from "../nav/ClientNavBarOrderMain";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Url from "../ApiUrl/Url";
function ExistingOrder() {
  const [ordersData, setOrdersData] = useState([]);
  const [OldOrders, setOldOrders] = useState([]);
  const [Changed, setChanged] = useState(0);
  const [Auth] = useState(getAuth());
  const navigate = useNavigate();

  useEffect(() => {
    async function getOrdersData() {
      try {
        const { data } = await axios.post(`${Url}/GetMyOrders`, {
          Email: Auth?.currentUser?.email,
        });
        console.log(data);
        const currdate:any = new Date().getTime();
        const oldOrders:any = [];
        const OngoingOrders:any = []; ///do with splice to save memory
        data.forEach((item:any) => {
          if (currdate > item.DateTime) oldOrders.push(item);
          else OngoingOrders.push(item);
        });

        setOldOrders(oldOrders);
        setOrdersData(OngoingOrders);
      } catch (err) {
        console.log(err);
      }
    }
    getOrdersData();
  }, [Changed]);

  return (
    <div>
      <div className="page-wraper">
        <div className="mainClient-page-wraper">
          <ClientNavBarOrderMain />

          <div className="mainClient-page">
            <div className="clientbuttonContainer-client">
              <div className="clientNewOrderPage">
                <h3>📑:הזמנות קיימות</h3>

                {ordersData ? (
                  <>
                    <div className="over-flow-existingOrders ">
                      {ordersData.map((order:any) => {
                        return (
                          <ExistingOrderList
                            Changed={Changed}
                            setChanged={setChanged}
                            order={order}
                            isExpired={true}
                            key={order._id}
                          />
                        );
                      })}
                    </div>
                    <h4 style={{ direction: "rtl" }}>הזמנות ישנות:📇</h4>
                    <div className="over-flow-oldOrders">
                      {OldOrders.map((order:any) => {
                        return (
                          <ExistingOrderList
                            Changed={Changed}
                            setChanged={setChanged}
                            order={order}
                            isExpired={false}
                            key={order._id}
                          />
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <h4>🤔אין הזמנות כלל</h4>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExistingOrder;
