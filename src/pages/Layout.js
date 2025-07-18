import React from "react";
import TopBar from "../components/organisms/section/TopBar";
import Footer from "../components/organisms/section/Footer";
import Test from "../components/organisms/section/Test";

const Layout = ({ children }) => {
  return (
    <>
      {/* <Test /> */}
      <TopBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
