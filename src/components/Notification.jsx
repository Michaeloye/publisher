import { IoNotifications } from "react-icons/io5";

function Notification() {
  return (
    <div>
      <div className="relative">
        <IoNotifications size={22} />
        <div className="h-[6px] w-[6px] bg-red-500 rounded-full absolute top-0 right-0"></div>
      </div>
    </div>
  );
}

export default Notification;
