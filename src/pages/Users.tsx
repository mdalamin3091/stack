import { useUsersQuery } from "../redux/features/users/usersApi";

const UserList = () => {
  const { data, isSuccess, isError, isLoading, error } =
    useUsersQuery(undefined);
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      <ul className="divide-y divide-gray-300">
        {data?.data.map((user: any) => (
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
    </div>
  );
};

export default UserList;
