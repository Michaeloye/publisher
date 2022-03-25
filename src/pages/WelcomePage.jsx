import React from "react";
import LoginOrSignup from "../components/LoginOrSignup";
import StartTopic from "../components/StartTopic";
import talk from "../assets/talk.png";
import Comment from "../components/Comment/Comment";

function WelcomePage() {
  return (
    <main className="flex flex-col md:flex-row h-screen justify-start items-start overflow-y-scroll">
      <div className="flex flex-col items-center justify-center mt-5 text-left md:w-1/2">
        <StartTopic />
        <div className="px-4 md:px-0 mt-3 ">
          <h1 className="text-xl font-semibold">
            Dive into a network of Communities
          </h1>
          <p>
            Discuss any topic, dive into people's interests, hobbies, and
            passion.
          </p>
        </div>
        <div className="flex gap-3 mt-5">
          <LoginOrSignup text={"Login"} />
          <LoginOrSignup text={"Sign Up"} />
        </div>
        <img src={talk} alt="two people talking" className="scale-75 " />
      </div>
      <div className="mt-10 md:w-3/4">
        <p className="text-left font-semibold ml-10 md:ml-20 mb-4">
          Popular posts
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
      </div>
    </main>
  );
}

export default WelcomePage;
