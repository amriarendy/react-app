import Label from "./Label";
import Option from "./Option";

const OptionGroup = ({
  id,
  label,
  name,
  required,
  data = [],
  value,
  onChange,
  selected,
  caption,
  validate,
}) => {
  return (
    <div className="mb-2">
      {label && <Label htmlFor={id} label={label} required={required} />}

      <Option
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        selected={selected}
      >
        {data.map((item, index) => (
          <option key={item.key ?? index} value={item.value}>
            {item.label}
          </option>
        ))}
      </Option>
      {caption && (
        <p className="text-sm text-gray-500 dark:text-gray-300">{caption}</p>
      )}
      {validate && (
        <p className="font-semibold text-red-600 mt-2 text-sm">{validate}</p>
      )}
    </div>
  );
};

export default OptionGroup;
