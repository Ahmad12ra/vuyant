import "../css/lobby.css";
import PlayerInfo from "../../player_lobby_info/js/player_lobby_info.js"
export default function LobbyUsers() {
  return (
    <div className="lobby-users-main-container">
      <div className="player-lobby-stand player1-stand"></div>
      <div className="player-lobby-stand player2-stand"></div>
      <div className="player-lobby-stand player3-stand">
        <PlayerInfo state="Online" username="Ahmed12ra" userRank={<i class="fa-solid fa-shield"></i>} userCustume={<i class="fa-solid fa-user"></i>} level="19"/>
      </div>
      <div className="player-lobby-stand player4-stand"></div>
      <div className="player-lobby-stand player5-stand"></div>
    </div>
  );
}
