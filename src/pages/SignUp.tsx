import { useUserRegisterMutation } from "../redux/features/auth/authApi";
import { useState } from "react";
import useToastAndApiHandler from "../hooks/useToastAndApiHandler";
import { IAuthError, IAuthResponse, RegisterData } from "../types/authTypes";

const Signup = () => {
  const [formData, setFormData] = useState<RegisterData>({
    email: "eve.holt@reqres.in",
    password: "pistol",
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

  const successMessage = "Registration successfully completed.";
  useToastAndApiHandler<IAuthResponse, IAuthError>(
    {
      isSuccess,
      isError,
      isLoading,
      data,
      error,
    },
    successMessage
  );

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
              value={formData?.username || ""}
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
