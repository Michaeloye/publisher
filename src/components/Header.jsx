import React from "react";
import Logo from "./Logo";
import Notification from "./Notification";
import ProfilePicture from "./ProfilePicture";
import SearchBar from "./SearchBar";

function Header() {
  return (
    <div className="h-12 md:h-14 bg-white border flex items-center justify-between">
      <div className="ml-3 md:ml-10">
        <Logo />
      </div>
      <SearchBar />

      {/* Notification and ProfilePicture are in a single div because from the design they are closer
      to each other  */}
      <div className="flex items-center gap-5">
        <Notification />
        <div className="mr-3 md:mr-10">
          <ProfilePicture />
        </div>
      </div>
    </div>
  );
}

export default Header;
