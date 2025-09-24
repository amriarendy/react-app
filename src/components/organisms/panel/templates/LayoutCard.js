import CardGroup from "../../../elements/card/Card";
import Image from "../../../elements/image/Image";

const CardLayout = () => {
    return (
      <>
        <div className="grid grid-cols-1 px-4 pt-6 xl:grid-cols-3 xl:gap-4 dark:bg-gray-900">
          <div className="col-span-full xl:col-auto">
            <CardGroup header={"Card Header"} footer={"Card Footer"} cols={1}>
              <p className="dark:text-gray-300">col-span-full xl:col-auto</p>
            </CardGroup>
          </div>
          <div className="col-span-2">
            <CardGroup header={"Card Header"} footer={"Card Footer"} cols={1}>
              <p className="dark:text-gray-300">col-span-2</p>
            </CardGroup>
          </div>
          <div className="col-span-3">
            <CardGroup header={"Card Header"} footer={"Card Footer"} cols={2}>
              <div className="col-span-1 dark:text-gray-300">col-span-3</div>
              <div className="col-span-1 dark:text-gray-300">col-span-3</div>
            </CardGroup>
          </div>
          <div className="col-span-1">
            <CardGroup>
              <div className="col-span-1 bg-red-100 dark:text-gray-300">
                col-span-3
              </div>
              <div className="col-span-1 bg-blue-100 dark:text-gray-300">
                col-span-3
              </div>
            </CardGroup>
          </div>
          </div>
      </>
    );
  };
  
  export default CardLayout;
  