import ContactUs from "../../organisms/landingpage/about/ContactUs";
import Information from "../../organisms/landingpage/about/Information";

const AboutView = ({ useDark }) => {
  return (
    <>
      <div className="relative isolate">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <Information useDark />
            <ContactUs />
        </div>
      </div>
    </>
  );
};

export default AboutView;
