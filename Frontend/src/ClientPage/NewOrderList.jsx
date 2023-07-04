import React from 'react'
import { Link } from 'react-router-dom';

function NewOrderList({item,addServiceProvider}) {
// console.log(addServiceProvider);
  return (
    <div>
      <Link to={'/order/calender'}>   
       <button onClick={()=>addServiceProvider(item)}>type of worker :  {item.TypeOfService} <br /><br /> 
      worker Name : {item.WorkerName} </button> 
      </Link>
    </div>
  )
}

export default NewOrderList