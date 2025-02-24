import { FirstCharacterCircle } from "../../characters_file/js/characters";
import clickAudio from "../../click_audio_func/click_audio_func";
import hoverAudio from "../../hover_audio_func/hover_audio_func";
import TopNav from "../../top_nav_comp/js/topNav";
import "../css/vPass.css";
import { useEffect, useRef, useState } from "react";
export default function Vpass() {
  const bottomLayerVpass = useRef(null);
  const vPassPrizesMainContainer = useRef(null);
  function Repeat() {
    let result = [];
    for (let i = 1; i < 98; i++) {
      result.push(
        <div key={i} className="progress-bar-main-container-part">
          <div className="progress-bar-part-rec"></div>
          <div className="progress-bar-part-circle"></div>
          <div className="level-part-number">{i + 1}</div>
        </div>
      );
    }

    return result;
  }

  function scrollBar(direction) {

    const directionDepend = () => {direction === 1 ? bottomLayerVpass.current.scrollLeft += 5 : bottomLayerVpass.current.scrollLeft -= 5};

      let scrollLeft = 0;
      const scrollInterval = setInterval(() => {
        if (scrollLeft === 200) {
          scrollLeft = 0;
          clearInterval(scrollInterval);
        } else {
          directionDepend();
          scrollLeft+= 5;
        }
      }, 1);
  }

  function windowWheelVpass(e) {
    if (bottomLayerVpass.current) {
      if (e.deltaY > 0) {
        scrollBar(1)
      } else {
        scrollBar(-1)
      }
    }
  }

  useEffect(() => {
    window.addEventListener("wheel", windowWheelVpass);
    return () => {
      window.removeEventListener("wheel", windowWheelVpass);
    };
  },[])

  window.onwheel = (e) => {
    
  };

  // this function for when you click on the prize
  function prizeClickFunction(e) {
    if (e.currentTarget.style.backgroundColor !== "rgba(113, 0, 183, 0.2)" && e.currentTarget.style.outlineColor !== "white") {
      clickAudio();
      removePrizesStyles();
      e.currentTarget.style.cssText = "background-color:rgba(113, 0, 183, 0.2); outline-color: white;";
    }
  }
  function removePrizesStyles() {
  Array.from(vPassPrizesMainContainer.current.children).forEach((el) => {
    el.children[0].style.cssText = "";
  });
}

  function hoverEffectPrize(e) {
    if (e.currentTarget.style.backgroundColor !== "rgba(113, 0, 183, 0.2)" && e.currentTarget.style.outlineColor !== "white") {
      hoverAudio();
    }
    
  }

  // process after clicking the buy v-pass button
  function buyVpassclicked() {
    clickAudio();
    // here you can add the code that will be executed after clicking the buy v-pass button
  }

  return (
    <div className="v-pass-page-main-container">
      <TopNav vPass={true} />
      <div className="v-pass-content-main-container">
        <div className="v-pass-content-top-part">
          <div className="back-shadow-v-pass-top-part"></div>
          <div style={{ scale: "2" }}>
            <FirstCharacterCircle />
          </div>
        </div>
        <div ref={bottomLayerVpass} className="v-pass-content-bottom-part">
          <div ref={vPassPrizesMainContainer} className="top-layer-bottom-part-v-pass">
            <div className="top-layer-prize-part">
              <div onClick={(e) => prizeClickFunction(e)} onMouseOver={(e) => hoverEffectPrize(e)} className="inner-prize-top-layer">
                <div className="overlay-cover-inner-prize"></div>
                <div className="inner-inner-prize-content"><FirstCharacterCircle /></div>
              </div>
            </div>
            <div className="top-layer-prize-part">
              <div onClick={(e) => prizeClickFunction(e)} onMouseOver={(e) => hoverEffectPrize(e)} className="inner-prize-top-layer">
                <div className="overlay-cover-inner-prize"></div>
                <div className="inner-inner-prize-content"><FirstCharacterCircle /></div>
              </div>
            </div>
          </div>
          <div className="bottom-layer-bottom-part-v-pass">
            <div className="progress-bar-main-container-part">
              <div className="progress-bar-part-rec"></div>
              <div className="progress-bar-part-circle"></div>
              <div className="progress-bar-part-circle-first"></div>
              <div className="first-part-level-number">1</div>
            </div>
            <Repeat />
            <div className="progress-bar-main-container-part">
              <div className="progress-bar-part-rec progress-bar-part-rec-last"></div>
              <div className="progress-bar-part-circle"></div>
              <div className="level-part-number">99</div>
              <div className="last-level-part-number">100</div>
            </div>
          </div>
        </div>
        <div  className="bottom-part-buy-v-pass-container">
            <div onClick={() => {buyVpassclicked()}} onMouseOver={() => hoverAudio()} className="buy-v-pass-inner-button">Buy V-Pass<div className="overlay-cover-inner-prize"></div></div>
            
          </div>
      </div>
    </div>
  );
}
