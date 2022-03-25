import React from "react";

function LoginOrSignup({ text, onClick }) {
  return (
    // Depending on the text the button color is determined
    <div
      className={
        `py-2 px-10 rounded-full font-medium cursor-pointer ` +
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
