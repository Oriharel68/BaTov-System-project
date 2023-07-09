import React from 'react'

function ExistingOrderList({order}) {
  
  
   const TimeOF = new Date();
   TimeOF.setTime(order.DateTime);


  return (
    
    <div>
        
        <div className='workerType-wraper'>
       <button id='WokerType'> 
     Type Of Service:{order.TypeOfService} <br /><br /> 
      worker Name : {order.WorkerName}<br /><br/>
      Chosen Date : {TimeOF.toUTCString()}
       </button> 
       
    </div>
    </div>
  )
}

export default ExistingOrderList