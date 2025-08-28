import AttributeTable from "./AttributeTable";
import Tfoot from "./Tfoot";

const Table = ({ children }) => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <tbody>
            {children}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
