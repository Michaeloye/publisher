import { useState, useEffect } from "react";
import BottomNav from "../components/BottomNav/BottomNav";
import CommentSection from "../components/CommentSection/CommentSection";
import OtherInfo from "../components/OtherInfo/OtherInfo";
import SideNav from "../components/SideNav/SideNav";
import useScreensize from "../hooks/useScreensize";

function Home() {
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
      <CommentSection />
      {smallScreen ? "" : <OtherInfo />}
    </div>
  );
}

export default Home;
