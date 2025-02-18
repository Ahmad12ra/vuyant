import "../css/clixGame.css";
export default function ClixGame(props) {
  return (
    <div style={{scale: props.scale}} className="clix-game-main-container">
        <div className="clix-game-circle clix-game-circle1">U</div>
        <div className="clix-game-circle clix-game-circle2">Y</div>
        <div className="clix-game-circle clix-game-circle3">A</div>
        <div className="clix-game-circle clix-game-circle4">N</div>
        <div className="clix-game-circle clix-game-circle5">T</div>
        <div className="clix-game-circle clix-game-circle6">V</div>
    </div>
  );
}
