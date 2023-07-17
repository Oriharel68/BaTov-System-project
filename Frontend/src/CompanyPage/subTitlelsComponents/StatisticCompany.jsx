import React, { useEffect, useState } from 'react'
import CombaibnedNavCompany from '../../nav/CombaibnedNavCompany'
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import axios from 'axios';
import StatisticCompanyList from './Statistic Compant List/StatisticCompanyList';

function StatisticCompany() {
  const [ServiceProviders,setServiceProviders] = useState([]);
  const [orderData,setOrdersData] = useState([]);
  console.log(orderData);
  // console.log(orderData.map((item)=>item.DateTime));
  // console.log(orderData.Orders.length); 
  
  // give us an err while re-rendering
  // const numOfOrder = orderData.Orders.length;
// console.log(numOfOrder);
// const ordersDataTest = orderData;


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
        setOrdersData([data]);

      

      } catch (error) {
        console.log(error);
      }
     }
    getServiceProviders();

    getOrdersData()
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
   const UserData = [
      {
        id: 1,
        year: 2016,
        userGain: 80000,
        userLost: 823,
      },
      {
        id: 2,
        year: 2017,
        userGain: 45677,
        userLost: 345,
      },
      {
        id: 3,
        year: 2018,
        userGain: 78888,
        userLost: 555,
      },]

      // console.log(UserData.length);
      console.log(orderData);
      console.log(orderData.length);

  const [userData, setUserData] = useState({
    labels:  ["1689163200000","1689163200000","1689163200000"],

    // orderData.mpa((item)=>{
    //  return(item +1)
    // }),
    // ["1689163200000","1689163200000","1689163200000"],
    datasets: [
      {
        label: "מספר הזמנות",
        data: orderData.length,
        // UserData.map((data) => data.userGain),
        // orderData.Orders.length,
 
        // .map((data) => data.userGain),
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
  return (
    <div >
      <CombaibnedNavCompany />
      {/* need to ypload some user data */}
      <div className="main-statistics-page-wraper">
        <h3>מספר הזמנות</h3>
      <div className="main-statistics-page">

        <Line
         data={userData} 
        //  this is the option to styiling the Bar chart we can see the options in the documinatation 
        // options={}
        />



      </div>
      <h3>הכנסות</h3>
      <div className="money--statistics">
        {ServiceProviders.map((item)=>{
          return(
     
            <StatisticCompanyList item={item} key={item.id}/>
            
          )
        })}
      
      </div>
      </div>

      <div className="TotalAmmount">
        <h3>cash ammount:{orderData.map((item)=>{
          return(
            <p>{item.DateTime}</p>
          )
        })}</h3>
      </div>

    </div>
  )
}

export default StatisticCompany