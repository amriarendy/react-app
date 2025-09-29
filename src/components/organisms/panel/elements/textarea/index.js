import TextAreaElement from "./TextAreaElement";
import TextAreaGroupElement from "./TextAreaGroupElement";

const TextArea = () => {
  return (
    <>
      <div className="grid grid-cols-1 px-4 pt-6 lg:grid-cols-2 gap-4 mb-4">
        <TextAreaElement />
        <TextAreaGroupElement />
      </div>
    </>
  );
};

export default TextArea;
