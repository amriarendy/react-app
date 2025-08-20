import React from "react";

const Alert = () => {
  return (
    <div>
      <Card header={"Alert"}>
        <div className="col-span-1">
          <Alert
            code={200}
            message={"Nice Work! Success alert with code 200."}
          />
          <AlertList
            code={422}
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
          <AlertAditionalContent
            code={500}
            label={"This is a danger alert"}
            message={
              " More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."
            }
          />
          <AlertBorder message={"Information: You good and god bless you."} />
        </div>
      </Card>
    </div>
  );
};

export default Alert;
