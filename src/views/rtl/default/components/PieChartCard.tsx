import PieChart from "components/charts/PieChart";
import { pieChartData, pieChartOptions } from "variables/charts";
import Card from "components/card";

const PieChartCard = () => {
  return (
    <Card extra="rounded-[20px] p-3">
      <div className="flex flex-row justify-between px-3 pt-2">
        <div>
          <h4 className="text-lg font-bold text-sky-700 dark:text-white">
            Your Pie Chart
          </h4>
        </div>

        <div className="mb-6 flex items-center justify-center">
          <select className="mb-3 flex items-center justify-center text-sm font-bold text-gray-600 me-2 hover:cursor-pointer dark:!bg-sky-800 dark:text-white">
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
            <option value="weekly">Weekly</option>
          </select>
        </div>
      </div>

      <div className="mb-auto flex h-[220px] w-full items-center justify-center">
        <PieChart chartOptions={pieChartOptions} chartData={pieChartData} />
      </div>
      <div className="flex flex-row !justify-between rounded-2xl px-6 py-3 shadow-2xl shadow-shadow-500 dark:!bg-sky-700 dark:shadow-none">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-cyan-500" />
            <p className="text-sm font-normal text-gray-600 ms-1">Your Files</p>
          </div>
          <p className="mt-px text-xl font-bold text-sky-700  dark:text-white">
            63%
          </p>
        </div>

        <div className="h-11 w-px bg-gray-300 dark:bg-white/10" />

        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-[#6AD2FF]" />
            <p className="text-sm font-normal text-gray-600 ms-1">System</p>
          </div>
          <p className="mt-px text-xl font-bold text-sky-700 dark:text-white">
            25%
          </p>
        </div>
      </div>
    </Card>
  );
};

export default PieChartCard;