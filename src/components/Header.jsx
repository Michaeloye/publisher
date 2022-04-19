import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import Logo from "./Logo";
import Notification from "./Notification";
import ProfilePicture from "./ProfilePicture";
import SearchBar from "./SearchBar";

function Header() {
  // get url pathname
  const location = useLocation().pathname;

  return (
    <div className="h-12 md:h-14 bg-white border flex items-center justify-between">
      <div className="ml-3 md:ml-10">
        <Logo />
      </div>
      <SearchBar />

      {/* Notification and ProfilePicture are in a single div because from the design they are closer
      to each other  */}
      <div className="flex items-center gap-5">
        {/* if location is not the root page "welcome page" show the Notification and ProfilePicture */}
        {location !== "/" && (
          <>
            <Notification />
            <Link to={"/profile"} className="mr-3 md:mr-10 hover:opacity-90">
              <ProfilePicture />
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
