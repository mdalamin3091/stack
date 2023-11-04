import { Fragment } from "react";
import toast from "react-hot-toast";
import Google from "../../assets/icons/Google";
import Apple from "../../assets/icons/Apple";

const SignInHeader = () => {
  return (
    <Fragment>
      <h2 className="md:text-[26px] text-xl font-semibold mb-2 text-secondary-300 text-bold">
        Sign In
      </h2>
      <p className="text-secondary-200 md:text-lg text-base mb-4">
        Welcome back, you’ve been missed!
      </p>
      <div className="flex items-center justify-center gap-3 flex-col md:flex-row md:gap-7">
        <button
          className="flex items-center justify-center gap-3 h-14 bg-secondary hover:bg-secondary-50 duration-100 rounded-2xl text-secondary-200 font-semibold w-full md:text-base text-sm"
          onClick={() => toast.error("Google sign in is not available!!")}
        >
          <Google /> Sign In with Google
        </button>
        <button
          className="flex items-center justify-center gap-3 h-14 bg-secondary hover:bg-secondary-50  duration-100 rounded-2xl text-secondary-200 font-semibold w-full md:text-base text-sm"
          onClick={() => toast.error("Apple sign in is not available!!")}
        >
          <Apple /> Sign In with Apple ID
        </button>
      </div>
      <div className="flex items-center justify-center">
        <div className="h-[2px] bg-secondary w-full"></div>
        <p className="text-lg text-secondary-100 font-semibold my-7 mx-3">OR</p>
        <div className="h-[2px] bg-secondary w-full"></div>
      </div>
    </Fragment>
  );
};

export default SignInHeader;
