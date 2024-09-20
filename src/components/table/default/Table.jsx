import Tfoot from "./Tfoot";

const Table = ({ children }) => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          {children}
        </table>
      </div>
    </>
  );
};

export default Table;
