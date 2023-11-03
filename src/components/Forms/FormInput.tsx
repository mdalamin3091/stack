import { ReactElement, ReactNode, useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import Lock from "../../assets/icons/Lock";
import EyeOpen from "../../assets/icons/EyeOpen";
import EyeClose from "../../assets/icons/EyeClose";

interface IInput {
  name: string;
  type?: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  disabled?: boolean;
  validation?: object;
  label?: string;
  required?: boolean;
  icon?: ReactNode | ReactElement;
}

const FormInput = ({
  name,
  type,
  value,
  disabled,
  placeholder,
  id,
  validation,
  icon,
  label,
}: IInput) => {
  const { control } = useFormContext();
  const [isPassword, setIsPassword] = useState(true);
  //   const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field }) =>
          type === "password" ? (
            <div className="mb-4 border border-secondary-50 rounded-2xl h-14 flex items-center justify-start px-2">
              <Lock />
              <input
                className="w-full p-2 outline-none focus:outline-none text-secondary-100"
                type={!isPassword ? "password" : "text"}
                placeholder={placeholder}
                disabled={disabled}
                {...field}
                value={value ? value : field.value}
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
            <div className="mb-4 border border-secondary-50 rounded-2xl h-14 flex items-center justify-start px-2">
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
      {/* <small style={{ color: "red" }}>{errorMessage}</small> */}
    </>
  );
};

export default FormInput;
