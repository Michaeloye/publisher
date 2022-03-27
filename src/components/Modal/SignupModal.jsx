import { useState } from "react";
import Backdrop from "../Backdrop";
import close from "../../assets/close.svg";
import LoginOrSignup from "../LoginOrSignup";
import { FcGoogle } from "react-icons/fc";
import { GrFacebookOption } from "react-icons/gr";
import { DiApple } from "react-icons/di";
import Input from "../Input";

export default function SignupModal({ handleClose }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [onTypePassword, setOnTypePassword] = useState(false);

  // checking if the input is empty is important because the user might delete the entire password
  // but the match still says 'passwords match' or "passwords don't match" so when the input is
  // empty no check is raised
  function changePassword(e) {
    setPassword(e.target.value);
    if (e.target.value === "") {
      setOnTypePassword(false);
    } else {
      setOnTypePassword(true);
    }
  }
  function changeConfirmPassword(e) {
    setConfirmPassword(e.target.value);
    if (e.target.value === "") {
      setOnTypePassword(false);
    } else {
      setOnTypePassword(true);
    }
  }
  return (
    <Backdrop>
      <div
        className="relative mx-auto h-11/12 w-11/12 md:w-1/3 bg-white flex flex-col items-center justify-center rounded-2xl gap-2 md:gap-3 py-3"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={close}
          onClick={() => handleClose(false)}
          className="h-7 w-7 absolute cursor-pointer -top-8 right-0 md:-right-7"
        />
        <h1 className="md:text-xl font-semibold">Create Account</h1>
        <p className="text-xs text-gray-500">
          Create an account in just few clicks
        </p>
        <form className="flex flex-col items-center w-3/4 gap-3 md:gap-4">
          <Input icon={1} type="text" name="fullname" placeHolder="fullname" />
          <Input icon={2} type="email" name="email" placeHolder="Email" />
          <Input
            icon={3}
            type="password"
            name="password"
            placeHolder="password"
            changePassword={changePassword}
          />
          <Input
            icon={3}
            type="password"
            name="confirm-password"
            placeHolder="confirm password"
            changePassword={changeConfirmPassword}
          />

          {/* onTypePassword is necessary because the password values are not meant 
          to be checked if the user hasn't started typing, so once the user starts typing
          onTypePassword is true so the two passwords(password and confirmPassword) can
          be checked if they match */}

          {onTypePassword ? (
            password === confirmPassword ? (
              <p className="italic text-xs -mt-3 text-green-600 ">
                passwords match
              </p>
            ) : (
              <p className="italic text-xs -mt-3 text-red-500 ">
                passwords don't match
              </p>
            )
          ) : (
            ""
          )}
          <LoginOrSignup text={"Sign Up"} />
        </form>
        <p>or</p>
        <div className="border-2 h-10 w-64 flex items-center justify-center gap-3 rounded-full cursor-pointer">
          <FcGoogle />{" "}
          <p className="text-sm md:text-base">Continue with Google</p>
        </div>
        <div className="h-10 w-64 flex items-center justify-center gap-3 rounded-full bg-black text-white cursor-pointer">
          <DiApple />
          <p className="text-sm md:text-base">Continue with Apple</p>
        </div>
        <div className="h-10 w-64 flex items-center justify-center gap-3 rounded-full bg-blue-500 text-white cursor-pointer">
          <GrFacebookOption />
          <p className="text-sm md:text-base">Continue with Facebook</p>
        </div>
      </div>
    </Backdrop>
  );
}
