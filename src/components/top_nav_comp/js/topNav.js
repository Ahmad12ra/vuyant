import "../css/topNav.css";
import VerantsElement from "../../verants_comp/js/verants.js";
function TopNav() {
  return (
    <>
      
        <div className="top-home-nav-bar">
          <div className="top-nav-home-options">
            <div className="top-nav-option">Home</div>
            <div className="top-nav-option">Shop</div>
            <div style={{width: "50px"}} className="top-nav-option">V-Pass</div>
            <div className="top-nav-option">Skin</div>
            <div className="top-nav-option">Rank</div>
            <div className="top-nav-option">Verants</div>
          </div>
          <div className="verants-container">
            <div className="verants-all-container">
              <div className="home-element-verants-symbol">
                <VerantsElement scale="0.34" />
              </div>
              <div className="verants-count">1,500</div>
            </div>
          </div>
          <div className="more-options-bars-icon">
            <i class="fa-solid fa-bars"></i>
          </div>
        </div>
      
    </>
  );
}

export default TopNav;