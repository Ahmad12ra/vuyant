import { useNavigate } from "react-router-dom";
import clickAudio from "../../click_audio_func/click_audio_func";
import hoverAudio from "../../hover_audio_func/hover_audio_func";
import TopNav from "../../top_nav_comp/js/topNav";
import Verants from "../../verants_comp/js/verants";
import AjaxGameThumb from "../../ajax_game_mode_thumbnail/js/ajaxGameThumb.js";
import ClixGameThumb from "../../clix_game_mode_thumbnail/js/clix_thumbnail.js";
import TayanGameThumb from "../../tayan_game_mode_thumbnail/js/tayan.js";
import { FirstHat } from "../../hats_file/js/hats";
import "../css/challenges.css";
import { useEffect, useRef, useState } from "react";
export default function ChallengesPage() {
  const nav = useNavigate();

  function goBackFunction() {
    clickAudio();
    nav("/");
  }

  function checkIfSelected(e, func) {
    if (!(e.currentTarget.style.outlineColor === "var(--verants-main-color)")) {
      func();
      e.currentTarget.children[0].style.cssText = "background-color: var(--default-select-background-color); transition: 0s;";
    }
  }

  function challengeClickFunc(e) {
    e.currentTarget.style.cssText = "outline-color: var(--verants-main-color)";
    e.currentTarget.children[1].style.cssText = "border-right-color: var(--verants-main-color)";
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
          <div onClick={(e) => {checkIfSelected(e, clickAudio); challengeClickFunc(e)}} onMouseLeave={(e) => {e.currentTarget.children[0].style.cssText = ""}} onMouseOver={(e) => {checkIfSelected(e, hoverAudio)}} className="challenge-section-main-container">
            <div className="overlay-challenge-section-main-container-cover"></div>
            <div className="inner-challenge-section-specs">
              <div className="inner-challenge-title">Win 20 Games</div>
              <div className="inner-description-title">
                Win 20 games in clix game mode.
                <br />
                it can be seperated games.
              </div>
              <div className="inner-challenge-progress">
                <div className="inner-inner-challenge-progress-count">0/1</div>
                <div className="inner-inner-challenge-progress-bar"></div>
              </div>
            </div>

            <div className="right-part-challenge-main-container">
              <div className="game-mode-challenge-background-image">
                <AjaxGameThumb />
              </div>
              <div className="reward-challenge-icon-image">
                <FirstHat />
              </div>
              <div className="reward-challenge-number-count">FoboHit</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
