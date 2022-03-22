import { useState, useEffect } from "react";
import { IoMdBulb } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { MdExplore, MdInsertComment } from "react-icons/md";

const iconList = {
  1: <IoHome size={25} />,
  2: <MdExplore size={25} />,
  3: <IoMdBulb size={25} />,
  4: <MdInsertComment size={25} />,
};
function NavElement({ iconNumber, text, active }) {
  return (
    <div
      className={
        "lg:flex lg:justify-center lg:gap-3 ml-10 cursor-pointer " +
        (active ? "text-primary-blue" : "text-gray-400")
      }
    >
      {iconList[iconNumber]}
      <p className="text-lg font-semibold">{text}</p>
    </div>
  );
}

export default NavElement;
