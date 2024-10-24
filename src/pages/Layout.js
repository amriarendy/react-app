import React from "react";
import TopBar from "../components/section/TopBar";
import Footer from "../components/section/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <TopBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
