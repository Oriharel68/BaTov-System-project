import React from 'react'
import { setDate } from '../../../Helpjs/help';
function ActiceOrdersList({item}) {
//    console.log(item);
   const {_id,ClientName,WorkerName,DateTime,Price} = item
//    const orderDate = new Date();
//    orderDate.setTime(item.DateTime)
  return (
    <>
       
              <td id="emphasis">{setDate(DateTime)}</td>
              <td >{ClientName}</td>
              <td>{WorkerName}</td>
              <td>{Price}₪</td>
              <td>{_id}</td>
              <td ><button id="Active">פעיל</button></td>
            
    </>
  )
}

export default ActiceOrdersList