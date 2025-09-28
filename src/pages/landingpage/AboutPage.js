import { useState } from "react";
import AboutView from "../../components/templates/landingpage/AboutView";
import Layout from "../../components/templates/landingpage/layouts";

const AboutPage = () => {
  const [useDark, setUseDark] = useState(
    localStorage.getItem("darkMode") === "true" ? true : false
  );
  return (
    <>
      <Layout>
        <section className="relative isolate bg-white dark:bg-gray-800">
          <AboutView useDark />
        </section>
      </Layout>
    </>
  );
};

export default AboutPage;
