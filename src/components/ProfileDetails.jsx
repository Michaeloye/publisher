import React from "react";
import ProfilePicture from "./ProfilePicture";

function ProfileDetails({ userName }) {
  function handleLogout() {
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    window.location.href = `/`;
  }
  return (
    <div className="flex items-center justify-between ml-10 md:ml-20 mt-10">
      <div className="flex items-center gap-3 md:gap-5">
        <ProfilePicture size="large" />
        {/* text-left because by default text is aligned to the center */}
        <h1 className="text-lg text-left md:text-2xl font-bold w-[100px] md:w-[300px] overflow-x-hidden text-ellipsis">
          {userName}
        </h1>
      </div>
      <button
        className="bg-red-700 text-base md:text-lg text-white px-5 py-2 mr-4 rounded-md shadow "
        onClick={() => handleLogout()}
      >
        Logout
      </button>
    </div>
  );
}

export default ProfileDetails;
