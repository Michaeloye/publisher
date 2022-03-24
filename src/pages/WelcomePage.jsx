import React from "react";
import StartTopic from "../components/StartTopic";

function WelcomePage() {
  return (
    <main className="flex flex-col md:flex-row">
      <div className="flex flex-col items-center justify-center mt-5 text-left">
        <StartTopic />
        <div className="px-4 md:px-0">
          <h1 className="text-xl font-semibold">
            Dive into a network of Communities
          </h1>
          <p>
            Discuss any topic, dive into people's interests, hobbies, and
            passion.
          </p>
        </div>
      </div>
      <div></div>
    </main>
  );
}

export default WelcomePage;
