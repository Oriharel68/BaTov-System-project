import React, { useEffect, useState } from "react";
import CombaibnedNavCompany from "../../nav/CombaibnedNavCompany";
import axios from "axios";
import ActiceOrdersList from "./order list's/ActiceOrdersList";
// import OldOrders from "./order list's/OldOrdersList";
import OldOrdersList from "./order list's/OldOrdersList";
import IncomesList from "./order list's/IncomesList";

function OrderOfTheCompany() {
  const [activeOrders, setActiveOrders] = useState([]);
  const [oldOrders, setOldOrders] = useState([]);
  const [allClients, setAllClients] = useState([]);

  const [colspan, setColspan] = useState(1);
  console.log(allClients);
  // console.log(allClients);
  useEffect(() => {
    async function getOrdersData() {
      let Clients,Orders;
      try {
        await Promise.all([axios.get("http://localhost:4000/findAllClients"),axios.get("http://localhost:4000/getAllOrders"),axios.get('http://localhost:4000/getSumOfClientsOrder')]).then((values)=>{
          Clients= values[0].data;
          Orders = values[1].data.Orders
          setAllClients(values[2].data);
          // console.log(allClients);
          // console.log(allClients);
        });
        // console.log(Clients);
        const currdate = new Date().getTime();
        
        const oldOrders = [];
        const OngoingOrders = []; ///do with splice to save memory

        const OrdersWithName = Orders.map((item) => {
          const With = Clients.find((value)=>{
            return value._id === item.ClientId;
          });
          return {...item,ClientName:`${With.FirstName} ${With.LastName}`}
        });
        // setAllClients(OrdersWithName)
        console.log(allClients);
          
        OrdersWithName.forEach((item) => {
          if (currdate > item.DateTime) oldOrders.push(item);
          else OngoingOrders.push(item);
        });
        
        setOldOrders(oldOrders);
        setActiveOrders(OngoingOrders);
      } catch (err) {
        console.log(err);
      }
    }
    getOrdersData();
    const updateColspan = () => {
      setColspan(window.innerWidth <= 552 ? 3: 2);
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
    <div>
      <CombaibnedNavCompany />
      <div className="main-ordeList-container">
        <div className="orderReceipts-container">
          <h3>הזמנות פעילות</h3>

          <table>
            <tr>
              <th >תאריכים</th>
              <th >הזמנה</th>
              <th >שם בודק</th>
              <th >סכום</th>
              <th >מספר הזמנה</th>
            </tr>
                {activeOrders.map((item)=>{
                  return(
                  <tr >
          
                    <ActiceOrdersList item={item} key={item._id} />
                 </tr>
                  )
                })}
            {/* <tr id="Active">
              <td>Peter</td>
              <td>Griffin</td>
              <td>$100</td>
              <td>$100</td>
            </tr>
            <tr>
              <td>Lois</td>
              <td>Griffin</td>
              <td>$150</td>
              <td>$100</td>
            </tr>
            <tr>
              <td>Joe</td>
              <td>Swanson</td>
              <td>$300</td>
              <td>$100</td>
            </tr>
            <tr>
              <td>Cleveland</td>
              <td>Brown</td>
              <td>$250</td>
              <td>$100</td>
            </tr> */}
          </table>
        </div>
        <div className="orderReceipts-container" >
          <h3>הזמנות ישנות </h3>
          
          <table>
            <tr>
            <th>תאריכים</th>
              <th>הזמנה</th>
              <th>שם בודק</th>
              <th>סכום</th>
              <th>מספר הזמנה</th>
            </tr>

            {oldOrders.map((item)=>{
              return(
              <tr>
              <OldOrdersList item={item} key={item._id}/>
              </tr>
            )
            })}
           
          </table>
        </div>
        {/* need to add styling  */}
        <div className="orderReceipts-container" >
          <div className="subTititle-container">

          <h3>הכנסות</h3>
         
          <button>Print</button>
          </div>
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
             <td colSpan={colspan}>                                      
          <div className="subTotal-Incomes-container">
              <div className="left-conatiner">
                <p>Subtotal:</p>
                <p>Tax:</p>
                <p id="emphasis"><b>Total:</b> </p>
              </div>
              <div className="right-cotainer">
                <p>$8,800.00</p>
                <p>$1,760.00</p>
                <p id="emphasis"> <b >$10,560.00 </b> </p>
              </div>
             </div>
             </td>
          </table>
        </div>
      </div>
    </div>
  );
}

export default OrderOfTheCompany;
