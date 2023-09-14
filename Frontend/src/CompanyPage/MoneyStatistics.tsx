<<<<<<< HEAD

=======
>>>>>>> b8e3d8be8bdffb6a6042901734f03c70ad1dc12c
import { Pie } from 'react-chartjs-2';
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

function MoneyStatistics({ statisticData }: any) {
  return (
    <div>
      <Pie data={statisticData} />
    </div>
  );
}

export default MoneyStatistics;
