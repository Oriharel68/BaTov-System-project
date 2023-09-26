import { Client } from "../../../Types/Types";


function IncomesList({ client }:{client:Client&{Total:number,ClientName:string}}) {
  const { ClientName, Total, Email, PhoneNumber } = client;

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
