import { useState } from "react";
import Information from "../../components/organisms/section/Information";
import Layout from "../Layout";

const About = () => {
  const [useOpen, setOpen] = useState(
    localStorage.getItem("darkMode") === "true" ? true : false
  );
  return (
    <>
      <Layout>
        <section className="relative isolate bg-white dark:bg-gray-800">
          <Information useOpen />
        </section>
      </Layout>
    </>
  );
};

export default About;
