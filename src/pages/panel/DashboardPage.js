import PanelLayout from "./PanelLayout";
import Chart from "../../components/molecules/chart/Chart";
import Banner from "../../components/molecules/profile/Banner";

const DashboardPage = () => {
  return (
    <>
      <PanelLayout>
        <section className="bg-white dark:bg-gray-900">
          <Banner />
        </section>
      </PanelLayout>
    </>
  );
};

export default DashboardPage;
