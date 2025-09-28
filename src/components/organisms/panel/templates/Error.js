import Card from "../../../elements/card/Card";
import Errors from "../../../elements/errors/Errors";

const Error = () => {
  return (
    <>
      <div className="grid grid-cols-1 px-4 pt-6 lg:grid-cols-1 gap-4 mb-4">
        <Card>
          <Errors code={400} status="Error" message="Bad Request" />
        </Card>
        <Card>
          <Errors code={403} status="Error" message="Forbidden" />
        </Card>
        <Card>
          <Errors code={500} status="Error" message="Internal Server Error" />
        </Card>
      </div>
    </>
  );
};

export default Error;
