import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ExistingOrderList from './ExistingOrderList';
import ClientNavBarOrderMain from '../nav/ClientNavBarOrderMain';
import { getAuth } from 'firebase/auth';

function ExistingOrder() {
const [ordersData,setOrdersData]= useState([]);
const [OldOrders, setOldOrders] = useState([]);
const [Auth] = useState(getAuth());

    useEffect(() => {
        async function getOrdersData(){
          try{
          const {data} = await axios.post("http://localhost:4000/GetMyOrders",{
            Email:Auth.currentUser.email
          });
          console.log(data);
          const currdate = new Date().getTime();
          const oldOrders= [];
          const OngoingOrders = [];
          data.forEach((item)=>{
            if(currdate > item.DateTime) oldOrders.push(item);
            else OngoingOrders.push(item);
          })
          
          setOldOrders(oldOrders);
          setOrdersData(OngoingOrders);
          }catch(err){
            console.log(err);
          }
        }
        getOrdersData();
      }, [])
      
    return (
    <div>

    <div className="page-wraper">
  <div className="mainClient-page-wraper">
  <ClientNavBarOrderMain/>
  
    <div className="mainClient-page">
    <div className="clientbuttonContainer-client">
      

  
    <div className='clientNewOrderPage'>
   <h3>:הזמנות קיימות</h3>

   {ordersData ? 
   <div>
    {ordersData.map((order)=>{
    return(
        <ExistingOrderList order={order} key={order._id}/>
    );
  })}
  <h4 style={{direction:'rtl'}}>הזמנות ישנות:</h4>
   {OldOrders.map((order)=>{
    return(
      <ExistingOrderList order={order} key={order._id}/>
  );
   })}
   </div>
   
  :
  <h4>No Orders</h4>
}
  

 
   </div>

    </div>
  </div>
  </div>

    </div>
    
    </div>
  )
}

export default ExistingOrder