import { FC } from "react";
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
      ? "bg-green-600"
      : strength > 50
      ? "bg-yellow-600"
      : strength > 10
      ? "bg-red-600"
      : "bg-secondary-50";
  //   console.log("strength", strength);
  return (
    <div className="flex items-center justify-between gap-3 mb-7 mt-4">
      {requirements.map((_, index) => (
        // <div key={index} className={`${color} rounded-lg h-1 w-full`} />
        <div key={index} className={`${color} rounded-lg h-1 w-full`} />
      ))}
    </div>
  );
};

export default PasswordRequirement;
