import Card from "../../components/molecules/card/Card";
import Errors from "../../components/molecules/errors/Errors";
import PanelLayout from "./PanelLayout";

const ErrorPage = () => {
  return (
    <>
      <PanelLayout>
        <div className="grid grid-cols-1 bg-white px-4 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
          <div className="col-span-3">
            <Card>
              <Errors />
            </Card>
          </div>
        </div>
      </PanelLayout>
    </>
  );
};

export default ErrorPage;
