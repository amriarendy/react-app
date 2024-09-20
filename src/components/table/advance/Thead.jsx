import CheckBox from "../../ui/CheckBox";

const Thead = ({ attribute, thead }) => {
  return (
    <>
      <thead className="bg-gray-100 dark:bg-gray-700">
        <tr>
          {attribute.checkbox && (
            <th scope="col" className="p-4">
              <div className="flex items-center">
                <CheckBox item={{ id: "checkbox-all" }} />
              </div>
            </th>
          )}

          {attribute.number && (
            <th
              scope="col"
              className="p-4 text-xs text-center text-gray-900 uppercase dark:text-gray-400"
            >
              <div className="flex items-center">No.</div>
            </th>
          )}
          {thead.map((item) => (
            <th
              key={item.key}
              scope="col"
              className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400"
            >
              {item.label}
            </th>
          ))}
        </tr>
      </thead>
    </>
  );
};

export default Thead;
