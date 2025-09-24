import CardGroup from "../../../elements/card/Card";
import Loading from "../../../elements/skeleton/Loading";

const Skeleton = () => {
  return (
    <>
      <div className="grid grid-cols-1 px-4 pt-6 lg:grid-cols-1 gap-4 mb-4">
        <CardGroup header="Loading">
          <Loading />
        </CardGroup>
        <CardGroup header="Skeleton">
          <Loading />
        </CardGroup>
      </div>
    </>
  );
};

export default Skeleton;
