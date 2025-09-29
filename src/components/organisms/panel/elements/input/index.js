import InputButtonElement from "./InputButtonElement";
import InputElement from "./InputElement";
import InputGroupElement from "./InputGroupElement";
import InputFormElement from "./InputFormElement";

const Input = () => {
  return (
    <>
      <div className="grid grid-cols-1 px-4 pt-6 lg:grid-cols-2 gap-4 mb-4">
        <InputElement />
        <InputGroupElement />
        <InputButtonElement />
        <InputFormElement />
      </div>
    </>
  );
};

export default Input;
