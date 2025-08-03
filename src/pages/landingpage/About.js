import Information from "../../components/organisms/section/Information";
import Layout from "../Layout";

const About = () => {
  return (
    <>
      <Layout>
        <section className="relative isolate bg-white dark:bg-gray-900">
          <Information />
        </section>
      </Layout>
    </>
  );
};

export default About;
