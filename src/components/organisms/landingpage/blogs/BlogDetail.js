import Divider from "../../../elements/divider";
import CommentList from "../../../organisms/landingpage/comments/CommentList";
import CommentInput from "../../../organisms/landingpage/comments/CommentInput";
import BlogContent from "../../../organisms/landingpage/blogs/BlogContent";

const BlogDetail = () => {
  return (
    <>
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700 dark:text-white">
        <BlogContent />
        <Divider />
        <CommentInput />
        <div className="pb-4">
          <Divider label={"Comments"} />
        </div>
        <div className="dark:bg-gray-800">
          <CommentList />
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
