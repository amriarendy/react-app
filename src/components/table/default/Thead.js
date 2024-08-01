const Thead = ({ attribute, thead }) => {
  return (
    <>
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          {attribute.no && (
            <th scope="col" className="px-4 py-3">
              No.
            </th>
          )}
          {thead.map((item) => (
            <th scope="col" className="px-4 py-3" key={item.key}>
              {item.label}
            </th>
          ))}
        </tr>
      </thead>
    </>
  );
};

export default Thead;
