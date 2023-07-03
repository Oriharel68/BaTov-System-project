import React, { useEffect, useState } from 'react'
import ClientNavBar from '../nav/ClientNavBar'
import { Link  } from 'react-router-dom'
import axios from "axios";
import NewOrderList from './NewOrderList';

function NewOrder() {


  const [ServiceProviders,setServiceProviders] = useState([]);

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
      <div className='clientNewOrderPage'>
        <h3>סוג איש מקצוע</h3>
      </div>
        {data.map((item)=>{
          return (
            <NewOrderList item={item} key={item._id}/>
          )
        })}
    </div>

  )
}

export default NewOrder