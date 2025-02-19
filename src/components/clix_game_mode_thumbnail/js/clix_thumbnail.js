import "../../ajax_game_mode_thumbnail/css/ajaxGameThumb.css";
export default function ClixGame(props) {
  return (
    <div style={{scale: props.scale}} className="clix-game-main-container">
        <div className="clix-game-circle clix-game-circle1"></div>
        <div className="clix-game-circle clix-game-circle2"></div>
        <div className="clix-game-circle clix-game-circle3"></div>
        <div className="clix-game-circle clix-game-circle4"></div>
        <div className="clix-game-circle clix-game-circle5"></div>
        <div className="clix-game-circle clix-game-circle6"></div>
    </div>
  );
}