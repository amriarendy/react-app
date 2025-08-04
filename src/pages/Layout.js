import TopBar from "../components/organisms/section/landingpage/layouts/TopBar";
import Footer from "../components/organisms/section/landingpage/layouts/Footer";

const Layout = ({ children }) => {
  return (
    <>
      {/* <Test /> */}
      <TopBar />
      <div className="pt-16 overflow-auto">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
