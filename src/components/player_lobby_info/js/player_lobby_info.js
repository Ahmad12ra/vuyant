import "../css/player_lobby_info.css";
export default function PlayerLobbyInfo(props) {
  return (
    <div className="player-info-container">
      <div className="top-info-inner-container">
        <div className="player-profile-img">
        {props.userAvatar}
        </div>
        <div className="after-player-profile-content">
          <div className="player-inner-state">{props.state}</div>
          <div className="player-inner-name">{props.username}</div>
        </div>
      </div>
      <div className="bottom-player-info-main-container">
        <div className="player-looby-rank">
          {props.userRank}
        </div>
        <div className="player-skin-lobby">
          {props.userCustume}
        </div>
        <div className="player-lobby-level">
          Lvl <span>{props.level}</span>
        </div>
      </div>
    </div>
  );
}
