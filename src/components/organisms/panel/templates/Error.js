import CardGroup from "../../../elements/card/Card";
import Errors from "../../../elements/errors/Errors";

const Error = () => {
    return (
      <>
        <div className="grid grid-cols-1 px-4 pt-6 lg:grid-cols-1 gap-4 mb-4">
            <CardGroup header="Error Code 500">
                <Errors code={200} status="Errors" message="Internal Server Error" />
            </CardGroup>
            <CardGroup header="Error Code 500">
                <Errors code={500} status="Errors" message="Internal Server Error" />
            </CardGroup>
            <CardGroup header="Error Code 500">
                <Errors code={500} status="Errors" message="Internal Server Error" />
            </CardGroup>
        </div>
      </>
    );
  };
  
  export default Error;
  