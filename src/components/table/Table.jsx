import Paginate from "../pagination/Paginate";
import TableHeader from "./TableHeader";

const Table = ({ children, attribute, thead }) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow">
              <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
                <TableHeader thead={thead} attribute={attribute} />
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                  {children}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* paginate */}
      {attribute.paginate && <Paginate />}
    </>
  );
};

export default Table;
