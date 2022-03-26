import React from "react";
import Backdrop from "../Backdrop";
import close from "../../assets/close.svg";
import LoginOrSignup from "../LoginOrSignup";

export default function Modal({ handleClose }) {
  return (
    <Backdrop>
      <div
        className="relative mx-auto h-96 w-11/12 md:w-1/3 bg-white flex flex-col items-center justify-center rounded-2xl gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={close}
          onClick={() => handleClose(false)}
          className="h-7 w-7 absolute cursor-pointer -top-8 right-0 md:-right-7"
        />
        <h1 className="md:text-xl font-semibold">Create Account</h1>
        <p className="text-sm">Create an account in just few clicks</p>
        <form className="flex flex-col items-center w-3/4 gap-5">
          <input
            type="text"
            name="topic"
            placeholder="topic"
            autoComplete="off"
            spellCheck="false"
            className=" h-8 md:h-9 px-9 py-1 rounded-full bg-white text-sm focus:outline-none lg:text-base inner shadow-inner"
            style={{
              "--tw-shadow": "inset 0 2px 4px 0 rgb(0 0 0 / 0.35)",
              "--tw-shadow-colored": "inset 0 2px 4px 0 var(--tw-shadow-color)",
              boxShadow:
                "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
            }}
          />
          <input
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
          />
          <input
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
          />
          <input
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
          />
          <LoginOrSignup text={"Sign Up"} />
        </form>
      </div>
    </Backdrop>
  );
}
