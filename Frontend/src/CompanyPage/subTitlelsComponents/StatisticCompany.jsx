import React, { useEffect, useState } from 'react'
import CombaibnedNavCompany from '../../nav/CombaibnedNavCompany'
import StatisticCompanyList from './Statistic Compant List/StatisticCompanyList';
import StatisticCompanyLine from './Statistic Compant List/StatisticCompanyLine';

import axios from 'axios';

function StatisticCompany() {
  const [ServiceProviders,setServiceProviders] = useState([]);
  // const [orderReady,setOrderReady] = useState(false)
    const [orderDataWithDate, setOrderDataWithDate] = useState([]);

  const [orderData,setOrdersData] = useState([]);
  const [statisticData, setStatisticData] = useState({
    labels:["1689163200000","1689163200000","1689163200000"],
    datasets: [
      {
        label: "מספר הזמנות",
        data: ["1689163200000","1689163200000","1689163200000"],

        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  // console.log(orderData.map((item)=>item.DateTime));
  // console.log(orderData); 
  
  // give us an err while re-rendering
  // const numOfOrder = orderData.Orders.length;
// console.log(numOfOrder);
// const ordersDataTest = orderData;
// let orderData = ["asdasd"];
 
  useEffect(() => {
    async function getServiceProviders(){
      try{
      const {data} = await axios.get("http://localhost:4000/getServiceProvider");
      setServiceProviders(data);
      
      }catch(err){
        console.log(err);
      }
    }
    async function getOrdersData(){
      try {
        const {data} = await axios.get("http://localhost:4000/getAllOrders");
        const {Order} = data;
        setOrdersData(Order);
        // orderData = Order;
      

      } catch (error) {
        console.log(error);
      }
  
     }
     async function NewOrdersDate(){
     try {
        const {data} =await axios.get('http://localhost:4000/getAllOrders');
        setOrderDataWithDate(data);
        console.log(orderDataWithDate);
      } catch (error) {
        console.log(Error);
      }
    }
    getServiceProviders();
    getOrdersData()
    NewOrdersDate()
    // setOrderReady(true)
  }, [])

  // const UserData = [
  //   {
  //     id: 1,
  //     year: 2016,
  //     userGain: 80000,
  //     userLost: 823,
  //   },
  //   {
  //     id: 2,
  //     year: 2017,
  //     userGain: 45677,
  //     userLost: 345,
  //   },
  //   {
  //     id: 3,
  //     year: 2018,
  //     userGain: 78888,
  //     userLost: 555,
  //   },
  //   {
  //     id: 4,
  //     year: 2019,
  //     userGain: 90000,
  //     userLost: 4555,
  //   },
  //   {
  //     id: 5,
  //     year: 2020,
  //     userGain: 4300,
  //     userLost: 234,
  //   },
  // ];

  // the state that will store all the data that needed for the analyitics
  // if we want we can stored that data outside the componenet
  // const [userData , setUserData] = useState({
    // repesent the option that we want to repesnt and add to the chart
    //we can use here for exapale .MAP to view all the stored data that we want to repesent .
    // labels: [2010,2012,2013],
    // the use gorw for year
    // datasetes: [{
      // what is this piece repsent
      // label:"User Gained",
      // the ammount of user's gained --- >  we can use the .map methood to present all the data stored
      // data: [15000,25000,35000] 
    // }]


     
  // })
  //  const UserData = [
  //     {
  //       id: 1,
  //       year: 2016,
  //       userGain: 80000,
  //       userLost: 823,
  //     },
  //     {
  //       id: 2,
  //       year: 2017,
  //       userGain: 45677,
  //       userLost: 345,
  //     },
  //     {
  //       id: 3,
  //       year: 2018,
  //       userGain: 78888,
  //       userLost: 555,
  //     },]

      // console.log(UserData.length);
      // console.log(orderData);
      // console.log(orderData.length);
      
          
  return (
    <div >
      <CombaibnedNavCompany />
      <div className="main-statistics-page-wraper">
        <h3>מספר הזמנות</h3>
      <div className="main-statistics-page">

        
          <StatisticCompanyLine  statisticData={statisticData}/>
         
        



      </div>
      <h3>דוח הכנסות</h3>
      <div className="money--statistics" >
        {/* {ServiceProviders.map((item)=>{
          return(
     
            <StatisticCompanyList item={item} key={item.id}/>
            
          )
        })} */}
        <table>
        <tr>
              <th>שנתי </th>
              <th>חודשי</th>
              <th>יומי</th>       
      </tr>
       <tr>
        <td>100₪</td>
        <td>200₪</td>
        <td>300₪</td>
       </tr>
        </table>
        {/* <ul style={{backgroundColor:'red',padding:'1em',display:'flex'}}>
          <li >יומי</li>
          <li>חודשי </li>
          <li>שנתי</li>
        </ul> */}
      
      </div>
      </div>

      <div className="TotalAmmount">
        <h3>
          רווחים
     </h3>
      </div>

    </div>
  )
}

export default StatisticCompany