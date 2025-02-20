import "../css/tayan.css";
export default function TayanGame(props) {
  return (
    <div style={{scale: props.scale}} className="tayan-game-main-container">
        <div className="tayan-details-thumbnail">
            <div className="tayan-thumbnail-score"><span className="tayan-thumbnail-detail-name">SCORE: </span><span>2,600</span></div>
            <div className="tayan-thumbnail-place"><span className="tayan-thumbnail-detail-name">PLACE: </span><span>1</span><span className="rank-nth-adjust-thumbnail">st</span></div>
        </div>
        <div>
            <span className="corrected-text-tayan-thumbnail">
                The animal went to his{" "}
            </span>
            <span className="text-tayan-thumbnail">
                home, 193 is the number.<br/>
                $@;, sorry you can't say that..., Vuyant, verants,<br/>
                which is which. 200 verants? good deal. Lets start! 
            </span>
        </div>
    </div>
  );
}
