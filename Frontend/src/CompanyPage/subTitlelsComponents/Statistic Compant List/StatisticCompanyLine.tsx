import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js/auto';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
function StatisticCompanyLine({ statisticData }: any) {
  return (
    <>
      <Bar data={statisticData} />
    </>
  );
}

export default StatisticCompanyLine;
