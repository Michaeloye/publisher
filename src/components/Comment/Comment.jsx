import React, { useState, useEffect } from "react";

import timeSince from "../../utils/timeSince";

import LikeDislike from "../LikeDislike";
import ProfilePicture from "../ProfilePicture";

import { FiEdit3 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";
import StartTopicModal from "../Modal/StartTopicModal";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

function Comment({ postId, authorId, title, content, author, since }) {
  // animation variant
  const comment = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, scale: 0 },
  };

  // state
  const [isMyComment, setIsMyComment] = useState();
  const [startTopicModalOpen, setStartTopicModalOpen] = useState(false);

  const handleStartTopicModal = (state) => {
    setStartTopicModalOpen(state);
  };

  // delete comment
  function deleteComment() {
    const userId = localStorage.getItem("userId");

    // the logged in user has to be verified as the owner of the post
    // the delete endpoint makes use of .delet HTTP method.
    // Just like normal post endpoint the takes an additional url endpoint ${postId}
    // gets access to that post and allows the user to delete it.
    if (authorId === userId) {
      axios
        .delete(`https://mikepostapp.herokuapp.com/feed/post/${postId}`, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          // toastify message
          toast.success("Deleted post!", {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            closeButton: false,
          });
        })

        .catch((err) => console.log(err.message));
    } else {
      null;
    }
  }

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    // check if authorId and userId match
    setIsMyComment(authorId === userId);
  }, []);

  return (
    <>
      <motion.div
        className="bg-white relative h-auto w-[90%] md:w-[80%] mx-auto rounded-md flex text-left pt-7 pr-4 md:pr-5 pb-5 shadow-lg mb-5"
        key="comment"
        initial="hidden"
        animate="visible"
        exit="exit"
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
            <div className="flex gap-3 absolute top-1 right-3 ">
              <button
                className="bg-[#00007463] border border-primary-blue rounded px-2 py-[2px] hover:bg-transparent 
          text-white hover:text-primary-blue"
                onClick={() => setStartTopicModalOpen(true)}
              >
                <FiEdit3 size={15} />
              </button>

              <button
                className="bg-[#9d4747] border border-red-700 rounded px-2 py-[2px] hover:bg-transparent 
          text-white hover:text-red-700"
                onClick={() => deleteComment()}
              >
                <MdDelete size={15} />
              </button>
            </div>
          )}
        </main>
      </motion.div>

      {/* start topic modal is here because of ease of access to details about the current comment */}
      {/* modal */}
      {/* Animate presence for animation */}
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {startTopicModalOpen && (
          <StartTopicModal
            authorId={authorId}
            postId={postId}
            prevTitle={title}
            prevContent={content}
            isEdit={true}
            handleClose={handleStartTopicModal}
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default Comment;
