import { useCallback, useEffect, useState } from 'react';
import CombaibnedNavCompany from '../../nav/CombaibnedNavCompany';
import ActiceOrdersList from "./order list's/ActiceOrdersList";
import OldOrdersList from "./order list's/OldOrdersList";
import IncomesList from "./order list's/IncomesList";
import { getOrdersData } from '../../Helpjs/help';
import { Client, Order } from '../../Types/Types';

function OrderOfTheCompany() {
  const [activeOrders, setActiveOrders] = useState<(Order&{ClientName:string})[]>([]);
  const [oldOrders, setOldOrders] = useState<(Order&{ClientName:string})[]>([]);
  const [allClients, setAllClients] = useState<(Client&{ Total: number, ClientName: string })[]>([]);
  const [Visible, setVisible] = useState<boolean>(false);
  const [totalmoney, setTotalMoney] = useState<number>(0);
  // const TAX_RATE = 0.17;
  const [colspan, setColspan] = useState(1);

  const totalSum = useCallback((allOrders: (Client&{Total:number})[]) => {
    const Total: number = allOrders.reduce((acc: any, value: any) => acc + value.Total, 0);
    setTotalMoney(Total);
  }, [allClients]);

  useEffect(() => {
    async function getSetData() {
      const [oldOrders, OngoingOrders, SumClientsMoney] = await getOrdersData();
      totalSum(SumClientsMoney);
      setAllClients(SumClientsMoney);
      setOldOrders(oldOrders);
      setActiveOrders(OngoingOrders);
      setVisible(true);
    }
    getSetData();
    const updateColspan = () => {
      setColspan(window.innerWidth <= 689 ? 3 : 2);
    };

    updateColspan(); // Set the initial colspan

    // Attach event listener for window resize
    window.addEventListener('resize', updateColspan);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateColspan);
    };
  }, []);

  return (
    <>
      <CombaibnedNavCompany />
      <div className="main-ordeList-container">
        <div id="not-in-print" className="orderReceipts-container">
          <h3>הזמנות פעילות</h3>

          <table>
            <tr>
              <th>תאריכים</th>
              <th>הזמנה</th>
              <th>שם בודק</th>
              <th>סכום</th>
              <th>מספר הזמנה</th>
              <th>סטטוס</th>
            </tr>
            {Visible ? (
              activeOrders.map((item) => {
                return (
                  <tr>
                    <ActiceOrdersList order={item} key={item._id} />
                  </tr>
                );
              })
            ) : (
              <tr className="loading">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            )}
          </table>
        </div>
        <div id="not-in-print" className="orderReceipts-container">
          <h3>הזמנות ישנות </h3>

          <table>
            <tr>
              <th>תאריכים</th>
              <th>הזמנה</th>
              <th>שם בודק</th>
              <th>סכום</th>
              <th>מספר הזמנה</th>
              <th>סטטוס</th>
            </tr>

            {Visible ? (
              oldOrders.map((item) => {
                return (
                  <tr>
                    <OldOrdersList order={item} key={item._id} />
                  </tr>
                );
              })
            ) : (
              <tr className="loading">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            )}
          </table>
        </div>
        <div className="orderReceipts-container">
          <div className="subTititle-container">
            <h3>הכנסות</h3>

            <button onClick={() => window.print()}>הדפס</button>
          </div>
          <table>
            <tr>
              <th>הזמנה</th>
              <th>כתובת אלקטרונית</th>
              <th>מספר פאלפון</th>
              <th>סכום</th>
            </tr>

            {Visible ? (
              allClients.map((client) => {
                return (
                  <tr>
                    <IncomesList client={client} key={client._id} />
                  </tr>
                );
              })
            ) : (
              <></>
            )}
            <td colSpan={colspan}>
              <div className="subTotal-Incomes-container">
                <div className="right-cotainer">
                  <p>₪{totalmoney.toLocaleString()}</p>
                  <p>₪{(totalmoney * 0.17).toLocaleString()}</p>
                  <p id="emphasis">
                    {' '}
                    <b>₪{(totalmoney - totalmoney * 0.17).toLocaleString()}</b>
                  </p>
                </div>
                <div className="left-conatiner">
                  <p>סכום משנה:</p>
                  <p>מע"מ:</p>
                  <p id="emphasis">
                    <b>סה"כ:</b>{' '}
                  </p>
                </div>
              </div>
            </td>
          </table>
        </div>
      </div>
    </>
  );
}

export default OrderOfTheCompany;
