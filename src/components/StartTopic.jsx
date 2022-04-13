import React from "react";
import { BsPlus } from "react-icons/bs";

function StartTopic({ onClick }) {
  return (
    <button
      className="bg-primary-blue flex items-center justify-center w-12 h-12 md:w-60 md:px-10 rounded-full md:rounded-lg text-white 
     fixed bottom-12 right-5 md:static md:bottom-auto md:right-auto"
      onClick={() => onClick()}
    >
      <BsPlus size={25} />
      <p className="hidden md:block font-semibold text-sm md:text-base">
        Start New Topic
      </p>
    </button>
  );
}

export default StartTopic;
