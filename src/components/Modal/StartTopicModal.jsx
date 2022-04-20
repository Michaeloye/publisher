import { useState } from "react";

import close from "../../assets/close.svg";
import Backdrop from "../Backdrop";
import Loader from "../Loader/Loader";
import PostButton from "../PostButton";

import { toast } from "react-toastify";
import { motion } from "framer-motion";

import axios from "axios";

import "react-toastify/dist/ReactToastify.css";

toast.configure();

export default function StartTopicModal({
  authorId,
  postId,
  prevTitle,
  prevContent,
  isEdit,
  handleClose,
}) {
  // animation variant
  const modal = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: "100vh" },
  };

  const [loading, setLoading] = useState(false);

  // the user is to see the text to be edited so if isEdit show the current post title and content
  const [title, setTitle] = useState(isEdit ? prevTitle : "");
  const [content, setContent] = useState(isEdit ? prevContent : "");

  // submit comment
  function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    axios
      .post(
        "https://mikepostapp.herokuapp.com/feed/post",
        {
          title: title,
          content: content,
        },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        setTitle("");
        setContent("");
        setLoading(false);
        handleClose(false);

        // toastify message
        toast.success("Post added 🚀!", {
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
  }

  // edit comment
  function editComment(e) {
    setLoading(true);
    e.preventDefault();

    const userId = localStorage.getItem("userId");

    // the logged in user has to be verified as the owner of the post
    // the edit endpoint makes use of .patch method.
    // Just like normal post endpoint the takes an additional url endpoint ${postId}
    // gets access to that post and allows the user to edit it by sending a new title and content.
    if (authorId === userId) {
      axios
        .patch(
          `https://mikepostapp.herokuapp.com/feed/post/${postId}`,
          {
            title: title,
            content: content,
          },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          setTitle("");
          setContent("");
          setLoading(false);
          handleClose(false);

          // toastify message
          toast.success("Edited post 🚀!", {
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
  return (
    <Backdrop>
      <motion.div
        className="relative mx-auto min-h-[300px] w-11/12 md:w-1/2 lg:w-1/3 bg-white flex flex-col items-center justify-center rounded-2xl gap-2 md:gap-3 py-7"
        onClick={(e) => e.stopPropagation()}
        key="start-topic-modal"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={modal}
      >
        <img
          src={close}
          onClick={() => handleClose(false)}
          className="h-7 w-7 absolute cursor-pointer -top-8 right-0 md:-right-7"
        />
        <h1 className="md:text-xl font-semibold -mt-3">
          {isEdit ? "Edit post" : "Make post"}
        </h1>

        <form
          className="flex flex-col items-center w-3/4 gap-5"
          onSubmit={(e) => (isEdit ? editComment(e) : handleSubmit(e))}
        >
          <input
            type="text"
            name="topic"
            placeholder="title"
            autoComplete="off"
            spellCheck="false"
            value={title}
            required={true}
            className="h-10 md:w-full md:h-9 px-5 py-1 rounded-full bg-white text-sm focus:outline-none lg:text-base border border-gray-600 shadow text-gray-700"
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            type="text"
            name="topic"
            placeholder="content"
            autoComplete="off"
            spellCheck="false"
            value={content}
            required={true}
            className="h-20 md:w-full md:min-h-[80px] px-5 py-1 rounded-lg bg-white text-sm focus:outline-none lg:text-base border border-gray-600 shadow text-gray-700"
            onChange={(e) => setContent(e.target.value)}
          />
          {loading && <Loader />}
          <PostButton placeholder={isEdit ? "Edit" : "Post"} />
        </form>
      </motion.div>
    </Backdrop>
  );
}
