import BlogSquare from "../../../molecules/blog/BlogSquare";
import { Button } from "../../../atoms/Button";

const WelcomeArticle = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
          Articles
        </h2>
        <p class="mt-2 text-lg leading-8 text-gray-600">
          Learn how to grow your business with our expert advice.
        </p>
      </div>
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
