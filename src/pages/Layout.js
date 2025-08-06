import TopBar from "../components/templates/landingpage/layouts/TopBar";
import Footer from "../components/templates/landingpage/layouts/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <TopBar />
      <div className="pt-16 overflow-auto">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
