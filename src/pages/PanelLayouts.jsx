import React from "react";
import Header from "../components/layouts/Header";
import Sidebar from "../components/layouts/Sidebar";
import Footer from "../components/layouts/Footer";

const PanelLayouts = ({ children }) => {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="p-4 sm:ml-64 mt-14">{children}</div>
    </>
  );
};

export default PanelLayouts;
