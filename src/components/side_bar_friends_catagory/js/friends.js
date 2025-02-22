import { useRef } from "react";
import clickAudio from "../../click_audio_func/click_audio_func";
import hoverAudio from "../../hover_audio_func/hover_audio_func";
import "../css/friends.css";
export default function SideBarFriends() {
  const StatusOptionSlider = useRef(null);

  function changeStatusSideBar(num, e) {
    if (num === 1) {
      StatusOptionSlider.current.style.left = "0%";
      e.target.style.color = "black";
      e.target.nextElementSibling.style.color = "white";
      e.target.nextElementSibling.nextElementSibling.style.color = "white";
    } else if (num === 2) {
      StatusOptionSlider.current.style.left = "33.33%";
      e.target.style.color = "black";
      e.target.previousElementSibling.style.color = "white";
      e.target.nextElementSibling.style.color = "white";
    } else {
      StatusOptionSlider.current.style.left = "66.66%";
      e.target.style.color = "black";
      e.target.previousElementSibling.style.color = "white";
      e.target.previousElementSibling.previousElementSibling.style.color =
        "white";
    }
  }

  function frindOptionHover(e) {
    hoverAudio();
  }

  function frindsClick(e, num) {
      clickAudio();
  }

  return (
    <>
      <div className="side-bar-catagory-options-main-container">
        <div
          onClick={(e) => {
            changeStatusSideBar(1, e);
            clickAudio();
          }}
          className="status-option status-option-acitve"
        >
          Online
        </div>
        <div
          onClick={(e) => {
            changeStatusSideBar(2, e);
            clickAudio();
          }}
          className="status-option "
        >
          Away
        </div>
        <div
          onClick={(e) => {
            changeStatusSideBar(3, e);
            clickAudio();
          }}
          className="status-option "
        >
          Offline
        </div>
        <div ref={StatusOptionSlider} className="status-option-slider"></div>
      </div>
      <div className="friends-list-main-container">
        <div className="friends-list-container">
          <div className="list-friend-main-container">
            <div className="friend-profile-details">
              <div className="frind-profile-image">
                <i class="fa-solid fa-circle-user"></i>
              </div>
              <div className="friend-status-details">
                <div className="friend-status">Online</div>
                <div className="friend-name">Mymass</div>
              </div>
            </div>
            <div className="frind-options-main-container">
              <div onClick={(e) => {frindsClick(e, 1)}} onMouseOver={() => {hoverAudio()}} className="friend-option">Remove</div>
              <div onClick={(e) => {frindsClick(e, 2)}} onMouseOver={() => {hoverAudio()}} className="friend-option">Invite</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
