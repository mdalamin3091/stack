import { Fragment } from "react";
import { useUserLoginMutation } from "../redux/features/auth/authApi";
import useToastAndApiHandler from "../hooks/useToastAndApiHandler";
import { IAuthError, IAuthResponse } from "../types";
import { Link } from "react-router-dom";
import FormInput from "../components/forms/FormInput";
import Gmail from "../assets/icons/Gmail";
import Header from "../components/ui/Header";
import { SubmitHandler } from "react-hook-form";
import Form from "../components/forms/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "../schemas/authSchema";
import SignInHeader from "../components/signIn/SignInHeader";

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
          <SignInHeader />
          <Form submitHandler={onSubmit} resolver={yupResolver(signInSchema)}>
            <FormInput
              icon={<Gmail />}
              type="text"
              placeholder="Your Email"
              name="email"
              disabled={isLoading}
            />

            <FormInput
              type="password"
              placeholder="Password"
              name="password"
              disabled={isLoading}
            />
            <FormInput
              type="checkbox"
              label="Remember Me"
              name="rememberMe"
              id="rememberMe"
            />
            <button className="btn-primary" type="submit" disabled={isLoading}>
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
