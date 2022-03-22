import { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

function LikeDislike({ number }) {
  // the below state is used to toggle the like or dislike button
  const [like, setLike] = useState(true);
  const [dislike, setDislike] = useState(true);
  return (
    <div className="flex flex-col items-center gap-1">
      <FaArrowUp
        color={like ? "gray" : "#1a62dc"}
        size={20}
        onClick={() =>
          setLike((prevState) => setLike(!prevState), console.log(like))
        }
      />
      <p className="text-gray-500 text-sm">{number}</p>
      <FaArrowDown
        color="gray"
        size={20}
        onClick={() => console.log("hello")}
      />
    </div>
  );
}

export default LikeDislike;
