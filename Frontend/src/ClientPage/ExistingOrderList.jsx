import React from 'react'
import { setDate } from '../Helpjs/help';

function ExistingOrderList({order}) {
  
  
   const TimeOF = new Date();
   TimeOF.setTime(order.DateTime);
   

  return (
    
    <div>
        
        <div className='workerType-wraper'>
       <button id='WokerType'> 
     Type Of Service:{order.TypeOfService} <br /><br /> 
      worker Name : {order.WorkerName}<br /><br/>
      Chosen Date : {setDate(TimeOF)}
       </button> 

    </div>
    </div>
  )
}

export default ExistingOrderList