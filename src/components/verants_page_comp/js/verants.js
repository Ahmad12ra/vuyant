import clickAudio from "../../click_audio_func/click_audio_func";
import hoverAudio from "../../hover_audio_func/hover_audio_func";
import TopNav from "../../top_nav_comp/js/topNav";
import Verants from "../../verants_comp/js/verants";
import "../css/verants.css";
import { useEffect, useRef, useState } from "react";
export default function VerantsPage() {

  const verantsBuyMainContainer = useRef(null);

  function checkIfActive(e, func) {
    if (
      !(
        e.currentTarget.style.outlineColor === "var(--verants-main-color)"
      )
    ) {
      func();
    }
  }

  function buyVerantsClickFunc(e) {
    checkIfActive(e, clickAudio);
    Array.from(verantsBuyMainContainer.current.children).forEach((el) => {
      el.style.cssText = "";
      el.children[3].cssText = "";
    })
    e.currentTarget.style.cssText = "outline-color: var(--verants-main-color);";
    e.currentTarget.children[3].style.cssText = "background-color: var(--verants-main-color);";
  }

  return (
    <div className="verants-page-main-container">
      <TopNav verants={true} />
      <div ref={verantsBuyMainContainer} className="verants-page-container">
        <div
          onClick={(e) => buyVerantsClickFunc(e)}
          onMouseOver={(e) => {
            checkIfActive(e, hoverAudio);
          }}
          className="verants-buy-main-container"
        >
          <div className="verants-buy-overlay"></div>
          <div className="verants-buy-top-part-verants-number">
            <div className="verants-buy-icon-container"><div className="inner-veratns-buy-icon-container"><Verants /></div></div>
            <div className="veratns-buy-number-div">365</div>
          </div>
          <div className="verants-buy-middle-verants-icons-main-container">
            <div style={{transform: "scale(0.7)"}} className="part-verants-buy-inner-holder">
              <div className="verants-buy-middle-inner-icon" ><Verants /></div>
              <div className="verants-buy-middle-inner-icon" ><Verants /></div>
            </div>
            <div style={{transform: "scale(0.6)"}} className="part-verants-buy-inner-holder">
              <div className="verants-buy-middle-inner-icon" ><Verants /></div>
            </div>
          </div>
          <div className="verants-buy-bottom-verants-cost-main-container">
            <div className="inner-verants-cost">&euro;1.99</div>
          </div>
        </div>
        <div
          onClick={(e) => buyVerantsClickFunc(e)}
          onMouseOver={(e) => {
            checkIfActive(e, hoverAudio);
          }}
          className="verants-buy-main-container"
        >
          <div className="verants-buy-overlay"></div>
          <div className="verants-buy-top-part-verants-number">
            <div className="verants-buy-icon-container"><div className="inner-veratns-buy-icon-container"><Verants /></div></div>
            <div className="veratns-buy-number-div">800</div>
          </div>
          <div style={{transform: "translateY(29px)"}} className="verants-buy-middle-verants-icons-main-container">
            <div style={{transform: "scale(0.5)"}} className="part-verants-buy-inner-holder">
              <div className="verants-buy-middle-inner-icon" ><Verants /></div>
              <div className="verants-buy-middle-inner-icon" ><Verants /></div>
              <div className="verants-buy-middle-inner-icon" ><Verants /></div>
            </div>
            <div style={{transform: "scale(0.4) translateY(-40px)"}} className="part-verants-buy-inner-holder">
              <div className="verants-buy-middle-inner-icon" ><Verants /></div>
              <div className="verants-buy-middle-inner-icon" ><Verants /></div>
            </div>
            <div style={{transform: "scale(0.3) translateY(-120px)"}} className="part-verants-buy-inner-holder">
              <div className="verants-buy-middle-inner-icon" ><Verants /></div>
            </div>
          </div>
          <div className="verants-buy-bottom-verants-cost-main-container">
            <div className="inner-verants-cost">&euro;4.99</div>
          </div>
        </div>
        <div
          onClick={(e) => buyVerantsClickFunc(e)}
          onMouseOver={(e) => {
            checkIfActive(e, hoverAudio);
          }}
          className="verants-buy-main-container"
        >
          <div className="verants-buy-overlay"></div>
          <div className="verants-buy-top-part-verants-number">
            <div className="verants-buy-icon-container"><div className="inner-veratns-buy-icon-container"><Verants /></div></div>
            <div className="veratns-buy-number-div">1,200</div>
          </div>
          <div style={{transform: "translateY(61px)"}} className="verants-buy-middle-verants-icons-main-container">
            <div style={{transform: "scale(0.4)"}} className="part-verants-buy-inner-holder">
              <div className="verants-buy-middle-inner-icon" ><Verants /></div>
              <div className="verants-buy-middle-inner-icon" ><Verants /></div>
              <div className="verants-buy-middle-inner-icon" ><Verants /></div>
              <div className="verants-buy-middle-inner-icon" ><Verants /></div>
            </div>
            <div style={{transform: "scale(0.3) translateY(-80px)"}} className="part-verants-buy-inner-holder">
              <div className="verants-buy-middle-inner-icon" ><Verants /></div>
              <div className="verants-buy-middle-inner-icon" ><Verants /></div>
              <div className="verants-buy-middle-inner-icon" ><Verants /></div>
            </div>
            <div style={{transform: "scale(0.2) translateY(-290px)"}} className="part-verants-buy-inner-holder">
              <div className="verants-buy-middle-inner-icon" ><Verants /></div>
              <div className="verants-buy-middle-inner-icon" ><Verants /></div>
            </div>
            <div style={{transform: "scale(0.2) translateY(-500px)"}} className="part-verants-buy-inner-holder">
              <div className="verants-buy-middle-inner-icon" ><Verants /></div>
            </div>
          </div>
          <div className="verants-buy-bottom-verants-cost-main-container">
            <div className="inner-verants-cost">&euro;6.99</div>
          </div>
        </div>
        <div
          onClick={(e) => buyVerantsClickFunc(e)}
          onMouseOver={(e) => {
            checkIfActive(e, hoverAudio);
          }}
          className="verants-buy-main-container"
        >
          <div className="verants-buy-overlay"></div>
          <div className="verants-buy-top-part-verants-number">
            <div className="verants-buy-icon-container"><div className="inner-veratns-buy-icon-container"><Verants /></div></div>
            <div className="veratns-buy-number-div">2,365</div>
          </div>
          <div style={{transform: "translateY(94px)"}} className="verants-buy-middle-verants-icons-main-container">
            <div style={{transform: "scale(0.3)"}} className="part-verants-buy-inner-holder">
              <div className="verants-buy-middle-inner-icon" ><Verants /></div>
              <div className="verants-buy-middle-inner-icon" ><Verants /></div>
              <div className="verants-buy-middle-inner-icon" ><Verants /></div>
              <div className="verants-buy-middle-inner-icon" ><Verants /></div>
              <div className="verants-buy-middle-inner-icon" ><Verants /></div>
            </div>
            <div style={{transform: "scale(0.25) translateY(-160px)"}} className="part-verants-buy-inner-holder">
              <div className="verants-buy-middle-inner-icon" ><Verants /></div>
              <div className="verants-buy-middle-inner-icon" ><Verants /></div>
              <div className="verants-buy-middle-inner-icon" ><Verants /></div>
              <div className="verants-buy-middle-inner-icon" ><Verants /></div>
            </div>
            <div style={{transform: "scale(0.2) translateY(-410px)"}} className="part-verants-buy-inner-holder">
              <div className="verants-buy-middle-inner-icon" ><Verants /></div>
              <div className="verants-buy-middle-inner-icon" ><Verants /></div>
              <div className="verants-buy-middle-inner-icon" ><Verants /></div>
            </div>
            <div style={{transform: "scale(0.15) translateY(-860px)"}} className="part-verants-buy-inner-holder">
              <div className="verants-buy-middle-inner-icon" ><Verants /></div>
              <div className="verants-buy-middle-inner-icon" ><Verants /></div>
            </div>
            <div style={{transform: "scale(0.1) translateY(-1810px)"}} className="part-verants-buy-inner-holder">
              <div className="verants-buy-middle-inner-icon" ><Verants /></div>
            </div>
          </div>
          <div className="verants-buy-bottom-verants-cost-main-container">
            <div className="inner-verants-cost">&euro;9.99</div>
          </div>
        </div>
      </div>
    </div>
  );
}
