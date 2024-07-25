import CheckBox from "../ui/CheckBox";

const TableFeature = ({ attribute, index }) => {
  return (
    <>
      {attribute.checkbox && (
        <td className="w-4 p-4">
          <div className="flex items-center">
            <CheckBox item={{ id: "checkbox-1" }} />
          </div>
        </td>
      )}
      {attribute.checkbox && (
        <td className="w-4 p-4">
          <div className="flex items-center">{index + 1}.</div>
        </td>
      )}
    </>
  );
};

export default TableFeature;
