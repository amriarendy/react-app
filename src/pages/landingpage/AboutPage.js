import { useState } from "react";
import Information from "../../components/templates/landingpage/Information";
import Layout from "../Layout";

const AboutPage = () => {
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

export default AboutPage;
