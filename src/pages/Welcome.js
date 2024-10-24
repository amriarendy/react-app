import React from "react";
import Heading from "../components/section/Heading";
import CustomerLogo from "../components/section/CustomerLogo";
import Layout from "./Layout";
import About from "../components/section/About";
import Introduction from "../components/section/Introduction";

const Welcome = () => {
  return (
    <>
      <Layout>
        <Heading />
        <Introduction />
        <About />
        <CustomerLogo />
      </Layout>
    </>
  );
};

export default Welcome;
