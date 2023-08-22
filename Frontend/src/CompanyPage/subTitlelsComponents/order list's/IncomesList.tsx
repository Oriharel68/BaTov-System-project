import React from "react";

function IncomesList({ client }:any) {
  const { ClientName, Total, Email, PhoneNumber } = client;
  // console.log(client);
  // add styling : diraction--- RTL
  return (
    <>
      <td id="emphasis"> {ClientName}</td>
      <td>{Email}</td>
      <td>{PhoneNumber}</td>
      <td>₪{Total?.toLocaleString()}</td>
    </>
  );
}

export default IncomesList;
