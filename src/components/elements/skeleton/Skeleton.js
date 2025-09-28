import SkeletonImage from "./SkeletonImage";
import SkeletonText from "./SkeletonText";

const Skeleton = () => {
  return (
    <>
      <div
        role="status"
        className="border border-gray-200 rounded-sm animate-pulse shadow-sm max-w-sm p-4 md:p-6 dark:border-gray-700"
      >
        <div className="items-center mt-4">
          <SkeletonImage />
        </div>
        <div className="w-full mt-4">
          <SkeletonText />
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
};

export default Skeleton;
