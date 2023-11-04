import { useState } from "react";
import { useUsersQuery } from "../redux/features/users/usersApi";
import DashboardLayout from "../layout/DashboardLayout";
import User from "../components/users/User";
import { IUserResponse } from "../types";

const UserList = () => {
  const [skip, setSkip] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isSuccess } = useUsersQuery({
    skip,
    page: currentPage,
  });

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setSkip((page - 1) * 10);
  };

  return (
    <DashboardLayout>
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-semibold mb-4 text-secondary-300">
          User List
        </h2>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 uppercase">
                  #Id
                </th>
                <th scope="col" className="px-6 py-3 uppercase">
                  User
                </th>
                <th scope="col" className="px-6 py-3 uppercase">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 uppercase">
                  Options
                </th>
              </tr>
            </thead>
            <tbody>
              {isSuccess &&
                data.data.map((user: IUserResponse) => <User user={user} />)}
            </tbody>
          </table>
        </div>
        {isSuccess && data.total_pages > 1 && (
          <div className="mt-4">
            <ul className="flex space-x-2">
              {Array.from({ length: data.total_pages }, (_, i) => (
                <li
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`px-3 py-1 rounded-full cursor-pointer ${
                    i + 1 === currentPage
                      ? "bg-primary text-white"
                      : "bg-gray-300 text-gray-700"
                  }`}
                >
                  {i + 1}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default UserList;
