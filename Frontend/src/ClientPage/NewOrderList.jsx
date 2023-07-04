import React, { memo } from 'react'
import { Link } from 'react-router-dom';


function NewOrderList({item,addServiceProvider}) {
// console.log(addServiceProvider);

  return (
    <div>
       <button onClick={()=>addServiceProvider(item)}>type of worker :  {item.TypeOfService} <br /><br /> 
      worker Name : {item.WorkerName} </button> 
     
    </div>
  )
}

export default memo(NewOrderList)