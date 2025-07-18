import React from "react";
import Heading from "../components/organisms/section/Heading";
import CustomerLogo from "../components/organisms/section/CustomerLogo";
import Layout from "./Layout";
import About from "../components/organisms/section/About";
import Introduction from "../components/organisms/section/Introduction";
import Blog, { BlogSquare } from "../components/organisms/section/Blog";
import Subscribe from "../components/organisms/section/Subscribe";
import Test from "../components/organisms/section/Test";

const Welcome = () => {
  return (
    <>
      <Layout>
        <BlogSquare />
      </Layout>
    </>
  );
};

export default Welcome;
