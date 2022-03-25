import React from "react";
import { FaUserFriends } from "react-icons/fa";
import TopUser from "../TopUser";

function TopUsers() {
  return (
    <div className="bg-white w-3/4 md:w-11/12 lg:w-1/2 rounded-2xl px-1 py-5 shadow-lg">
      <div className="flex items-center gap-2 ml-5">
        <FaUserFriends /> <p className="font-semibold">Top Users</p>
      </div>
      <TopUser name="name" number={10} />
      <TopUser name="name" number={10} />
      <TopUser name="name" number={10} />
      <TopUser name="name" number={10} />
    </div>
  );
}

export default TopUsers;
