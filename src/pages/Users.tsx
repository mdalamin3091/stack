import { useState } from "react";
import { useUsersQuery } from "../redux/features/users/usersApi";

const UserList = () => {
  const [skip, setSkip] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isSuccess, isError, isLoading, error } = useUsersQuery({
    skip,
    page: currentPage,
  });

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setSkip((page - 1) * 10);
  };
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      <ul className="divide-y divide-gray-300">
        {isSuccess &&
          data.data.map((user: any) => (
            <li key={user.id} className="py-2">
              <div className="flex items-center space-x-4">
                <img
                  src={user.avatar}
                  alt={user.first_name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="text-lg font-semibold">
                    {user.first_name} {user.last_name}
                  </p>
                  <p className="text-gray-600">{user.email}</p>
                </div>
              </div>
            </li>
          ))}
      </ul>
      {isSuccess && data.total_pages > 1 && (
        <div className="mt-4">
          <ul className="flex space-x-2">
            {Array.from({ length: data.total_pages }, (_, i) => (
              <li
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`px-3 py-1 rounded-full cursor-pointer ${
                  i + 1 === currentPage
                    ? "bg-blue-500 text-white"
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
  );
};

export default UserList;
