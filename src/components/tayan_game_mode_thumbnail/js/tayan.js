import "../css/tayan.css";
export default function ClixGame(props) {
  return (
    <div style={{scale: props.scale}} className="tayan-game-main-container">
        <div className="tayan-details-thumbnail">
            <div className="tayan-thumbnail-score"><span className="tayan-thumbnail-detail-name">score:</span><span className="tayan-thumbnail-detail-number">2,600</span></div>
            <div className="tayan-thumbnail-place"><span>place:</span>1</div>
        </div>
        <div className="tayan-text-thumbnail"></div>
    </div>
  );
}
