import Card from "../../../elements/card/Card";
import Alert from "../../../elements/toast/Alert";

const Toast = () => {
  return (
    <>
      <Card header={"Toast Alert"}>
        <div className="col-span-1">
          <Alert
            status={"success"}
            title="Settlement"
            description="Your payment success"
          />
        </div>
        <div className="col-span-1">
          <Alert
            status={"error"}
            title="Error"
            description="Internal server error"
          />
        </div>
        <div className="col-span-1">
          <Alert
            status={"warning"}
            title="Warning"
            description="Warning! encountered during contract execution execution reverted"
          />
        </div>
      </Card>
    </>
  );
};

export default Toast;
