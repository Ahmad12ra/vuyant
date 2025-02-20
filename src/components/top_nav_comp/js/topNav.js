import "../css/topNav.css";
import { useNavigate } from "react-router-dom";
import VerantsElement from "../../verants_comp/js/verants.js";
import { useRef, useEffect } from "react";
import hoverAudio from "../../hover_audio_func/hover_audio_func.js";
import clickAudio from "../../click_audio_func/click_audio_func.js";
function TopNav(props) {

  const navHome = useNavigate();

  const topNavMainContainer = useRef(null);

  useEffect(() => {
    // topNavMainContainer.current.children.forEach((res) => {
    //   console.log(res)
    // })
    Array.from(topNavMainContainer.current.children).forEach((el) => {
      
      if (el.classList.contains("top-nav-active-option")) {
        return;
      } else {
        el.onmouseover = () => {
          hoverAudio();
        };
  
  
        el.onclick = () => clickAudio();
      }

    })
  },[])

  return (
    <>
      
        <div className="top-home-nav-bar">
          <div ref={topNavMainContainer} className="top-nav-home-options">
            <div className={"top-nav-option " + (props.home ? "top-nav-active-option" : "")} onClick={() => navHome("/")}>Home</div>
            <div className={"top-nav-option " + (props.shop ? "top-nav-active-option" : "")} onClick={() => navHome("/shop")}>Shop</div>
            <div className={"top-nav-option v-pass-top-nav-text" + (props.vPass ? "top-nav-active-option " : "")} onClick={() => navHome("/vPass")}> V-Pass</div>
            <div className={"top-nav-option " + (props.skin ? "top-nav-active-option" : "")} onClick={() => navHome("/skin")}>Skin</div>
            <div className={"top-nav-option " + (props.rank ? "top-nav-active-option" : "")} onClick={() => navHome("/rank")}>Rank</div>
            <div className={"top-nav-option " + (props.verants ? "top-nav-active-option" : "")} onClick={() => navHome("/verants")}>Verants</div>
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