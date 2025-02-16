import "../css/home.css";
import TopNav from "../../top_nav_comp/js/topNav.js";
import Challenges from "../../challenges_comp/js/challenges.js";
import StartButton from "../../start_button_comp/js/startButton.js";
import ChatComp from "../../chat_comp/js/chatComp.js";
function Home() {
  return (
    <div className="home-element-main-container">
      <TopNav />
      <Challenges />
      <StartButton />
      <ChatComp />
    </div>
  );
}

export default Home;
