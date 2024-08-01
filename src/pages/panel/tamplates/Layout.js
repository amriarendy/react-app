import PanelLayout from "../PanelLayout";
import Breadcrumbs from "../../../components/breadcrumbs/Breadcrumbs";
import Card from "../../../components/card/Card";

const Layout = () => {
    const breadCrumbs = {
      page: "Layout",
      data: [{ page: "Test", route: "/test" }],
    };
    return (
        <>
        <PanelLayout>
              <Breadcrumbs breadCrumbs={breadCrumbs} />
        <div className="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
              <div className="col-span-full xl:col-auto">
                <Card header={"Card Header"} footer={"Card Footer"} cols={1}>
                  <p className="dark:text-gray-300">col-span-full xl:col-auto</p>
                </Card>
              </div>
              <div className="col-span-2">
                <Card header={"Card Header"} footer={"Card Footer"} cols={1}>
                  <p className="dark:text-gray-300">col-span-2</p>
                </Card>
              </div>
              <div className="col-span-3">
                <Card header={"Card Header"} footer={"Card Footer"} cols={2}>
                  <div className="col-span-1 dark:text-gray-300">col-span-3</div>
                  <div className="col-span-1 dark:text-gray-300">col-span-3</div>
                </Card>
              </div>
              <div className="col-span-1">
                <Card>
                  <div className="col-span-1 bg-red-100 dark:text-gray-300">
                    col-span-3
                  </div>
                  <div className="col-span-1 bg-blue-100 dark:text-gray-300">
                    col-span-3
                  </div>
                </Card>
              </div>
            </div>
        </PanelLayout>
        </>
    )
}

export default Layout;