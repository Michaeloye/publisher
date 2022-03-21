import { useState, useEffect } from "react";
import { IoIosBookmarks } from "react-icons/io";
import useScreensize from "../hooks/useScreensize";

function Logo() {
  const [smallScreen, setSmallScreen] = useState("");
  const { width } = useScreensize();

  useEffect(() => {
    if (width >= 640) {
      setSmallScreen(false);
    } else {
      setSmallScreen(true);
    }
    return () => {
      null;
    };
  }, [width]);

  return (
    <div className="flex gap-2 items-center">
      <IoIosBookmarks color="#1a62dc" size={30} />
      {/* Noticed that the logo text showing on small screen is not really nice so below instruection
      makes the text not to show on small screens: so when not on small screen show text with logo
      when on small screen do NOT show text*/}
      {!smallScreen ? (
        <p className="text-lg md:text-xl font-medium">
          <span className="text-primary-blue">Pub</span>lisher
        </p>
      ) : (
        ""
      )}
    </div>
  );
}

export default Logo;
