import React from 'react'

function IncomesList({client}) {
    const {ClientName,Price} = client;
    console.log(client);

    const calculateTotalAmount = (orders) => {
        return orders.reduce((total, order) => total + order.price, 0);
      };
    // const totalSpending = calculateTotalSpending(Price);

    // const clientIdToCalculate = 'client1';

    // const clientTransactions = transactions.filter(
    //   (transaction) => transaction.clientId === clientIdToCalculate
    // );
  
  return (
    <>
           <td >{ClientName}</td>
              <td>{calculateTotalAmount(Price)}</td>
    </>
  )
}

export default IncomesList