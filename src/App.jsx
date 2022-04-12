import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Header from "./components/Header";
import useScreensize from "./hooks/useScreensize";
import Home from "./pages/Home";
import axios from "axios";
import WelcomePage from "./pages/WelcomePage";
import Profile from "./pages/Profile";

function App() {
  const { width } = useScreensize();

  // useEffect(() => {
  //   axios
  //     .get("https://mikepostapp.herokuapp.com/feed/posts")
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err.message));
  //   return () => {
  //     null;
  //   };
  // }, []);
  return (
    <div className="App bg-primary-gray h-screen overflow-y-hidden">
      <HashRouter>
        {/* There is a link between App having a viewport height and overflow of hidden this is so 
      that while the entire screen remains unscrollable the stylings applied to CommentSection enalbes 
      only CommentSection that is the center page scrollable */}

        <Header />
        <Routes>
          <Route exact path="/" element={<WelcomePage />} />
          <Route exact path="/feed" element={<Home />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
