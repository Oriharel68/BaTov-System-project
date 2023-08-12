import React from 'react'
import {  Pie} from "react-chartjs-2";
import { Chart as ChartJS , CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend } from "chart.js/auto";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function MoneyStatistics({statisticData}:any) {
  return (
    <div >
          <Pie
            data={statisticData}
            
           //  this is the option to styiling the Bar chart we can see the options in the documinatation 
           // options={}
           />
          
    </div>
  )
}

export default MoneyStatistics