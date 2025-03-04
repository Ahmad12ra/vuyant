import "../css/topNav.css";
import { useNavigate } from "react-router-dom";
import VerantsElement from "../../verants_comp/js/verants.js";
import { useRef, useEffect, useState, useContext } from "react";
import hoverAudio from "../../hover_audio_func/hover_audio_func.js";
import clickAudio from "../../click_audio_func/click_audio_func.js";
import SideBar from "../../side_bar/js/side_bar.js";
import { UseContextValues } from "../../../App.js";
import addCommaToNum from "../../addCommaToNum.js";
export default function TopNav(props) {
  const navHome = useNavigate();
  const topNavBurgerIcon = useRef(null);
  const topNavMainContainer = useRef(null);
  let [showSideBar, setShowSideBar] = useState(false);
  let [sideBarTrans, setSidebarTrans] = useState("-100%");
  const contextValues = useContext(UseContextValues);

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

      topNavBurgerIcon.current.onmouseover = () => {
        hoverAudio();
      };

      topNavBurgerIcon.current.onclick = () => {
        clickAudio();
        setShowSideBar(true);
      };
    });
  }, []);

  function backShadowFunc() {
    setSidebarTrans("-100%");
    setTimeout(() => setShowSideBar(false),200)
  }

  return (
    <div>
      <div className="top-home-nav-bar">
        <div ref={topNavMainContainer} className="top-nav-home-options">
          <div
            className={
              "top-nav-option " + (props.home ? "top-nav-active-option" : "")
            }
            onClick={() => navHome("/")}
          >
            Home
          </div>
          <div
            className={
              "top-nav-option " + (props.shop ? "top-nav-active-option" : "")
            }
            onClick={() => navHome("/shop")}
          >
            Shop
          </div>
          <div
            className={
              "top-nav-option v-pass-top-nav-text " +
              (props.vPass ? "top-nav-active-option " : "")
            }
            onClick={() => navHome("/vPass")}
          >
            {" "}
            V-Pass
          </div>
          <div
            className={
              "top-nav-option " + (props.skin ? "top-nav-active-option" : "")
            }
            onClick={() => navHome("/skin")}
          >
            Skin
          </div>
          <div
            className={
              "top-nav-option " + (props.rank ? "top-nav-active-option" : "")
            }
            onClick={() => navHome("/rank")}
          >
            Rank
          </div>
          <div
            className={
              "top-nav-option " + (props.verants ? "top-nav-active-option" : "")
            }
            onClick={() => navHome("/verants")}
          >
            Verants
          </div>
        </div>
        <div className="verants-container">
          <div className="verants-all-container">
            <div className="home-element-verants-symbol">
              <VerantsElement scale="0.34" />
            </div>
            <div className="verants-count">{addCommaToNum(contextValues.userVerantsAmount)}</div>
          </div>
        </div>
        <div ref={topNavBurgerIcon} className="more-options-bars-icon">
          <div
            style={{
              position: "absolute",
              left: "0",
              top: "0",
              width: "100%",
              height: "100%",
            }}
          ></div>
          <i class="fa-solid fa-bars"></i>
        </div>
      </div>

        {(function () {
          if (showSideBar) {
            setTimeout(() => setSidebarTrans("0px"), 0)
            return (
              <>
                <div
                  onClick={() => {backShadowFunc()}}
                  className="back-shadow-side-bar"
                ></div>
                <div style={{ right: sideBarTrans }} className="nav-sideBar">
                  <SideBar />
                </div>
              </>
            );
          }
        }())}
    </div>
  );
}
