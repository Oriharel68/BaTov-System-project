import React from 'react'
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function StatisticCompanyLine({statisticData}) {
  return (
    <div >
          <Line
            data={statisticData} 
           //  this is the option to styiling the Bar chart we can see the options in the documinatation 
           // options={}
           />
          
    </div>
  )
}

export default StatisticCompanyLine