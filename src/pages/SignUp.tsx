import { useUserRegisterMutation } from "../redux/features/auth/authApi";
import { Fragment } from "react";
import useToastAndApiHandler from "../hooks/useToastAndApiHandler";
import { IAuthError, IAuthResponse } from "../types";
import Header from "../components/ui/Header";
import Gmail from "../assets/icons/Gmail";
import Google from "../assets/icons/Google";
import Apple from "../assets/icons/Apple";
import Person from "../assets/icons/Person";
import { Link } from "react-router-dom";
import FormInput from "../components/Forms/FormInput";
import Form from "../components/Forms/Form";
import { SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "../schemas/authSchema";
import toast from "react-hot-toast";

type FormValues = {
  email: string;
  password: string;
};

const Signup = () => {
  const [userRegister, { data, isSuccess, isError, error, isLoading }] =
    useUserRegisterMutation();
  const onSubmit: SubmitHandler<FormValues> = async (data: FormValues) => {
    userRegister({
      email: data.email,
      password: data.password,
    });
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
            <button
              className="flex items-center justify-center gap-3 h-14 bg-secondary hover:bg-secondary-50 duration-100 rounded-2xl text-secondary-200 font-semibold w-full"
              onClick={() => toast.error("Google signup is not available!!")}
            >
              <Google /> Sign Up with Google
            </button>
            <button
              className="flex items-center justify-center gap-3 h-14 bg-secondary hover:bg-secondary-50 duration-100 rounded-2xl text-secondary-200 font-semibold w-full"
              onClick={() => toast.error("Apple signup is not available!!")}
            >
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
          <Form submitHandler={onSubmit} resolver={yupResolver(signupSchema)}>
            <FormInput
              icon={<Gmail />}
              type="text"
              placeholder="Your Email"
              name="email"
              disabled={isLoading}
            />
            <FormInput
              icon={<Person />}
              type="text"
              placeholder="Your Name"
              name="name"
              disabled={isLoading}
            />

            <FormInput
              type="password"
              placeholder="Create Password"
              name="password"
              disabled={isLoading}
            />
            <div className="flex items-center justify-between gap-3 mb-7">
              <div className="bg-[#38CB89] rounded-lg h-1 w-full"></div>
              <div className="bg-secondary-100 rounded-lg h-1 w-full"></div>
              <div className="bg-secondary-200 rounded-lg h-1 w-full"></div>
              <div className="bg-secondary-200 rounded-lg h-1 w-full"></div>
              <div className="bg-secondary-200 rounded-lg h-1 w-full"></div>
              <div className="bg-secondary-200 rounded-lg h-1 w-full"></div>
            </div>
            <FormInput
              type="checkbox"
              label="I agree to the Terms & Conditions"
              name="termsAndCondition"
              id="termsAndCondition"
            />
            <button
              className="bg-primary text-white px-4 rounded-2xl hover:bg-blue-600 disabled:bg-blue-300 w-full h-14 mb-5"
              type="submit"
              disabled={isLoading}
            >
              Sign Up
            </button>
            <p className="text-base text-secondary-200 ">
              Already have an account?{" "}
              <Link to="/signin" className="text-primary">
                Sign In
              </Link>
            </p>
          </Form>
        </div>
      </main>
    </Fragment>
  );
};

export default Signup;
