import Card from "../../../../elements/card/Card";
import Button from "../../../../elements/button/Button";

const ButtonElement = () => {
  return (
    <>
      <div className="w-full">
        <Card header={"Button"}>
          <Button
            type="button"
            classname={
              "rounded rounded-lg items-center px-2 py-1 text-white bg-blue-700 hover:bg-blue-500"
            }
          >
            Click Me..
          </Button>
        </Card>
      </div>
      <div className="w-full">
        <Card header={"Button Code"}>
          <pre className="flex overflow-auto rounded-b-lg p-4 text-sm/6 sm:rounded-t-lg language-html">
            <code>
              {`import Button from "@/src/components/elements/button/Button";
<Button 
    id={id}
    onClick={onClick}
    type="button" // "submit"
    className="rounded-lg items-center px-2 py-1 text-white bg-blue-700 hover:bg-blue-500"
    >
    {children}
</Button>`}
            </code>
          </pre>
        </Card>
      </div>
    </>
  );
};

export default ButtonElement;
