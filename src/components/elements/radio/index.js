import Label from "./Label";
import Radio from "./Radio";

const RadioGroup = ({
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
    <>            {/* <div class="flex items-center">
    <input id="email" name="notification-method" type="radio" checked class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
    <label for="email" class="ml-3 block text-sm font-medium leading-6 text-gray-900">Email</label>
</div> */}
      <div className="mb-2 flex items-center">
        {type !== "hidden" && <Label htmlFor={id} label={label} required={required}/>}
        <Radio
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={`${classname}`}
          placeholder={placeholder}
          {...(required ? { required: true } : {})}
          {...(readonly ? { readOnly: true } : {})}
          {...(disabled ? { disabled: true } : {})}
        />
        <label for={id} class="ml-3 block text-sm font-medium leading-6 text-gray-900">Email</label>
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

export default RadioGroup;
