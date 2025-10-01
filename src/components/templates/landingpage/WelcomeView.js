import Hero from "../../organisms/landingpage/welcome/Hero";
import WelcomeArticle from "../../organisms/landingpage/welcome/WelcomeArticle";
import Subscribe from "../../organisms/landingpage/welcome/Subsribe";
import Pricing from "../../organisms/landingpage/welcome/Pricing";

const WelcomeView = () => {
  return (
    <>
      {/* Heading */}
      <section className="bg-gray-200 dark:bg-gray-900">
        <Hero />
      </section>
      {/* Articles */}
      <section className="bg-gray-50 py-8 md:py-12 antialiased dark:bg-gray-800">
        <WelcomeArticle />
      </section>
      {/* Subscribes */}
      <section class="bg-gray-50 dark:bg-gray-800">
        <Subscribe />
      </section>
      {/* Customer Logo */}
      <section className="bg-gray-50 dark:bg-gray-800">
        <Pricing />
      </section>
    </>
  );
};

export default WelcomeView;
