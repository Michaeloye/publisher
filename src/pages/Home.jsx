import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import BottomNav from "../components/BottomNav/BottomNav";
import CommentSection from "../components/CommentSection/CommentSection";
import StartTopicModal from "../components/Modal/StartTopicModal";
import OtherInfo from "../components/OtherInfo/OtherInfo";
import SideNav from "../components/SideNav/SideNav";
import StartTopic from "../components/StartTopic";
import useScreensize from "../hooks/useScreensize";

function Home() {
  const [smallScreen, setSmallScreen] = useState("");
  const [startTopicModalOpen, setStartTopicModalOpen] = useState(false);
  const { width } = useScreensize();

  const handleStartTopicModal = (state) => {
    setStartTopicModalOpen(state);
  };

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
    if (token === null) {
      window.location.href = "/#";
    } else {
      // verify token here
    }
  }, []);

  return (
    <div className="md:flex md:justify-around">
      {/* nav */}
      {smallScreen ? <BottomNav /> : <SideNav />}

      {/* content */}
      <CommentSection />

      {/* modal */}
      {/* Animate presence for animation */}
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {startTopicModalOpen && (
          <StartTopicModal handleClose={handleStartTopicModal} />
        )}
      </AnimatePresence>

      {smallScreen ? (
        <StartTopic onClick={() => handleStartTopicModal(true)} />
      ) : (
        ""
      )}

      {/* other */}
      {smallScreen ? (
        ""
      ) : (
        <OtherInfo onClick={() => handleStartTopicModal(true)} />
      )}
    </div>
  );
}

export default Home;
