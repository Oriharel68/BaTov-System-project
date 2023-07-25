import React from 'react'
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS , CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend } from "chart.js/auto";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
function StatisticCompanyLine({statisticData}) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };
  return (
    <div className='statistics-page'>
          <Bar
            data={statisticData}
            
           //  this is the option to styiling the Bar chart we can see the options in the documinatation 
           // options={}
           />
          
    </div>
  )
}

export default StatisticCompanyLine