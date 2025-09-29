const CheckBox = ({ id, type, value, onChange, classname }) => {
  return (
    <>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        className={`${classname} h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600`}
      />
    </>
  );
};

export default CheckBox;
