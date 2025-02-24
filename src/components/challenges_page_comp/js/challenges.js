import clickAudio from "../../click_audio_func/click_audio_func";
import hoverAudio from "../../hover_audio_func/hover_audio_func";
import TopNav from "../../top_nav_comp/js/topNav";
import Verants from "../../verants_comp/js/verants";
import "../css/challenges.css";
import { useEffect, useRef, useState } from "react";
export default function ChallengesPage() {
  function goBackFunction() {
    clickAudio();
    console.log("went back");
  }

  return (
    <div className="challenges-page-main-container">
      <div
        onClick={() => {
          goBackFunction();
        }}
        onMouseOver={(e) => {
          hoverAudio();
        }}
        className="top-go-back-icon-challenges"
      >
        <i class="fa-solid fa-arrow-left"></i>
      </div>
      <div className="challenges-show-main-main-container">
        <div className="left-part-challenges-main-container">
          <div className="challenge-section-main-container">
            <div className="inner-challenge-section-specs">
              <div className="inner-challenge-title">Win 20 Games</div>
              <div className="inner-description-title">Win 20 games in clix game mode.<br/>it can be seperated games.</div>
              <div className="inner-challenge-progress">
                <div className="inner-inner-challenge-progress-count">0/1</div>
                <div className="inner-inner-challenge-progress-bar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
