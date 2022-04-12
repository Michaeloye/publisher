import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function QuickPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [submit, setSubmit] = useState(false);
  useEffect(() => {
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
        console.log(res.data);
        setTitle("");
        setContent("");
        toast.success("Post added 🚀!", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        });
      })
      .catch((err) => console.log(err.message));
    setSubmit(false);
  }, [submit]);
  return (
    <form
      className="md:w-3/4 flex flex-col items-center gap-3"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmit(true);
      }}
    >
      <p className="text-lg font-semibold">Quick Upload</p>
      <input
        type="text"
        name="topic"
        placeholder="title"
        autoComplete="off"
        spellCheck="false"
        value={title}
        className="w-full h-8 md:h-9 px-9 py-1 rounded-full bg-white text-sm focus:outline-none lg:text-base inner shadow-inner"
        style={{
          "--tw-shadow": "inset 0 2px 4px 0 rgb(0 0 0 / 0.35)",
          "--tw-shadow-colored": "inset 0 2px 4px 0 var(--tw-shadow-color)",
          boxShadow:
            "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
        }}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        type="text"
        name="topic"
        placeholder="content"
        autoComplete="off"
        spellCheck="false"
        value={content}
        className="w-full h-8 md:h-9 px-9 py-1 rounded-lg bg-white text-sm focus:outline-none lg:text-base inner shadow-inner"
        style={{
          "--tw-shadow": "inset 0 2px 4px 0 rgb(0 0 0 / 0.35)",
          "--tw-shadow-colored": "inset 0 2px 4px 0 var(--tw-shadow-color)",
          boxShadow:
            "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
        }}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button
        type="submit"
        className="bg-primary-blue rounded-full h-12 w-40 flex justify-center items-center text-white font-semibold"
      >
        Post
      </button>
      {/* <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      /> */}
      <ToastContainer />
    </form>
  );
}

export default QuickPost;
