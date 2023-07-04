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
  
      <div className="client-calender">
      <div class="month">
  <ul>
    <li class="prev">&#10094;</li>
    <li class="next">&#10095;</li>
    <li>August  <span >2021</span></li>
  </ul>
</div>

<ul class="weekdays">
  <li>Mo</li>
  <li>Tu</li>
  <li>We</li>
  <li>Th</li>
  <li>Fr</li>
  <li>Sa</li>
  <li>Su</li>
</ul>

<ul class="days">
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
  <li>7</li>
  <li>8</li>
  <li>9</li>
  <li><span class="active">10</span></li>
  <li>11</li>
  
</ul>

      </div>
         
          </div>
        </div>
        </div>

       </div>
     
    </div>

  )
}

export default NewOrder