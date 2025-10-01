import BlogSquare from "../../../organisms/landingpage/blogs/BlogSquare";
import Button from "../../../elements/button/Button";
import TitleDescription from "../../../elements/heading/Heading";

const WelcomeArticle = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <TitleDescription
        label={"Articles"}
        description={"Learn how to grow your business with our expert advice."}
      />
      <div className="mx-auto mt-4 mb-4 grid gap-3 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-3">
        <BlogSquare hide={{ author: true, date: true, description: false }} />
        <BlogSquare hide={{ author: true, date: true, description: false }} />
        <BlogSquare hide={{ author: true, date: true, description: false }} />
        {/* End Blog */}
      </div>
      <div className="w-full text-center">
        <Button
          id={"btnShowMore"}
          type={"button"}
          label={"Show More"}
          classname="inline-flex items-center px-3 py-2 text-white bg-indigo-700 hover:bg-indigo-500"
        >
          Show More..
        </Button>
      </div>
    </div>
  );
};

export default WelcomeArticle;
