import React, { useEffect, useMemo, useState } from 'react'
import ClientNavBar from '../nav/ClientNavBar'
import { Link  } from 'react-router-dom'
import axios from "axios";
import NewOrderList from './NewOrderList';

function NewOrder() {


  const [ServiceProviders,setServiceProviders] = useState([]);
  
   //useMemo
//   const calculation = useMemo(() => expensiveCalculation(count), [count]);
  
const addServiceProvider= (item)=>{
    // console.log(e.target);

}

useEffect(() => {
    async function getServiceProviders(){
      try{
      const {data} = await axios.get("http://localhost:4000/getServiceProvider");
      setServiceProviders(data);
      }catch(err){
        console.log(err);
      }
    }
    getServiceProviders();
  }, [])


  return (

    <div>
           <div className="page-wraper">
  

        <div className="mainClient-page-wraper">
        <ClientNavBar/>
        
          <div className="mainClient-page">
          <div className="buttonContainer-client">


          <div className='clientNewOrderPage'>
        <h3>סוג איש מקצוע</h3>
        {ServiceProviders.map((item)=>{
          return (
            <NewOrderList item={item} key={item._id} addServiceProvider={addServiceProvider}/>
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

export default NewOrder