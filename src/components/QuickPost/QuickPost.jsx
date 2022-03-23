import React from "react";

function QuickPost() {
  return (
    <div className="md:w-3/4 flex flex-col items-center gap-3">
      <p className="text-lg font-semibold">Quick Upload</p>
      <input
        type="text"
        name="topic"
        placeholder="topic"
        autoComplete="off"
        spellCheck="false"
        className="w-full h-8 md:h-9 px-9 py-1 rounded-full bg-white text-sm focus:outline-none lg:text-base inner shadow-inner"
        style={{
          "--tw-shadow": "inset 0 2px 4px 0 rgb(0 0 0 / 0.35)",
          "--tw-shadow-colored": "inset 0 2px 4px 0 var(--tw-shadow-color)",
          boxShadow:
            "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
        }}
      />
      <textarea
        type="text"
        name="topic"
        placeholder="message"
        autoComplete="off"
        spellCheck="false"
        className="w-full h-8 md:h-9 px-9 py-1 rounded-lg bg-white text-sm focus:outline-none lg:text-base inner shadow-inner"
        style={{
          "--tw-shadow": "inset 0 2px 4px 0 rgb(0 0 0 / 0.35)",
          "--tw-shadow-colored": "inset 0 2px 4px 0 var(--tw-shadow-color)",
          boxShadow:
            "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
        }}
      ></textarea>
      <div className="bg-primary-blue rounded-full h-12 w-40 flex justify-center items-center text-white font-semibold">
        Post
      </div>
    </div>
  );
}

export default QuickPost;
