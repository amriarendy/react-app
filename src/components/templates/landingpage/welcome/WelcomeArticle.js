import BlogSquare from "../../../organisms/landingpage/blogs/BlogSquare";
import { Button } from "../../../atoms/Button";
import TitleDescription from "../../../molecules/title/TitleDescription";

const WelcomeArticle = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <TitleDescription
        label={"Articles"}
        description={
          "Learn how to grow your business with our expert advice."
        }
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
          color={"blue"}
        />
      </div>
    </div>
  );
};

export default WelcomeArticle;
