import React from 'react'

function NewOrderList({item,addServiceProvider}) {
console.log(addServiceProvider);
  return (
    <div>
       <button onClick={(e)=>addServiceProvider(e)}>type of worker :  {item.TypeOfService} <br /><br /> 
      worker Name : {item.WorkerName} </button> 
    </div>
  )
}

export default NewOrderList