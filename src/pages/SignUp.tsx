import { useUserRegisterMutation } from "../redux/features/auth/authApi";
import { RegisterData } from "@/types/authTypes";
import toast from "react-hot-toast";
import { useState, useEffect } from "react";

const Signup = () => {
  const [formData, setFormData] = useState<RegisterData>({
    email: "",
    password: "",
  });
  const [userRegister, { data, isSuccess, isError, error, isLoading }] =
    useUserRegisterMutation();
  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    userRegister(formData);
  };

  useEffect(() => {
    if (isSuccess && data) {
      toast.success("Registration successfully completed.");
    } else if (isError && error) {
      toast.error(error?.data?.error);
    }
  }, [isSuccess, isError, data, error]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Your name
            </label>
            <input
              className="w-full border border-gray-300 p-2 rounded"
              type="text"
              name="username"
              disabled={isLoading}
              id="username"
              value={formData.username}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full border border-gray-300 p-2 rounded"
              type="email"
              name="email"
              disabled={isLoading}
              id="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full border border-gray-300 p-2 rounded"
              type="password"
              name="password"
              disabled={isLoading}
              id="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:bg-blue-300"
            type="submit"
            disabled={isLoading}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
