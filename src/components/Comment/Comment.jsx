import React, { useState, useEffect } from "react";

import timeSince from "../../utils/timeSince";

import LikeDislike from "../LikeDislike";
import ProfilePicture from "../ProfilePicture";

import { FiEdit3 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

import { motion } from "framer-motion";

function Comment({ authorId, title, content, author, since }) {
  // animation variant
  const comment = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: "100vh" },
  };

  const [isMyComment, setIsMyComment] = useState();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    console.log("authorId", authorId);
    console.log("userId", userId);

    // check if authorId and userId match
    setIsMyComment(authorId === userId);
  }, []);

  return (
    <motion.div
      className="bg-white relative h-auto w-[90%] md:w-[80%] mx-auto rounded-md flex text-left pt-7 pr-4 md:pr-5 pb-5 shadow-lg mb-5"
      key="comment"
      initial="hidden"
      animate="visible"
      variants={comment}
    >
      <div className="min-w-[60px] md:min-w-[67px]">
        <LikeDislike number={20} />
      </div>
      <main className="flex flex-col w-full">
        <h1 className="text-base md:text-lg font-medium">{title}</h1>
        <p className="text-sm md:text-base mt-1 text-gray-600">{content}</p>
        <div className="w-full h-[1px] bg-gray-300 rounded mt-3"></div>
        {/* details about post */}
        <div className="flex justify-between text-xs items-center mt-2">
          <div className="flex items-center gap-3">
            <ProfilePicture />
            <p className="w-[155px] whitespace-nowrap overflow-hidden text-ellipsis">
              Posted by <span className="text-primary-blue">{author}</span>
            </p>
          </div>
          {/* first of all 'since' returns a data; the date is converted to a string so as to properly
          use the new Date func to convert to proper date string in which it can be used in 
          timeSince func */}
          <p className="text-gray-600 whitespace-nowrap">
            {timeSince(new Date(`${since}`))}
          </p>
        </div>
        {/* Edit and delete button shown based on if the comment belongs to the user => authorId and userId match*/}
        {isMyComment && (
          <div className="flex gap-3 absolute top-2 right-3 ">
            <button
              className="bg-primary-blue border border-primary-blue rounded px-3 py-1 hover:bg-transparent 
          text-white hover:text-primary-blue"
            >
              <FiEdit3 size={18} className="" />
            </button>
            <button
              className="bg-red-700 border border-red-700 rounded px-3 py-1 hover:bg-transparent 
          text-white hover:text-red-700"
            >
              <MdDelete size={18} />
            </button>
          </div>
        )}
      </main>
    </motion.div>
  );
}

export default Comment;
