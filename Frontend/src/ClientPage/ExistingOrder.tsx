import { useEffect, useState } from 'react';
import ExistingOrderList from './ExistingOrderList';
import ClientNavBarOrderMain from '../nav/ClientNavBarOrderMain';
import Url from '../ApiClient/Url';
import AxiosClient from '../ApiClient/AxiosClient';
import { Order } from '../Types/Types';

function ExistingOrder() {
  const [ordersData, setOrdersData] = useState<Order[]>([]);
  const [OldOrders, setOldOrders] = useState<Order[]>([]);
  const [Changed, setChanged] = useState<boolean>(false);

  useEffect(() => {
    async function getOrdersData() {
      try {
        const response = await AxiosClient.get(`${Url}/GetMyOrders`);//getting the orders of the client and displaying it
        if (response.status !== 200) return alert('שגיאה בעת יבוא ההזמנות');
        const { data } = response;
        const currdate: number = new Date().getTime();
        const oldOrders:Order[] = [];
        const OngoingOrders: Order[] = []; ///
        data.forEach((item: Order) => {
          if (currdate as any > item.DateTime as any) oldOrders.push(item);
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
    <>
      <div className="page-wraper">
        <div className="mainClient-page-wraper">
          <ClientNavBarOrderMain />

          <div className="mainClient-page">
            <div className="clientbuttonContainer-client">
              <div className="clientNewOrderPage">
                <h3>📑:הזמנות קיימות</h3>

                <>
                  {ordersData.length > 0 ? (
                    <div className="over-flow-existingOrders ">
                      {ordersData.map((order: Order) => {
                        return (
                          <ExistingOrderList
                            Changed={Changed}
                            setChanged={setChanged as any}
                            order={order}
                            isExpired={true}
                            key={order._id}
                          />
                        );
                      })}
                    </div>
                  ) : (
                    <h4 className="marker" style={{ marginTop: '1em', marginBottom: '1em' }}>
                      💀אין הזמנות כלל
                    </h4>
                  )}

                  <h4 style={{ direction: 'rtl' }}>הזמנות ישנות:📇</h4>
                  {OldOrders.length > 0 ? (
                    <div className="over-flow-oldOrders">
                      {OldOrders.map((order: Order) => {
                        return (
                          <ExistingOrderList
                            Changed={Changed}
                            setChanged={setChanged as any}
                            order={order}
                            isExpired={false}
                            key={order._id}
                          />
                        );
                      })}
                    </div>
                  ) : (
                    <h4 className="marker" style={{ marginTop: '4em' }}>
                      👻אין הזמנות כלל
                    </h4>
                  )}
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExistingOrder;
