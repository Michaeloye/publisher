import React from "react";
import ProfilePicture from "./ProfilePicture";

import { motion } from "framer-motion";

function ProfileDetails({ userName }) {
  // animation variant
  const logoutButton = {
    whileHover: { scale: 0.98 },
    whileTap: { scale: 0.98 },
  };

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
      <motion.button
        className="bg-red-700 text-base md:text-lg text-white px-5 py-2 mr-4 rounded-md shadow hover:bg-opacity-80 "
        onClick={() => handleLogout()}
        key="logout-button"
        whileHover="whileHover"
        whileTap="whileTap"
        variants={logoutButton}
      >
        Logout
      </motion.button>
    </div>
  );
}

export default ProfileDetails;
