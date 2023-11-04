import { useUserRegisterMutation } from "../redux/features/auth/authApi";
import { Fragment } from "react";
import useToastAndApiHandler from "../hooks/useToastAndApiHandler";
import { IAuthError, IAuthResponse } from "../types";
import Header from "../components/ui/Header";
import Gmail from "../assets/icons/Gmail";
import Person from "../assets/icons/Person";
import { Link } from "react-router-dom";
import FormInput from "../components/forms/FormInput";
import Form from "../components/forms/Form";
import { SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "../schemas/authSchema";
import SignupHeader from "../components/signup/SignupHeader";

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
      <main className="min-h-[88vh] flex items-center justify-center container mt-4 md:mt-0 mb-4 md:mb-0">
        <div className="max-w-[540px] w-full text-center">
          <SignupHeader />
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
              isSignup={true}
            />
            <FormInput
              type="checkbox"
              label="I agree to the Terms & Conditions"
              name="termsAndCondition"
              id="termsAndCondition"
            />
            <button className="btn-primary" type="submit" disabled={isLoading}>
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
