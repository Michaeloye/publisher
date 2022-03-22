import React from "react";
import { BsPlus } from "react-icons/bs";

function StartTopic() {
  return (
    <div className="bg-primary-blue h-10 w-60 px-10 rounded-lg text-white flex items-center">
      <BsPlus size={25} />
      <p className="font-semibold">Start New Topic</p>
    </div>
  );
}

export default StartTopic;
