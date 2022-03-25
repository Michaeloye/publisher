import React from "react";
import LikeDislike from "../LikeDislike";
import ProfilePicture from "../ProfilePicture";
import { FaRegCommentDots } from "react-icons/fa";

function Comment({ title, description, author }) {
  return (
    <div className="bg-white h-auto w-[80%] mx-auto rounded-md flex text-left pt-7 pr-4 md:pr-5 pb-5 justify-around shadow-lg mb-5">
      <div className="min-w-[60px] md:min-w-[67px]">
        <LikeDislike number={20} />
      </div>
      <main className="flex flex-col">
        <h1 className="text-base md:text-lg font-medium">{title}</h1>
        <p className="text-sm md:text-base mt-1 text-gray-600">{description}</p>
        <div className="w-full h-[1px] bg-gray-300 rounded mt-3"></div>
        {/* details abou post */}
        <div className="flex justify-between text-xs items-center mt-2">
          <div className="flex items-center gap-3">
            <ProfilePicture />
            <p>
              Posted by <span className="text-primary-blue">{author}</span>
            </p>
          </div>
          <p className="text-gray-600">12min ago</p>
          <div className="flex flex-row items-center gap-1 text-gray-600">
            <FaRegCommentDots size={20} />
            <p>220</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Comment;
