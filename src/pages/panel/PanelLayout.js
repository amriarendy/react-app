import FooterPanel from "../../components/footer/FooterPanel";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

const PanelLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
        <Sidebar />
        <div
          id="main-content"
          className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900"
        >
          <main>
            <section className="min-h-screen">{children}</section>
          </main>
        <FooterPanel />
        </div>
      </div>
    </>
  );
};

export default PanelLayout;
