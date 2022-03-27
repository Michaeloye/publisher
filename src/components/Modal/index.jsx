import React from "react";
import Backdrop from "../Backdrop";
import close from "../../assets/close.svg";
import LoginOrSignup from "../LoginOrSignup";
import { FcGoogle } from "react-icons/fc";
import { GrFacebookOption, GrMail } from "react-icons/gr";
import { DiApple } from "react-icons/di";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

export default function Modal({ handleClose }) {
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
          <div className="relative">
            <input
              type="text"
              name="fullname"
              placeholder="fullname"
              autoComplete="off"
              spellCheck="false"
              className="h-10 md:h-9 px-9 py-1 rounded-full bg-white text-sm focus:outline-none lg:text-base border shadow-sm text-gray-700"
            />
            <FaUser className="absolute top-3 text-gray-300 left-3 " />
          </div>
          <div className="relative">
            <input
              type="text"
              name="topic"
              placeholder="topic"
              autoComplete="off"
              spellCheck="false"
              className="h-10 md:h-9 px-9 py-1 rounded-full bg-white text-sm focus:outline-none lg:text-base border shadow-sm text-gray-700"
            />
            <GrMail
              size={18}
              className="absolute top-2 text-gray-300 left-3 "
            />
          </div>
          <div className="relative">
            <input
              type="password"
              name="password"
              placeholder="password"
              autoComplete="off"
              spellCheck="false"
              className="h-10 md:h-9 px-9 py-1 rounded-full bg-white text-sm focus:outline-none lg:text-base border shadow-sm text-gray-700"
            />
            <RiLockPasswordFill
              size={18}
              className="absolute top-2 text-gray-300 left-3 "
            />
          </div>
          <div className="relative">
            <input
              type="password"
              name="confirm-password"
              placeholder="confirm password"
              autoComplete="off"
              spellCheck="false"
              className="h-10 md:h-9 px-9 py-1 rounded-full bg-white text-sm focus:outline-none lg:text-base border shadow-sm text-gray-700"
            />
            <RiLockPasswordFill
              size={18}
              className="absolute top-2 text-gray-300 left-3 "
            />
          </div>
          {/* <input
            type="text"
            name="topic"
            placeholder="topic"
            autoComplete="off"
            spellCheck="false"
            className="h-8 md:h-9 px-9 py-1 rounded-full bg-white text-sm focus:outline-none lg:text-base inner shadow-inner"
            style={{
              "--tw-shadow": "inset 0 2px 4px 0 rgb(0 0 0 / 0.35)",
              "--tw-shadow-colored": "inset 0 2px 4px 0 var(--tw-shadow-color)",
              boxShadow:
                "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
            }}
          /> */}
          {/* <input
            type="text"
            name="topic"
            placeholder="topic"
            autoComplete="off"
            spellCheck="false"
            className="h-8 md:h-9 px-9 py-1 rounded-full bg-white text-sm focus:outline-none lg:text-base inner shadow-inner"
            style={{
              "--tw-shadow": "inset 0 2px 4px 0 rgb(0 0 0 / 0.35)",
              "--tw-shadow-colored": "inset 0 2px 4px 0 var(--tw-shadow-color)",
              boxShadow:
                "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
            }}
          /> */}
          {/* <input
            type="text"
            name="topic"
            placeholder="topic"
            autoComplete="off"
            spellCheck="false"
            className="h-8 md:h-9 px-9 py-1 rounded-full bg-white text-sm focus:outline-none lg:text-base inner shadow-inner"
            style={{
              "--tw-shadow": "inset 0 2px 4px 0 rgb(0 0 0 / 0.35)",
              "--tw-shadow-colored": "inset 0 2px 4px 0 var(--tw-shadow-color)",
              boxShadow:
                "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
            }}
          /> */}
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
