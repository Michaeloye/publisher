import React from "react";

function ProfilePicture({ size = "medium" }) {
  return (
    <div
      className={
        "bg-gray-300 rounded-full " +
        (size == "small"
          ? "h-5 w-5 "
          : size == "medium"
          ? "h-9 w-9 "
          : size == "large"
          ? "h-20 w-20 md:h-32 md:w-32 "
          : "")
      }
    ></div>
  );
}

export default ProfilePicture;
