import { setDate } from '../../../Helpjs/help';
function ActiceOrdersList({ item }: any) {
  const { _id, ClientName, WorkerName, DateTime, Price } = item;

  return (
    <>
      <td id="emphasis">{setDate(DateTime)}</td>
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
