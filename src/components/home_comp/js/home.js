import "../css/home.css";
import TopNav from "../../top_nav_comp/js/topNav.js";
import Challenges from "../../challenges_comp/js/challenges.js";
import StartButton from "../../start_button_comp/js/startButton.js";
import ChatComp from "../../chat_comp/js/chatComp.js";
import LobbyUsers from "../../lobby_users/js/lobby.js";
export default function Home() {
  return (
    <div className="home-element-main-container">
      <TopNav home={true} />
      <Challenges />
      <StartButton />
      <ChatComp />
      <LobbyUsers />
    </div>
  );
}
