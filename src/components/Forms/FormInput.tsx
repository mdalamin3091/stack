import { Fragment, useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import Lock from "../../assets/icons/Lock";
import EyeOpen from "../../assets/icons/EyeOpen";
import EyeClose from "../../assets/icons/EyeClose";
import { IInput } from "../../types";
import { getErrorMessageByPropertyName } from "../../utils/schema-validator";
import PasswordRequirement from "./PasswordRequirement";

const FormInput = ({
  name,
  type,
  value,
  disabled,
  placeholder,
  id,
  icon,
  label,
  isSignup,
}: IInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const [isPassword, setIsPassword] = useState(true);
  const [passwordValue, setPasswordValue] = useState("");
  const errorMessage = getErrorMessageByPropertyName(errors, name);
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field }) =>
          type === "password" ? (
            <Fragment>
              <div
                className={`border rounded-2xl h-14 flex items-center justify-start px-2 ${
                  errorMessage ? "border-error shadow" : "border-secondary-50"
                }`}
              >
                <Lock />
                <input
                  className="w-full p-2 outline-none focus:outline-none text-secondary-100"
                  type={!isPassword ? "password" : "text"}
                  placeholder={placeholder}
                  disabled={disabled}
                  {...field}
                  value={value ? value : field.value}
                  onChange={(e) => {
                    field.onChange(e);
                    setPasswordValue(e.target.value);
                  }}
                />
                {isPassword ? (
                  <span
                    className="cursor-pointer hover:bg-secondary-50 p-1 rounded-md"
                    onClick={() => setIsPassword(false)}
                  >
                    <EyeOpen />
                  </span>
                ) : (
                  <span
                    className="cursor-pointer hover:bg-secondary-50 p-1 rounded-md"
                    onClick={() => setIsPassword(true)}
                  >
                    <EyeClose />
                  </span>
                )}
              </div>
            </Fragment>
          ) : type === "checkbox" ? (
            <div className="flex items-center mb-4">
              <input
                id={id}
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                value={value ? value : field.value}
              />
              <label
                htmlFor={id}
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                {label}
              </label>
            </div>
          ) : (
            <div
              className={`border rounded-2xl h-14 flex items-center justify-start px-2 focus:border-secondary-100 ${
                errorMessage ? "border-error shadow" : "border-secondary-50 "
              }`}
            >
              {icon}
              <input
                type={type}
                className="w-full p-2 outline-none focus:outline-none text-secondary-100"
                placeholder={placeholder}
                disabled={disabled}
                {...field}
                value={value ? value : field.value}
              />
            </div>
          )
        }
      />
      <small className="text-left text-error mb-4 mt-2 block text-sm font-semibold">
        {errorMessage}
      </small>
      {type === "password" && isSignup && (
        <PasswordRequirement passwordValue={passwordValue} />
      )}
    </>
  );
};

export default FormInput;
