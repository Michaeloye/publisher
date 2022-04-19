import React, { useState, useEffect } from "react";
import Comment from "../Comment/Comment";
import ProfileDetails from "../ProfileDetails";
import BasicLoader from "../Loader/BasicLoader";
import axios from "axios";

function ProfileSection() {
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const name = localStorage.getItem("name");
    const userId = localStorage.getItem("userId");
    setUserName(name);
    setUserId(userId);
    return () => {
      null;
    };
  }, []);

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
      <ProfileDetails userName={userName} />
      {/* The above styling is what enalbes the center page to be scrollable. The scroll bar
  is invisible thanks to the styling in index.css #comment-section */}
      <div>
        <br />
        <p className="text-left ml-20 md:ml-28 font-semibold mt-3 mb-3">
          My Latest posts
        </p>
        {loading && (
          <div className="flex items-center justify-center">
            <BasicLoader />
          </div>
        )}
        {posts
          .filter((post) => post.creator._id === userId)
          .map((post) => {
            return (
              <Comment
                key={post._id}
                authorId={post.creator._id}
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

export default ProfileSection;
