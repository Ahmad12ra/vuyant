import { useRef } from "react";
import "../css/lobby.css";
import PlayerInfo from "../../player_lobby_info/js/player_lobby_info.js";
import AjaxGameThumb from "../../ajax_game_mode_thumbnail/js/ajaxGameThumb.js";
import ClixGameThumb from "../../clix_game_mode_thumbnail/js/clix_thumbnail.js";
import TayanGameThumb from "../../tayan_game_mode_thumbnail/js/tayan.js";
export default function LobbyUsers() {
  const smallSquareContainer = useRef(null);

  function moveSquares() {
    for (let i = 0; i < smallSquareContainer.current.children.length; i++) {
      setTimeout(() => {
        smallSquareContainer.current.children[
          i
        ].style.cssText = `transform: translate(25px, 25px)`;
        setTimeout(() => {
          smallSquareContainer.current.children[i].style.cssText = ``;
        }, 5000);
      }, 100 + (i * 100));
    }
  }

  function colorSquares(i) {
    setTimeout(() => {
      const smallSquareEffectAnimation = setInterval(() => {
        smallSquareContainer.current.children[i].children[0].style.cssText =
          "color:rgba(255, 255, 255, 0.49)";
        setTimeout(() => {
          smallSquareContainer.current.children[i].children[0].style.cssText =
            "";
        }, 1000);
      }, 2000);
    }, 200 + i * 100);
  }

  setTimeout( () => {
    for (let i = 0; i < smallSquareContainer.current.children.length; i++) {
      
      colorSquares(i);

      moveSquares()

      setInterval(() => {
        moveSquares()
      }, 10000);
    }
  },0)

  return (
    <div className="lobby-users-main-container">
      <div className="game-mode-main-container">
        <div
          ref={smallSquareContainer}
          className="small-squares-effect-container"
        >
          <div className="small-square-que small-square-que-one">
            <i class="fa-solid fa-play"></i>
          </div>
          <div className="small-square-que small-square-que-two">
            <i class="fa-solid fa-play"></i>
          </div>
          <div className="small-square-que small-square-que-three">
            <i class="fa-solid fa-play"></i>
          </div>
          <div className="small-square-que small-square-que-four">
            <i class="fa-solid fa-play"></i>
          </div>
          <div className="small-square-que small-square-que-five">
            <i class="fa-solid fa-play"></i>
          </div>
          <div className="small-square-que small-square-que-six">
            <i class="fa-solid fa-play"></i>
          </div>
          <div className="small-square-que small-square-que-seven">
            <i class="fa-solid fa-play"></i>
          </div>
          <div className="small-square-que small-square-que-eight">
            <i class="fa-solid fa-play"></i>
          </div>
          <div className="small-square-que small-square-que-nine">
            <i class="fa-solid fa-play"></i>
          </div>
          <div className="small-square-que small-square-que-ten">
            <i class="fa-solid fa-play"></i>
          </div>
          <div className="small-square-que small-square-que-eleven">
            <i class="fa-solid fa-play"></i>
          </div>
          <div className="small-square-que small-square-que-twelve">
            <i class="fa-solid fa-play"></i>
          </div>
          <div className="small-square-que small-square-que-thirteen">
            <i class="fa-solid fa-play"></i>
          </div>
          <div className="small-square-que small-square-que-fourteen">
            <i class="fa-solid fa-play"></i>
          </div>
          <div className="small-square-que small-square-que-fifteen">
            <i class="fa-solid fa-play"></i>
          </div>
          <div className="small-square-que small-square-que-sixteen">
            <i class="fa-solid fa-play"></i>
          </div>
          <div className="small-square-que small-square-que-seventeen">
            <i class="fa-solid fa-play"></i>
          </div>
          <div className="small-square-que small-square-que-eighteen">
            <i class="fa-solid fa-play"></i>
          </div>
          <div className="small-square-que small-square-que-nineteen">
            <i class="fa-solid fa-play"></i>
          </div>
          <div className="small-square-que small-square-que-twenty">
            <i class="fa-solid fa-play"></i>
          </div>
        </div>
        <TayanGameThumb />
      </div>
      <div className="players-stands-main-container">
        <div className="player-lobby-stand player1-stand"></div>
        <div className="player-lobby-stand player2-stand"></div>
        <div className="player-lobby-stand player3-stand">
          <PlayerInfo
            state="Online"
            username="Ahmed12ra"
            userRank={<i class="fa-solid fa-shield"></i>}
            userCustume={<i class="fa-solid fa-user"></i>}
            level="19"
          />
        </div>
        <div className="player-lobby-stand player4-stand"></div>
        <div className="player-lobby-stand player5-stand"></div>
      </div>
    </div>
  );
}
