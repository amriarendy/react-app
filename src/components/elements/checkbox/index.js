import InputGroup from "../input";
import Input from "../input/Input";
import Label from "./Label";
import Radio from "./CheckBox";
import CheckBox from "./CheckBox";

const CheckBoxGroup = ({
  id,
  type,
  name,
  label,
  description,
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
        <div class="relative flex items-start">
          <div class="flex h-6 items-center">
            <CheckBox
              id={id}
              type={type}
              name={name}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              {...(required ? { required: true } : {})}
              {...(readonly ? { readOnly: true } : {})}
              {...(disabled ? { disabled: true } : {})}
            />
          </div>
          <div class="ml-3 text-sm leading-6">
            <p id={`${id}-checkbox-description`} className="text-gray-500">
              {description}
            </p>
          </div>
        </div>
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

export default CheckBoxGroup;
