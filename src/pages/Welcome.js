import Heading from "../components/templates/landingpage/welcome/Heading";
import CustomerLogo from "../components/templates/landingpage/welcome/CustomerLogo";
import Layout from "./Layout";
import Subscribe from "../components/templates/landingpage/welcome/Subscribe";
import WelcomeArticle from "../components/templates/landingpage/welcome/WelcomeArticle";

const Welcome = () => {
  return (
    <>
      <Layout>
        {/* Heading */}
        <section className="bg-gray-200 dark:bg-gray-900">
          <Heading />
        </section>
        {/* Articles */}
        <section className="bg-gray-50 py-8 md:py-12 antialiased dark:bg-gray-800">
          <WelcomeArticle />
        </section>
        {/* Customer Logo */}
        <section className="bg-gray-600 dark:bg-gray-900">
          <CustomerLogo />
        </section>
        {/* Subscribes */}
        <section class="bg-gray-50 dark:bg-gray-800">
          <Subscribe />
        </section>
      </Layout>
    </>
  );
};

export default Welcome;
