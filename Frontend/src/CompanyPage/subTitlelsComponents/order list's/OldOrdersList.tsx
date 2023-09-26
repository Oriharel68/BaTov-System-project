import { setDate } from '../../../Helpjs/help';
import { Order } from '../../../Types/Types';

function OldOrdersList({ order }:{order:Order&{ClientName:string}}) {
  const { _id, ClientName, WorkerName, DateTime, Price } = order;

  return (
    <>
      <td id="emphasis">{setDate(DateTime as any)}</td>
      <td>{ClientName}</td>
      <td>{WorkerName}</td>
      <td>{Price?.toLocaleString()}₪</td>
      <td>{_id}</td>
      <td>
        <button id="Closed">נסגר</button>
      </td>
    </>
  );
}

export default OldOrdersList;
