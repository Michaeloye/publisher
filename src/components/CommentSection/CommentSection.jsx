import { useState, useEffect } from "react";
import Comment from "../Comment/Comment";
import axios from "axios";
import BasicLoader from "../Loader/BasicLoader";
import { AnimatePresence } from "framer-motion";

function CommentSection() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  // be sure if should only fetch comments on mount
  useEffect(() => {
    // reversing the array so as to be sorted in ascending order from recent to long ago
    axios
      .get("https://mikepostapp.herokuapp.com/feed/posts")
      .then((res) => {
        setPosts(res.data.posts.reverse());
        setLoading(false);
      })
      .catch((err) => console.log(err.message));
  });
  return (
    <div
      className="bg-primary-gray w-full h-screen overflow-y-scroll"
      id="comment-section"
    >
      {/* The above styling is what enalbes the center page to be scrollable. The scroll bar
      is invisible because of the styling in index.css #comment-section */}
      <div>
        <br />
        {loading && (
          <div className="flex items-center justify-center">
            <BasicLoader />
          </div>
        )}
        <AnimatePresence initial={false}>
          {posts.map((post) => {
            return (
              <Comment
                key={post._id}
                authorId={post.creator._id}
                postId={post._id}
                title={post.title}
                content={post.content}
                author={post.creator.name}
                since={post.createAt}
              />
            );
          })}
        </AnimatePresence>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default CommentSection;
