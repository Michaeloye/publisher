import React from "react";
import ProfilePicture from "./ProfilePicture";

function ProfileDetails() {
  return (
    <div className="flex items-center ml-10 md:ml-20 mt-10 gap-7">
      <ProfilePicture size="large" />
      <h1 className="text-lg md:text-2xl font-bold">Andrew Davison</h1>
    </div>
  );
}

export default ProfileDetails;
