import "./App.css";
import Header from "./components/Header";
import OtherInfo from "./components/OtherInfo";
import SideNav from "./components/SideNav/SideNav";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App bg-primary-gray h-screen overflow-y-hidden">
      {/* There is a link between App having a viewport height and overflow of hidden this is so 
      that while the entire screen remains unscrollable the stylings applied to Home enalbes 
      only Home that is the center page scrollable */}
      <Header />
      <div className="flex justify-around">
        <SideNav />
        <Home />
        <OtherInfo />
      </div>
    </div>
  );
}

export default App;
