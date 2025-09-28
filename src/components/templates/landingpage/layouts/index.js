import TopBar from "./TopBar";
import Footer from "./Footer";

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
