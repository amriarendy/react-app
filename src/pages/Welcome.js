import React from "react";
import Heading from "../components/section/Heading";
import CustomerLogo from "../components/section/CustomerLogo";
import Layout from "./Layout";
import About from "../components/section/About";
import Introduction from "../components/section/Introduction";
import Blog, { BlogSquare } from "../components/section/Blog";
import Subscribe from "../components/section/Subscribe";
import Test from "../components/section/Test";

const Welcome = () => {
  return (
    <>
      <Layout>
        <Heading />
        <BlogSquare />
        <CustomerLogo />
        <Test />
        <Subscribe />
      </Layout>
    </>
  );
};

export default Welcome;
