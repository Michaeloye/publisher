import { IoMdBulb } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { MdExplore, MdInsertComment } from "react-icons/md";
import { Link } from "react-router-dom";

const iconList = {
  1: <IoHome size={25} />,
  2: <MdExplore size={25} />,
  3: <IoMdBulb size={25} />,
  4: <MdInsertComment size={25} />,
};
const navList = {
  1: "/feed",
  2: "/explore",
  3: "/topics",
  4: "/mycomments",
};
function NavElement({ iconNumber, text, active }) {
  return (
    <Link
      to={navList[iconNumber]}
      className={
        "lg:flex lg:justify-center lg:gap-3 lg:ml-10 cursor-pointer " +
        (active ? "text-primary-blue" : "text-gray-400")
      }
    >
      {iconList[iconNumber]}
      <p className="md:hidden lg:block lg:text-lg lg:font-semibold ">{text}</p>
    </Link>
  );
}

export default NavElement;
