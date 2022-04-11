import React, { useState, useEffect } from "react";
import Comment from "../Comment/Comment";
import ProfileDetails from "../ProfileDetails";

function ProfileSection() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("name");
    setUserName(name);
    return () => {
      null;
    };
  }, []);

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
        <p className="text-left ml-20 md:ml-32 font-semibold mt-3 mb-3">
          Latest posts
        </p>
        <Comment
          title="lorem ispium"
          description="
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vero esse a eligendi, cum accusamus debitis consequatur fugit saepe veritatis atque? Exercitationem, esse tempora mollitia dignissimos minus illo omnis quidem?
    "
          author="andrew neil"
        />
        <Comment
          title="lorem ispium"
          description="
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vero esse a eligendi, cum accusamus debitis consequatur fugit saepe veritatis atque? Exercitationem, esse tempora mollitia dignissimos minus illo omnis quidem?
  "
          author="andrew neil"
        />
        <Comment
          title="lorem ispium"
          description="
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vero esse a eligendi, cum accusamus debitis consequatur fugit saepe veritatis atque? Exercitationem, esse tempora mollitia dignissimos minus illo omnis quidem?
  "
          author="andrew neil"
        />
        <Comment
          title="lorem ispium"
          description="
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vero esse a eligendi, cum accusamus debitis consequatur fugit saepe veritatis atque? Exercitationem, esse tempora mollitia dignissimos minus illo omnis quidem?
  "
          author="andrew neil"
        />
        <Comment
          title="lorem ispium"
          description="
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vero esse a eligendi, cum accusamus debitis consequatur fugit saepe veritatis atque? Exercitationem, esse tempora mollitia dignissimos minus illo omnis quidem?
  "
          author="andrew neil"
        />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default ProfileSection;
