import { useState, useEffect } from "react";
import BottomNav from "../components/BottomNav/BottomNav";
import ProfileSection from "../components/ProfileSection/ProfileSection";
import OtherInfo from "../components/OtherInfo/OtherInfo";
import SideNav from "../components/SideNav/SideNav";
import useScreensize from "../hooks/useScreensize";

function Profile() {
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
    <div className="md:flex md:justify-around">
      {smallScreen ? <BottomNav /> : <SideNav />}
      <ProfileSection />
      {smallScreen ? "" : <OtherInfo />}
    </div>
  );
}

export default Profile;
