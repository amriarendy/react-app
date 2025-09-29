import CheckBoxElement from "./CheckBoxElement";
import RadioElement from "./RadioElement";

const CheckBox = () => {
  return (
    <>
      <div className="grid grid-cols-1 px-4 pt-6 lg:grid-cols-2 gap-4 mb-4">
        <CheckBoxElement />
        <RadioElement />
      </div>
    </>
  );
};

export default CheckBox;
