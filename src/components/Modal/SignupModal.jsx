import { useState } from "react";

import Backdrop from "../Backdrop";
import close from "../../assets/close.svg";
import LoginOrSignup from "../LoginOrSignup";

import { FcGoogle } from "react-icons/fc";
import { GrFacebookOption } from "react-icons/gr";
import { DiApple } from "react-icons/di";

import Input from "../Input";
import axios from "axios";
import ErrorOccuredModal from "./ErrorOccuredModal";
import Loader from "../Loader/Loader";

import { motion } from "framer-motion";

export default function SignupModal({ handleClose }) {
  // animation variant
  const modal = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: "100vh" },
  };

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [onTypePassword, setOnTypePassword] = useState(false);

  const [emailExist, setEmailExist] = useState(false);
  const [loading, setLoading] = useState(false);

  // check for when an account is created
  const [errorOccured, setErrorOccured] = useState(false);

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
  function handleErrorOccuredModal(state) {
    setErrorOccured(state);
  }
  // account created handler

  function createAccount() {
    setLoading(true);
    axios
      .post("https://mikepostapp.herokuapp.com/auth/signup", {
        name: username,
        email: email,
        password: password,
        passwordConfirm: confirmPassword,
      })
      .then((res) => {
        const token = res.data.token;
        const name = res.data.newUser.name;
        const userId = res.data.newUser._id;

        setLoading(false);
        localStorage.setItem("token", token);
        localStorage.setItem("name", name);
        localStorage.setItem("userId", userId);
        window.location.href = `/#/feed`;
      })
      .catch((error) => {
        if (error.message === "Request failed with status code 400") {
          console.log(error);

          setLoading(false);
          setEmailExist(true);
        } else {
          setErrorOccured(true);
        }
      });
  }

  // if error occurs disply ErrorOccuredModal
  if (errorOccured) {
    return <ErrorOccuredModal handleClose={handleErrorOccuredModal()} />;
  } else {
    return (
      <Backdrop>
        <motion.div
          className="relative mx-auto h-11/12 w-11/12 md:w-1/2 lg:w-1/3 bg-white flex flex-col items-center justify-center rounded-2xl gap-2 md:gap-3 py-3"
          onClick={(e) => e.stopPropagation()}
          key="signup-modal"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={modal}
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
            <Input
              icon={1}
              type="text"
              name="fullname"
              placeHolder="fullname"
              changeInput={(e) => {
                setUsername(e.target.value);
              }}
            />
            <Input
              icon={2}
              type="email"
              name="email"
              placeHolder="Email"
              changeInput={(e) => {
                setEmail(e.target.value);
                setEmailExist(false);
              }}
            />
            {emailExist && (
              <p className="italic text-xs -mt-1 text-red-500 -mb-2 ">
                Email already exist
              </p>
            )}
            <Input
              icon={3}
              type="password"
              name="password"
              placeHolder="password"
              changeInput={changePassword}
            />
            <Input
              icon={3}
              type="password"
              name="confirm-password"
              placeHolder="confirm password"
              changeInput={changeConfirmPassword}
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
            {loading ? (
              <Loader />
            ) : (
              <LoginOrSignup text={"Sign Up"} onClick={() => createAccount()} />
            )}
          </form>
          <p>or</p>
          <div className="border-2 h-10 w-64 flex items-center justify-center gap-3 rounded-full cursor-not-allowed">
            <FcGoogle />{" "}
            <p className="text-sm md:text-base">Continue with Google</p>
          </div>
          <div className="h-10 w-64 flex items-center justify-center gap-3 rounded-full bg-black text-white cursor-not-allowed">
            <DiApple />
            <p className="text-sm md:text-base">Continue with Apple</p>
          </div>
          <div className="h-10 w-64 flex items-center justify-center gap-3 rounded-full bg-blue-500 text-white cursor-not-allowed">
            <GrFacebookOption />
            <p className="text-sm md:text-base">Continue with Facebook</p>
          </div>
        </motion.div>
      </Backdrop>
    );
  }
}
