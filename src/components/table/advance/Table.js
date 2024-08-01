const Table = ({ children }) => {
  return (
    <>
      <div class="flex flex-col">
        <div class="overflow-x-auto">
          <div class="inline-block min-w-full align-middle">
            <div class="overflow-hidden shadow">
              <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
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
