import React from "react";
import Footer from "../Footer/Footer";
import QuickPost from "../QuickPost/QuickPost";
import StartTopic from "../StartTopic";
import TopTopics from "../TopTopics/TopTopics";

function OtherInfo() {
  return (
    <div
      className="bg-primary-gray md:w-1/3 lg:w-1/2 flex flex-col items-center gap-10 h-screen overflow-y-scroll overflow-x-hidden border-2"
      id="other-info"
    >
      <div className="mt-5">
        <StartTopic />
      </div>
      <TopTopics />
      <QuickPost />
      <Footer />
      <br />
      <br />
      <br />
    </div>
  );
}

export default OtherInfo;
