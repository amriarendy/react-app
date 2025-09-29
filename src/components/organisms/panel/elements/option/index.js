import OptionStaticElement from "./OptionStaticElement";
import OptionDynamicElement from "./OptionDynamicElement";

const Option = () => {
  return (
    <>
      {" "}
      <div className="grid grid-cols-1 px-4 pt-6 lg:grid-cols-2 gap-4 mb-4">
        <OptionStaticElement />
        <OptionDynamicElement />
      </div>
    </>
  );
};

export default Option;
