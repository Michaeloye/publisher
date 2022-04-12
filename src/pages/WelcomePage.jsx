import { useState, useEffect } from "react";
import LoginOrSignup from "../components/LoginOrSignup";
import StartTopic from "../components/StartTopic";
import talk from "../assets/talk.png";
import Comment from "../components/Comment/Comment";
import TopUsers from "../components/TopUsers/TopUsers";
import Footer from "../components/Footer/Footer";
import SignupModal from "../components/Modal/SignupModal";
import LoginModal from "../components/Modal/LoginModal";
import useScreensize from "../hooks/useScreensize";

function WelcomePage() {
  const [posts, setPosts] = useState([]);

  const [smallScreen, setSmallScreen] = useState("");
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const { width } = useScreensize();

  const handleSignupModal = (state) => {
    setSignupModalOpen(state);
    setLoginModalOpen(false);
  };
  const handleLoginModal = (state) => {
    setLoginModalOpen(state);
    setSignupModalOpen(false);
  };

  // check for small screen
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

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);
    // if token exists redirect to feed page
    if (token) {
      window.location.href = "/#/feed";
    } else {
      null;
    }
  }, []);

  useEffect(() => {
    axios
      .get("https://mikepostapp.herokuapp.com/feed/posts")
      .then((res) => setPosts(res.data.posts))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <main className="flex flex-col md:flex-row h-screen justify-start items-start overflow-y-scroll">
      {/* Modal */}
      {signupModalOpen && <SignupModal handleClose={handleSignupModal} />}
      {loginModalOpen && <LoginModal handleClose={handleLoginModal} />}

      {/* Image and Top users */}
      <div className="flex flex-col items-center justify-center mt-5 text-left md:w-1/2">
        <StartTopic />
        <div className="px-4 md:px-0 mt-3 md:ml-3 ">
          <h1 className="text-xl font-semibold">
            Dive into a network of Communities
          </h1>
          <p>
            Discuss any topic, dive into people's interests, hobbies, and
            passion.
          </p>
        </div>
        <div className="flex gap-3 mt-5">
          <LoginOrSignup
            text={"Login"}
            onClick={() => handleLoginModal(true)}
          />

          <LoginOrSignup
            text={"Sign Up"}
            onClick={() => handleSignupModal(true)}
          />
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

        {posts.slice(0, 5).map((post) => {
          return (
            <Comment
              key={post._id}
              title={post.title}
              content={post.content}
              author={post.creator.name}
              since={post.createAt}
            />
          );
        })}

        <br />
        <br />
        {smallScreen && (
          <div className="w-3/4 mt-10 mx-auto">
            <Footer />
            <br />
            <br />
            <br />
          </div>
        )}
        <br />
      </div>
    </main>
  );
}

export default WelcomePage;
