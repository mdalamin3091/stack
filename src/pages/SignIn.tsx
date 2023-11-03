import { Fragment } from "react";
import { useUserLoginMutation } from "../redux/features/auth/authApi";
import useToastAndApiHandler from "../hooks/useToastAndApiHandler";
import { IAuthError, IAuthResponse } from "../types/authTypes";
import Google from "../assets/icons/Google";
import Apple from "../assets/icons/Apple";
import { Link } from "react-router-dom";
import FormInput from "../components/Forms/FormInput";
import Gmail from "../assets/icons/Gmail";
import Header from "../components/ui/Header";
import { SubmitHandler } from "react-hook-form";
import Form from "../components/Forms/Form";

type FormValues = {
  email: string;
  password: string;
};

const SignIn = () => {
  const [userLogin, { isSuccess, isError, isLoading, data, error }] =
    useUserLoginMutation();

  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    userLogin({
      email: data.email,
      password: data.password,
    });
  };

  const successMessage = "Signin successfully completed";
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
            Sign In
          </h2>
          <p className="text-secondary-200 text-lg mb-4">
            Welcome back, you’ve been missed!
          </p>
          <div className="flex items-center justify-center gap-3 flex-col md:flex-row md:gap-7">
            <button className="flex items-center justify-center gap-3 h-14 bg-secondary hover:bg-secondary-50 duration-100 rounded-2xl text-secondary-200 font-semibold w-full">
              <Google /> Sign In with Google
            </button>
            <button className="flex items-center justify-center gap-3 h-14 bg-secondary hover:bg-secondary-50  duration-100 rounded-2xl text-secondary-200 font-semibold w-full">
              <Apple /> Sign In with Apple ID
            </button>
          </div>
          <div className="flex items-center justify-center">
            <div className="h-[2px] bg-secondary w-full"></div>
            <p className="text-lg text-secondary-100 font-semibold my-7 mx-3">
              OR
            </p>
            <div className="h-[2px] bg-secondary w-full"></div>
          </div>
          <Form submitHandler={onSubmit}>
            <FormInput
              icon={<Gmail />}
              type="email"
              placeholder="Your Email"
              name="email"
              disabled={isLoading}
            />

            <FormInput
              type="password"
              placeholder="Create Password"
              name="password"
              disabled={isLoading}
            />
            <FormInput
              type="checkbox"
              label="Remember Me"
              name="rememberMe"
              id="rememberMe"
            />
            <button
              className="bg-primary text-white px-4 rounded-2xl hover:bg-blue-600 disabled:bg-blue-300 w-full h-14 mb-5"
              type="submit"
              disabled={isLoading}
            >
              Sign In
            </button>
            <p className="text-base text-secondary-200 ">
              Don’t have an account yet?{" "}
              <Link to="/" className="text-primary">
                Sign Up
              </Link>
            </p>
          </Form>
        </div>
      </main>
    </Fragment>
  );
};

export default SignIn;
