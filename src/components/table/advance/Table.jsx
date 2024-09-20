const Table = ({ children }) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow">
              <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
                {children}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
