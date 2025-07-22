import React from "react";
import Heading from "../components/organisms/section/Heading";
import CustomerLogo from "../components/organisms/section/CustomerLogo";
import Layout from "./Layout";
import Subscribe from "../components/organisms/section/Subscribe";
import Test from "../components/organisms/section/Test";
import Articles from "./Articles";

const Welcome = () => {
  return (
    <>
      <Layout>
        <Heading />
        <Articles />
        <CustomerLogo />
        <Test />
        <Subscribe />
      </Layout>
    </>
  );
};

export default Welcome;
