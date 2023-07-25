import axios from 'axios';
import React, { useEffect, useState } from 'react'

function StatisticCompanyList({item}) {
//  console.log(item);
 const {Price,TypeOfService,WorkerName,_id} = item


 

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
  {/* <tr>
    <td>Lois</td>
    <td>Griffin</td>
    <td>$150</td>
    <td>$100</td>

  </tr>
  <tr>
    <td>Joe</td>
    <td>Swanson</td>
    <td>$300</td>
    <td>$100</td>

  </tr>
  <tr>
    <td>Cleveland</td>
    <td>Brown</td>
    <td>$250</td>
    <td>$100</td>

  </tr> */}
      </table>
    </div>
  )
}

export default StatisticCompanyList