import { setDate } from '../../../Helpjs/help';

function OldOrdersList({ order }: any) {
  const { _id, ClientName, WorkerName, DateTime, Price } = order;

  return (
    <>
      <td id="emphasis">{setDate(DateTime)}</td>
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
