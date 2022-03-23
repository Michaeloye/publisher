import React from "react";
import UserTopic from "../UserTopic";
import BookImage from "../../assets/book.jpg";

function TopTopics() {
  return (
    <div className="bg-white md:w-11/12 lg:w-3/4 rounded-2xl pb-5 shadow-lg">
      <div
        className="md:h-14 rounded-tr-3xl rounded-tl-3xl opacity-80 shadow-lg"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.72), rgba(0, 0, 0, 0.72)), url(${BookImage})`,
        }}
      >
        <p className="text-white font-semibold inline-block mt-5">Top Topics</p>
      </div>
      <UserTopic />
      <UserTopic />
      <UserTopic />
      <UserTopic />
    </div>
  );
}

export default TopTopics;
