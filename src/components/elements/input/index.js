import Label from "./Label";
import Input from "./Input";

const InputGroup = ({
  id,
  type,
  name,
  label,
  placeholder,
  required,
  value,
  onChange,
  classname,
  readonly,
  disabled,
  caption,
  validate,
}) => {
  return (
    <>
      <div className="mb-2">
        {type !== "hidden" && (
          <Label htmlFor={id} label={label} required={required} />
        )}
        <Input
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={classname}
          placeholder={placeholder}
          {...(required ? { required: true } : {})}
          {...(readonly ? { readOnly: true } : {})}
          {...(disabled ? { disabled: true } : {})}
        />
        {caption && (
          <p className="text-sm text-gray-500 dark:text-gray-300">{caption}</p>
        )}
        {validate && (
          <p className="font-semibold text-red-600 mt-2 text-sm">{validate}</p>
        )}
      </div>
    </>
  );
};

export default InputGroup;
