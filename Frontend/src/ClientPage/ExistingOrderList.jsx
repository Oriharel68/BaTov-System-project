import React from 'react'

function ExistingOrderList({order}) {
  
   console.log(order);
  return (
    
    <div>
        
        <div className='workerType-wraper'>
       <button id='WokerType'> 
     Type Of Service:{order.TypeOfService} <br /><br /> 
      worker Name : {order.WorkerName}<br /><br/>
      Chosen Date : {order.DateTime}
       </button> 
       
    </div>
    </div>
  )
}

export default ExistingOrderList