import React from "react";

function QuickPost() {
  return (
    <div className="md:w-3/4">
      <p className="text-lg font-semibold">Quick Upload</p>
      <input
        type="text"
        name="topic"
        placeholder="topic"
        autoComplete="off"
        spellCheck="false"
        className="w-full h-8 md:h-9 px-9 py-1 rounded-full bg-white text-sm focus:outline-none md:text-base inner shadow-inner"
        style={{
          "--tw-shadow": "inset 0 2px 4px 0 rgb(0 0 0 / 0.35)",
          "--tw-shadow-colored": "inset 0 2px 4px 0 var(--tw-shadow-color)",
          boxShadow:
            "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
        }}
      />
      <input type="textarea" />
    </div>
  );
}

export default QuickPost;
