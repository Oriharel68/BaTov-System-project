import React, { useEffect, useState } from 'react'
import ClientNavBar from '../nav/ClientNavBar'
import axios from 'axios';
import ExistingOrderList from './ExistingOrderList';

function ExistingOrder() {
const [ordersData,setOrdersData]= useState(null);

    useEffect(() => {
        async function getOrdersData(){
          try{
          const {data} = await axios.get("http://localhost:4000/getExistingOrders");
          setOrdersData(data);
          }catch(err){
            console.log(err);
          }
        }
        getOrdersData();
      }, [])
  console.log(ordersData);
      
    return (
    <div>

    <div className="page-wraper">
  <div className="mainClient-page-wraper">
  <ClientNavBar/>
  
    <div className="mainClient-page">
    <div className="clientbuttonContainer-client">
      

  
    <div className='clientNewOrderPage'>
   <h3>:הזמנות קיימות</h3>
   
  {ordersData.map((order)=>{
    return(
        <ExistingOrderList order={order} key={order._id}/>
    )
  })}

 
   </div>

    </div>
  </div>
  </div>

    </div>
    
    </div>
  )
}

export default ExistingOrder