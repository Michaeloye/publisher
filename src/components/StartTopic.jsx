import React from "react";
import { BsPlus } from "react-icons/bs";

function StartTopic() {
  return (
    <div className="bg-primary-blue w-40 h-10 md:w-60 md:px-10 rounded-lg text-white flex items-center justify-center">
      <BsPlus size={25} />
      <p className="font-semibold text-sm md:text-base">Start New Topic</p>
    </div>
  );
}

export default StartTopic;
