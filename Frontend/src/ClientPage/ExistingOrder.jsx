import React, { useEffect, useState } from 'react'
import ClientNavBar from '../nav/ClientNavBar'
import axios from 'axios';
import ExistingOrderList from './ExistingOrderList';
import ClientNavBarOrderMain from '../nav/ClientNavBarOrderMain';
import { getAuth } from 'firebase/auth';

function ExistingOrder() {
const [ordersData,setOrdersData]= useState(null);
const [Auth, setAuth] = useState(getAuth());

    useEffect(() => {
        async function getOrdersData(){
          try{
          const {data} = await axios.post("http://localhost:4000/GetMyOrders",{
            Email:Auth.currentUser.email
          });
          console.log(data);
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