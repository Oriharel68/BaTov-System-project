import React from 'react'
import { setDate } from '../../../Helpjs/help';


function OldOrdersList({item}) {
  const {_id,ClientName,WorkerName,DateTime,Price} = item

  return (
    <>
       
    <td>{setDate(DateTime)}</td>
    <td>{ClientName}</td>
    <td>{WorkerName}</td>
    <td>{Price}₪</td>
    <td>{_id}</td>
  
</>
  )
}

export default OldOrdersList;