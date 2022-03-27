import React from "react";

function LoginOrSignup({ text, onClick }) {
  return (
    // Depending on the text the button color is determined
    <div
      className={
        `py-2 px-10 w-40 md:w-48 rounded-full font-medium cursor-pointer flex items-center justify-center ` +
        (text === "Login"
          ? `bg-transparent border border-primary-blue `
          : `bg-primary-blue border text-white `)
      }
      onClick={() => onClick()}
    >
      {text}
    </div>
  );
}

export default LoginOrSignup;
