import { FC } from "react";
import ThreeDot from "../../assets/icons/ThreeDot";
import { IUserResponse } from "../../types";

interface PropsType {
  user: IUserResponse;
}

const User: FC<PropsType> = ({ user }) => {
  return (
    <tr className="bg-white border-b ">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {user.id}
      </th>
      <td className="px-6 py-4">
        <img
          src={user.avatar}
          alt={user.first_name}
          className="w-12 h-12 rounded-2xl"
        />
      </td>
      <td className="px-6 py-4">{user.email}</td>
      <td className="px-6 py-4 cursor-pointer">
        <ThreeDot />
      </td>
    </tr>
  );
};

export default User;
