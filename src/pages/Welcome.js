import Heading from "../components/organisms/section/landingpage/Heading";
import CustomerLogo from "../components/organisms/section/landingpage/CustomerLogo";
import Layout from "./Layout";
import Subscribe from "../components/organisms/section/landingpage/Subscribe";
import WelcomeArticle from "../components/organisms/section/landingpage/WelcomeArticle";
import Test from "../components/organisms/section/landingpage/Test";

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
        <section className="bg-gray-800 dark:bg-gray-800">
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
