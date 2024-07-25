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
            <div className="grid grid-cols-1 bg-white px-4 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default PanelLayout;
