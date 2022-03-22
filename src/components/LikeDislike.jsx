import { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

function LikeDislike({ number }) {
  // the below state is used to toggle the like or dislike button
  const [like, setLike] = useState(true);
  const [dislike, setDislike] = useState(true);
  const [vote, setVote] = useState(number);
  return (
    <div className="flex flex-col items-center gap-1 cursor-pointer">
      <FaArrowUp
        color={like ? "gray" : "#1a62dc"}
        size={20}
        onClick={() => {
          setLike(false);
          setDislike(true);
          setVote(number + 1);
        }}
      />
      {/* It is necessary that that the number color is the color of like or dislike */}
      <p className="text-gray-500 text-sm">{vote}</p>
      <FaArrowDown
        color={dislike ? "gray" : "red"}
        size={20}
        onClick={() => {
          setDislike(false);
          setLike(true);
          setVote(number - 1);
        }}
      />
    </div>
  );
}

export default LikeDislike;
