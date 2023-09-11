function StatisticCompanyList({ item }: any) {
  const { Price, TypeOfService, WorkerName, _id } = item;

  return (
    <div className="money--statistics-list">
      <table>
        <tr>
          <th>תאריכים</th>
          <th>שם מזמין</th>
          <th>בודק/טכנאי</th>
          <th>שם בודק</th>
          <th>סכום</th>
          <th>מספר הזמנה</th>
        </tr>
        <tr>
          <td>NULL</td>
          <td>NULL</td>
          <td>{WorkerName}</td>
          <td>{TypeOfService}</td>
          <td>₪ {Price}</td>
          <td>{_id}</td>
        </tr>
      </table>
    </div>
  );
}

export default StatisticCompanyList;
