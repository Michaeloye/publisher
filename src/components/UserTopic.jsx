import React from "react";
import ProfilePicture from "./ProfilePicture";

function UserTopic() {
  return (
    <div className="flex justify-center items-center gap-10 mt-2 text-gray-600">
      <div className="flex justify-center items-center gap-2">
        <ProfilePicture /> <p className="text-sm">UserName</p>
      </div>
      <p className="text-sm">Topic</p>
    </div>
  );
}

export default UserTopic;
