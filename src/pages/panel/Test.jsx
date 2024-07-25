import PanelLayout from "./PanelLayout";
import Breadcrumbs from "../../components/breadcrumbs/Breadcrumbs";
import Card from "../../components/card/Card";

const Test = () => {
  return (
    <>
      <PanelLayout>
        <Breadcrumbs />
        <div class="col-span-full xl:col-auto">
          <Card header={"Card Header"} footer={"Card Footer"} cols={1}>
            <p>Lorem Ipsum</p>
          </Card>
        </div>
      </PanelLayout>
    </>
  );
};

export default Test;
