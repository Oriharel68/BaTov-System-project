import React from 'react'

function NewOrderList({item}) {
  return (
    <div>
        <h5>{item.TypeOfService}</h5>
        <h6>{item.WorkerName}</h6>
    </div>
  )
}

export default NewOrderList