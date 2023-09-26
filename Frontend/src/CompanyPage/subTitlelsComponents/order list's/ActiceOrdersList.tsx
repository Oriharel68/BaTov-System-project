import { setDate } from '../../../Helpjs/help';
import { Order } from '../../../Types/Types';

function ActiceOrdersList({ order }: {order:Order&{ClientName:string}}) {
  const { _id, ClientName, WorkerName, DateTime, Price } = order;
  

  return (
    <>
      <td id="emphasis">{setDate(DateTime as any)}</td>
      <td>{ClientName}</td>
      <td>{WorkerName}</td>
      <td>{Price?.toLocaleString()}₪</td>
      <td>{_id}</td>
      <td>
        <button id="Active">פעיל</button>
      </td>
    </>
  );
}

export default ActiceOrdersList;
