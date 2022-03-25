import React from "react";
import ProfilePicture from "./ProfilePicture";
import { FaArrowUp } from "react-icons/fa";

function TopUser({ name, number }) {
  return (
    <div className="flex items-center justify-around gap-3 mt-2">
      <div className="flex items-center gap-2">
        <ProfilePicture />
        <p className="text-primary-blue">{name}</p>
      </div>
      <div className="flex items-center gap-2">
        <p>{number}</p>
        <FaArrowUp size={13} color="#1a62dc" />
      </div>
    </div>
  );
}

export default TopUser;
