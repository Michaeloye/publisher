import { IoIosBookmarks } from "react-icons/io";

function Logo() {
  return (
    <div className="flex gap-2 items-center">
      <IoIosBookmarks color="#1a62dc" size={30} />
      <p className="text-lg md:text-xl font-medium">
        <span className="text-primary-blue">Pub</span>lisher
      </p>
    </div>
  );
}

export default Logo;
