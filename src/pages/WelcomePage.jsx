import { useState, useEffect } from "react";
import LoginOrSignup from "../components/LoginOrSignup";
import StartTopic from "../components/StartTopic";
import talk from "../assets/talk.png";
import Comment from "../components/Comment/Comment";
import TopUsers from "../components/TopUsers/TopUsers";
import Footer from "../components/Footer/Footer";
import useScreensize from "../hooks/useScreensize";

function WelcomePage() {
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
    <main className="flex flex-col md:flex-row h-screen justify-start items-start overflow-y-scroll">
      {/* Image and Top users */}
      <div className="flex flex-col items-center justify-center mt-5 text-left md:w-1/2">
        <StartTopic />
        <div className="px-4 md:px-0 mt-3 ">
          <h1 className="text-xl font-semibold">
            Dive into a network of Communities
          </h1>
          <p>
            Discuss any topic, dive into people's interests, hobbies, and
            passion.
          </p>
        </div>
        <div className="flex gap-3 mt-5">
          <LoginOrSignup text={"Login"} />
          <LoginOrSignup text={"Sign Up"} />
        </div>
        <img src={talk} alt="two people talking" className="scale-75 " />
        <TopUsers />

        {/* If on small screen this footer won't be displayed */}
        {!smallScreen && (
          <div className="w-3/4 mt-16 lg:ml-24">
            <Footer />
          </div>
        )}
        <br />
        <br />
        <br />
      </div>

      {/* Comments */}
      <div className="md:mt-10 md:w-3/4 items-center justify-center">
        <p className="text-left font-semibold ml-10 md:ml-20 mb-4">
          Popular posts
        </p>
        <Comment
          title="lorem ispium"
          description="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vero esse a eligendi, cum accusamus debitis consequatur fugit saepe veritatis atque? Exercitationem, esse tempora mollitia dignissimos minus illo omnis quidem?
        "
          author="andrew neil"
        />
        <Comment
          title="lorem ispium"
          description="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vero esse a eligendi, cum accusamus debitis consequatur fugit saepe veritatis atque? Exercitationem, esse tempora mollitia dignissimos minus illo omnis quidem?
        "
          author="andrew neil"
        />
        <Comment
          title="lorem ispium"
          description="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vero esse a eligendi, cum accusamus debitis consequatur fugit saepe veritatis atque? Exercitationem, esse tempora mollitia dignissimos minus illo omnis quidem?
        "
          author="andrew neil"
        />
        <br />
        <br />
        {smallScreen && (
          <div className="w-3/4 mt-10 mx-auto">
            <Footer />
          </div>
        )}
        <br />
      </div>
    </main>
  );
}

export default WelcomePage;
