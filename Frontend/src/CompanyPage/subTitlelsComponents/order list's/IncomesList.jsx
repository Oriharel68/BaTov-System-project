import React from 'react'

function IncomesList({client}) {
    const {ClientName,Total} = client;
    console.log(client);



    // add styling : diraction--- RTL 
  return (
    <>
           <td >{ClientName}</td>
              <td>{Total} ₪</td>
    </>
  )
}

export default IncomesList