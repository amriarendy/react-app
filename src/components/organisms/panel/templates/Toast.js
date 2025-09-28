import Card from "../../../elements/card/Card";
import { Alert, AlertList, AlertBorder } from "../../../elements/toast/Alert";

const Toast = () => {
  return (
    <>
      <Card header={"Alert"}>
        <div className="col-span-1">
          <Alert
            code={200}
            message={"Nice Work! Success alert with code 200."}
          />
          <Alert code={422} message={"Warning! Some problem here code 422."} />
          <Alert
            code={500}
            message={"Danger! Internal server error code 500"}
          />
          <Alert message={"Good! Have nice day!"} />
          <AlertList
            code={422}
            color={"yellow"}
            label={"Warning! Validation status code 422"}
            data={[
              { message: "Input required" },
              { message: "Email format validation" },
              { message: "At least one lowercase character" },
              {
                message: "At least 10 characters (and up to 100 characters)",
              },
              {
                message:
                  "Inclusion of at least one special character, e.g., ! @ # ?",
              },
            ]}
          />
          <AlertBorder message={"Information: You good and god bless you."} />
        </div>
      </Card>
    </>
  );
};

export default Toast;
