import { useState, useEffect } from "react";
import Backdrop from "../Backdrop";
import close from "../../assets/close.svg";
import axios from "axios";
import Loader from "../Loader/Loader";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

export default function StartTopicModal({ handleClose }) {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

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

  return (
    <Backdrop>
      <div
        className="relative mx-auto min-h-[300px] w-11/12 md:w-1/2 lg:w-1/3 bg-white flex flex-col items-center justify-center rounded-2xl gap-2 md:gap-3 py-7"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={close}
          onClick={() => handleClose(false)}
          className="h-7 w-7 absolute cursor-pointer -top-8 right-0 md:-right-7"
        />
        <h1 className="md:text-xl font-semibold -mt-3">Make post</h1>

        <form
          className="flex flex-col items-center w-3/4 gap-5"
          onSubmit={(e) => handleSubmit(e)}
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
            className="h-10 md:w-full md:h-9 md:min-h-[30px] px-5 py-1 rounded-lg bg-white text-sm focus:outline-none lg:text-base border border-gray-600 shadow text-gray-700"
            onChange={(e) => setContent(e.target.value)}
          />
          {loading && <Loader />}
          <button
            type="submit"
            className="bg-primary-blue rounded-full h-12 w-40 mt-3 flex justify-center items-center text-white font-semibold"
          >
            Post
          </button>
        </form>
      </div>
    </Backdrop>
  );
}
