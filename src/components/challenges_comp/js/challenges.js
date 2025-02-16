import "../css/challenges.css";
export default function Challenges() {
  return (
    <>
        <div className="challenges-main-container">
            <div className="challenges-xp-lvl-progress">
                <div><span>560</span>XP</div>
                <div><span>2,000</span>XP</div>
            </div>
            <div className="xp-progress-bar">
                <div className="xp-inner-progress-bar"></div>
            </div>
            <div className="challenges-xp-lvl-progress">
                <div>Lvl <span>19</span></div>
                <div>Lvl <span>20</span></div>
            </div>
            <div className="challenges-clickable-main-container">
                <div className="top-chllenges-button-trans"></div>
                <span>Challenges</span>
            </div>
        </div>
    </>
  );
}