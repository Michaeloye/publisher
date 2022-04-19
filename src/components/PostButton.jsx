import React from "react";

import { motion } from "framer-motion";

function PostButton() {
  const postButton = {
    whileHover: { scale: 0.98 },
    whileTap: { scale: 0.98 },
  };

  return (
    <motion.button
      type="submit"
      className="bg-primary-blue rounded-full h-12 w-40 flex justify-center items-center text-white font-semibold bg-opacity-80"
      key="post-button"
      whileHover="whileHover"
      whileTap="whileTap"
      variants={postButton}
    >
      Post
    </motion.button>
  );
}

export default PostButton;
