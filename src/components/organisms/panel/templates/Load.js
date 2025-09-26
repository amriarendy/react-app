import CardGroup from "../../../elements/card/Card";
import Loading from "../../../elements/skeleton/Loading";
import Skeleton from "../../../elements/skeleton/Skeleton";
import SkeletonText from "../../../elements/skeleton/SkeletonText";
import SkeletonImage from "../../../elements/skeleton/SkeletonImage";

const Load = () => {
  return (
    <>
      <div className="grid grid-cols-2 px-4 pt-6 lg:grid-cols-1 gap-4 mb-4">
          <CardGroup header="Loading">
            <Loading />
          </CardGroup>
          <CardGroup header="Skeleton Text & Image" cols={2}>
            <SkeletonText />
            <SkeletonImage />
          </CardGroup>
          <CardGroup header="Skeleton Card">
            <Skeleton />
          </CardGroup>
      </div>
    </>
  );
};

export default Load;
