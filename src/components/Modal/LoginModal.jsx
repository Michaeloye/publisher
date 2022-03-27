import { useState } from "react";
import Backdrop from "../Backdrop";
import close from "../../assets/close.svg";
import LoginOrSignup from "../LoginOrSignup";
import { FcGoogle } from "react-icons/fc";
import { GrFacebookOption } from "react-icons/gr";
import { DiApple } from "react-icons/di";
import Input from "../Input";

export default function LoginModal({ handleClose }) {
  const [password, setPassword] = useState("");

  // checking if the input is empty is important because the user might delete the entire password
  // but the match still says 'passwords match' or "passwords don't match" so when the input is
  // empty no check is raised
  function changePassword(e) {
    setPassword(e.target.value);
  }
  return (
    <Backdrop>
      <div
        className="relative mx-auto h-11/12 w-11/12 md:w-1/3 bg-white flex flex-col items-center justify-center rounded-2xl gap-2 md:gap-3 py-7"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={close}
          onClick={() => handleClose(false)}
          className="h-7 w-7 absolute cursor-pointer -top-8 right-0 md:-right-7"
        />
        <h1 className="md:text-xl font-semibold">Login</h1>

        <form className="flex flex-col items-center w-3/4 gap-3 md:gap-4">
          <Input icon={2} type="email" name="email" placeHolder="Email" />
          <Input
            icon={3}
            type="password"
            name="password"
            placeHolder="password"
            changePassword={changePassword}
          />
          <LoginOrSignup text={"Login"} />
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
