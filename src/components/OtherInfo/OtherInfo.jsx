import React from "react";
import QuickPost from "../QuickPost/QuickPost";
import StartTopic from "../StartTopic";
import TopTopics from "../TopTopics/TopTopics";

function OtherInfo() {
  return (
    <div className="bg-primary-gray md:w-1/3 lg:w-1/2 flex flex-col items-center gap-10">
      <div className="mt-5">
        <StartTopic />
      </div>
      <TopTopics />
      <QuickPost />
    </div>
  );
}

export default OtherInfo;
