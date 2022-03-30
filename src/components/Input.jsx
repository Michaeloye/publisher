import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { GrMail } from "react-icons/gr";

const Icons = {
  1: <FaUser className="absolute top-2 text-gray-300 left-3 " />,
  2: <GrMail className="absolute top-2 text-gray-300 left-3 " />,
  3: <RiLockPasswordFill className="absolute top-2 text-gray-300 left-3 " />,
};
function Input({ icon, type, name, placeHolder, changeInput }) {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        placeholder={placeHolder}
        autoComplete="off"
        spellCheck="false"
        className="h-10 md:h-9 px-9 py-1 rounded-full bg-white text-sm focus:outline-none lg:text-base border border-gray-600 shadow-sm text-gray-700"
        onChange={changeInput}
      />
      {Icons[icon]}
    </div>
  );
}

export default Input;
