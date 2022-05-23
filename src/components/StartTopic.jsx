import React from "react";
import { BsPlus } from "react-icons/bs";

import { motion } from "framer-motion";

function StartTopic({ onClick }) {
  const startTopicButton = {
    whileHover: { scale: 0.98 },
    whileTap: { scale: 0.98 },
  };

  return (
    <motion.button
      className="bg-primary-blue flex items-center justify-center w-12 h-12 md:w-60 md:px-10 rounded-full md:rounded-lg text-white 
     fixed bottom-12 right-5 md:static md:bottom-auto md:right-auto hover:bg-opacity-80 z-50"
      onClick={() => onClick()}
      key="start-topic-button"
      whileHover="whileHover"
      whileTap="whileTap"
      variants={startTopicButton}
    >
      <BsPlus size={25} />
      <p className="hidden md:block font-semibold text-sm md:text-base">
        Start New Topic
      </p>
    </motion.button>
  );
}

export default StartTopic;
