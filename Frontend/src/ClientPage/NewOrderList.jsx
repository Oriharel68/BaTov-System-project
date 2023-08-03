import React, { memo } from 'react'
import { Link } from 'react-router-dom';


function NewOrderList({item,addServiceProvider}) {

  return (
    <div className='workerType-wraper'>
       <button id='WokerType' onClick={()=>addServiceProvider(item)}> מקצוע:  {item.TypeOfService} <br /><br /> 
      שם עובד : {item.WorkerName} </button> 
     
    </div>
  )
}

export default memo(NewOrderList)