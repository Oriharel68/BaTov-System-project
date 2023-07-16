import axios from 'axios';
import React, { useEffect, useState } from 'react'

function StatisticCompanyList({item}) {
//  console.log(item);
 const {Price,TypeOfService,WorkerName,_id} = item

//  const [orderData,setOrdersData] = useState(null);

 
useEffect(()=>{
// async function getOrdersData(){
// try {
//   const {data} = await axios.get("http://localhost:4000/getAllOrders");
//   setOrdersData(data);
// } catch (error) {
  
// }
// }
},[])
//  const[OrderData,setOrderData]=useState(null)
//  useEffect(() => {
//   async function getorders(){
//     const {TypeOfService,WorkerName} = Provider;
//     const {data} = await axios.post('http://localhost:4000/getExistingOrders',{
//       TypeOfService,
//       WorkerName
//     });
//    const FilterTime = data.map((item)=>{
//     return item.DateTime;
//   })
//   setOrderData(FilterTime);
//   }
//   getorders();
// }, [])

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