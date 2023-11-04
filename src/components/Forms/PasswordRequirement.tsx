import { FC, Fragment } from "react";
const requirements = [
  { re: /[0-9]/, label: "Includes number" },
  { re: /[a-z]/, label: "Includes lowercase letter" },
  { re: /[A-Z]/, label: "Includes uppercase letter" },
  { re: /^.{6,}$/, label: "Password must be at least 6 characters" },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Includes special symbol" },
  { re: /^.{6,32}$/, label: "6 to 32 characters" },
];

interface PropsType {
  passwordValue: string;
}

const PasswordRequirement: FC<PropsType> = ({ passwordValue }) => {
  function getStrength() {
    let multiplier = passwordValue.length > 5 ? 0 : 1;

    requirements.forEach((requirement) => {
      if (!requirement.re.test(passwordValue)) {
        multiplier += 1;
      }
    });

    return Math.round(
      Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10)
    );
  }
  const strength = getStrength();
  const color =
    strength === 100
      ? "bg-green-400 text-green-400"
      : strength > 50
      ? "bg-yellow-400 text-yellow-400"
      : strength > 10
      ? "bg-red-400"
      : "bg-secondary-50";
  return (
    <Fragment>
      <div className="flex items-center justify-between gap-3 mb-1 mt-4 ">
        {requirements.map((_, index) => (
          <div key={index} className={`${color} rounded-lg h-1 w-full`} />
        ))}
      </div>
      <p
        className={` text-sm text-left mb-6 ${
          strength === 100
            ? " text-green-400"
            : strength > 50
            ? " text-yellow-400"
            : strength > 10
            ? "text-red-400"
            : ""
        }`}
      >
        {strength === 100
          ? "Strong Password"
          : strength > 50
          ? "Good Password"
          : strength > 10
          ? "Weak Password"
          : null}
      </p>
    </Fragment>
  );
};

export default PasswordRequirement;
