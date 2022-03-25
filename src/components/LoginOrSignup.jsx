import React from "react";

function LoginOrSignup({ text }) {
  return (
    // Depending on the text the button color is determined
    <div
      className={
        `py-2 px-10 rounded-full font-medium ` +
        (text === "Login"
          ? `bg-transparent border border-primary-blue`
          : `bg-primary-blue border text-white`)
      }
    >
      {text}
    </div>
  );
}

export default LoginOrSignup;
