import React from "react";
import { BiSearch } from "react-icons/bi";
function SearchBar() {
  return (
    <div className="relative w-1/2 md:w-1/3">
      <input
        type="text"
        id="search-input"
        name="search-input"
        placeholder="search publisher"
        autoComplete="off"
        spellCheck="false"
        className="w-full h-8 md:h-9 px-9 py-1 rounded-full bg-primary-gray text-sm focus:outline-none md:text-base"
        // className="w-60 md:w-96 pl-12 px-5 py-2 rounded-full inner shadow-inner"
        // style={{
        //   "--tw-shadow": "inset 0 2px 4px 0 rgb(0 0 0 / 0.35)",
        //   "--tw-shadow-colored": "inset 0 2px 4px 0 var(--tw-shadow-color)",
        //   boxShadow:
        //     "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
        // }}
      />
      <div className="absolute top-[25%] left-2 text-gray-400">
        <BiSearch size={20} />
      </div>
    </div>
  );
}

export default SearchBar;
