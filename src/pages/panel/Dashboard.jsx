import PanelLayout from "./PanelLayout";
import Chart from "../../components/chart/Chart";

const Dashboard = () => {
  return (
    <>
      <PanelLayout>
        <div className="grid grid-cols-1 bg-white px-4 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
          <Chart />
        </div>
      </PanelLayout>
    </>
  );
};

export default Dashboard;
