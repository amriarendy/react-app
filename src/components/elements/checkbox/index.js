import Label from "./Label";
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
              classname={classname}
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
          <p className="mt-2 text-xs text-gray-400 dark:text-gray-300">
            {caption}
          </p>
        )}
        {validate && (
          <p className="font-semibold text-red-600 mt-2 text-sm">{validate}</p>
        )}
      </div>
    </>
  );
};

export default CheckBoxGroup;
