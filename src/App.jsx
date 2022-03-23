import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import OtherInfo from "./components/OtherInfo/OtherInfo";
import SideNav from "./components/SideNav/SideNav";
import useScreensize from "./hooks/useScreensize";
import Home from "./pages/Home";
import BottomNav from "./components/BottomNav/BottomNav";
import axios from "axios";

function App() {
  const [smallScreen, setSmallScreen] = useState("");
  const { width } = useScreensize();

  useEffect(() => {
    if (width >= 640) {
      setSmallScreen(false);
    } else {
      setSmallScreen(true);
    }
    axios
      .get("https://mikepostapp.herokuapp.com/feed/posts")
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.message));
    return () => {
      null;
    };
  }, [width]);
  return (
    <div className="App bg-primary-gray h-screen overflow-y-hidden">
      {/* There is a link between App having a viewport height and overflow of hidden this is so 
      that while the entire screen remains unscrollable the stylings applied to Home enalbes 
      only Home that is the center page scrollable */}
      <Header />
      <div className="md:flex md:justify-around">
        {smallScreen ? <BottomNav /> : <SideNav />}
        <Home />
        {smallScreen ? "" : <OtherInfo />}
      </div>
    </div>
  );
}

export default App;
