import React from "react";
import Heading from "../components/section/Heading";
import CustomerLogo from "../components/section/CustomerLogo";
import Layout from "./Layout";
import About from "../components/section/About";
import Introduction from "../components/section/Introduction";
import Blog from "../components/section/Blog";
import Subscribe from "../components/section/Subscribe";

const Welcome = () => {
  return (
    <>
      <Layout>
        <Heading />
        <Blog />
        <Subscribe />
        <CustomerLogo />
      </Layout>
    </>
  );
};

export default Welcome;
