import React from 'react'

function IncomesList({client}) {
    const {ClientName,Total,Email} = client;
    console.log(client);



    // add styling : diraction--- RTL 
  return (
    <>
           <td id="emphasis" > {ClientName}</td>
           <td >{Email}</td>
              <td>{Total} ₪</td>
              
    </>
  )
}

export default IncomesList