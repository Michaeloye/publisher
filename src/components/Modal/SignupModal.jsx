import { useState } from "react";
import Backdrop from "../Backdrop";
import close from "../../assets/close.svg";
import LoginOrSignup from "../LoginOrSignup";
import { FcGoogle } from "react-icons/fc";
import { GrFacebookOption } from "react-icons/gr";
import { DiApple } from "react-icons/di";
import Input from "../Input";
import axios from "axios";
import AccountCreatedModal from "./AccountCreatedModal";
import Loader from "../Loader/Loader";

export default function SignupModal({ handleClose }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [onTypePassword, setOnTypePassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // check for when an account is created
  const [accountCreated, setAccountCreated] = useState(false);
  const [accountCreatedModalOpen, setAccountCreatedModalOpen] = useState(true);

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
  // account created handler
  const handleAccountCreatedModalOpen = (state) => {
    setAccountCreatedModalOpen(state);
  };

  function createAccount() {
    setLoading(true);
    axios
      .post("https://mikepostapp.herokuapp.com/auth/signup", {
        name: username,
        email: email,
        password: password,
        passwordConfirm: confirmPassword,
      })
      .then((response) => {
        console.log(response);
        setLoading(false);
        setAccountCreated(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // if an account was created successfully then disply AccountCreatedModal
  if (accountCreated) {
    return (
      accountCreatedModalOpen && (
        <AccountCreatedModal handleClose={handleAccountCreatedModalOpen} />
      )
    );
  } else if (loading) {
    return loading && <Loader />;
  } else {
    return (
      <Backdrop>
        <div
          className="relative mx-auto h-11/12 w-11/12 md:w-1/2 lg:w-1/3 bg-white flex flex-col items-center justify-center rounded-2xl gap-2 md:gap-3 py-3"
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
            <Input
              icon={1}
              type="text"
              name="fullname"
              placeHolder="fullname"
              changeInput={(e) => {
                setUsername(e.target.value);
              }}
            />
            <p className="italic text-xs -mt-3 text-red-500 ">
              Email already exist
            </p>
            <Input
              icon={2}
              type="email"
              name="email"
              placeHolder="Email"
              changeInput={(e) => setEmail(e.target.value)}
            />
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
            <LoginOrSignup text={"Sign Up"} onClick={() => createAccount()} />
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
}
