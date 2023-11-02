import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useUserLoginMutation } from "../redux/features/auth/authApi";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userLogin, { isSuccess, isError, isLoading, data, error }] =
    useUserLoginMutation();

  const handleSignIn = () => {
    userLogin({
      email,
      password,
    });
  };

  useEffect(() => {
    if (isSuccess && data) {
      toast.success("Signin successfully completed.");
    } else if (isError && error) {
      toast.error(error?.data?.error);
    }
  }, [isSuccess, isError, data, error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Your Email"
            disabled={isLoading}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="Your Password"
            disabled={isLoading}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600"
          onClick={handleSignIn}
          disabled={isLoading}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignIn;
