import { useUserRegisterMutation } from "../redux/features/auth/authApi";
import { Fragment, useState } from "react";
import useToastAndApiHandler from "../hooks/useToastAndApiHandler";
import { IAuthError, IAuthResponse, RegisterData } from "../types/authTypes";
import Header from "../components/ui/Header";
import Gmail from "../assets/icons/Gmail";
import Google from "../assets/icons/Google";
import Apple from "../assets/icons/Apple";

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
    <Fragment>
      <Header />
      <main className="min-h-screen flex items-center justify-center container">
        <div className="max-w-[540px] w-full text-center">
          <h2 className="text-[26px] font-semibold mb-2 text-secondary-300 text-bold">
            Getting Started
          </h2>
          <p className="text-secondary-200 text-lg mb-4">
            Create an account to continue!
          </p>
          <div className="flex items-center justify-center gap-3 flex-col md:flex-row md:gap-7">
            <button className="flex items-center justify-center gap-3 h-14 bg-secondary rounded-2xl text-secondary-200 font-semibold w-full">
              <Google /> Sign Up with Google
            </button>
            <button className="flex items-center justify-center gap-3 h-14 bg-secondary rounded-2xl text-secondary-200 font-semibold w-full">
              <Apple /> Sign Up with Apple ID
            </button>
          </div>
          <div className="flex items-center justify-center">
            <div className="h-[2px] bg-secondary w-full"></div>
            <p className="text-lg text-secondary-100 font-semibold my-7 mx-3">
              OR
            </p>
            <div className="h-[2px] bg-secondary w-full"></div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 border border-secondary-50 rounded-2xl h-14 flex items-center justify-start px-2">
              <Gmail />
              <input
                className="w-full p-2 outline-none focus:outline-none text-secondary-100"
                type="text"
                placeholder="Your Name"
                name="username"
                disabled={isLoading}
                id="username"
                value={formData?.username || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-4">
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
      </main>
    </Fragment>
  );
};

export default Signup;
