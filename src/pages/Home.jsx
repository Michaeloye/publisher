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
  }, [width]);

  // if user is not logged in redirect to landing page
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    if (token === null) {
      window.location.href = "/";
    } else {
      // verify token here
    }
  }, []);

  return (
    <div className="md:flex md:justify-around">
      {smallScreen ? <BottomNav /> : <SideNav />}
      <CommentSection />
      {smallScreen ? "" : <OtherInfo />}
    </div>
  );
}

export default Home;
