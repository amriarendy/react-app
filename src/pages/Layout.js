import React from "react";
import TopBar from "../components/section/TopBar";
import Footer from "../components/section/Footer";
import Test from "../components/section/Test";

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
