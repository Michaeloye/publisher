import { useState, useEffect } from "react";
import Comment from "../Comment/Comment";
import axios from "axios";

function CommentSection() {
  const [posts, setPosts] = useState([]);
  // be sure if should only fetch comments on mount
  useEffect(() => {
    axios
      .get("https://mikepostapp.herokuapp.com/feed/posts")
      .then((res) => setPosts(res.data.posts))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div
      className="bg-primary-gray w-full h-screen overflow-y-scroll"
      id="comment-section"
    >
      {/* The above styling is what enalbes the center page to be scrollable. The scroll bar
      is invisible because of the styling in index.css #comment-section */}
      <div>
        <br />
        {posts.map((post) => {
          return (
            <Comment
              key={post._id}
              title={post.title}
              content={post.content}
              author={post.creator.name}
              since={post.createAt}
            />
          );
        })}
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default CommentSection;
