import React from 'react'
import { setDate } from '../Helpjs/help';

function ExistingOrderList({order}) {
  
  
   
   

  return (
    
    <div>
        
        <div className='workerType-wraper'>
       <button id='WokerType'> 
    מקצוע:{order.TypeOfService} <br /><br /> 
      שם עובד : {order.WorkerName}<br /><br/>
      תאריך : {setDate(order.DateTime)}
       </button> 

    </div>
    </div>
  )
}

export default ExistingOrderList