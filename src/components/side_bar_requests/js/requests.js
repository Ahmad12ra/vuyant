import clickAudio from "../../click_audio_func/click_audio_func";
import hoverAudio from "../../hover_audio_func/hover_audio_func";
import { useRef } from "react";
import "../css/requests.css";
export default function SideBarRequests() {
 const StatusOptionSlider = useRef(null);

  function changeStatusSideBar(num, e) {
    if (num === 1) {
      StatusOptionSlider.current.style.left = "0%";
      e.target.style.color = "black";
      e.target.nextElementSibling.style.color = "white";
      e.target.nextElementSibling.nextElementSibling.style.color = "white";
    } else {
      StatusOptionSlider.current.style.left = "50%";
      e.target.style.color = "black";
      e.target.previousElementSibling.style.color = "white";
      e.target.nextElementSibling.style.color = "white";
    } 
  }

  function friendInvitesClick(e, num) {
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
          className="catagory-option catagory-option-acitve"
        >
          Invites
        </div>
        <div
          onClick={(e) => {
            changeStatusSideBar(2, e);
            clickAudio();
          }}
          className="catagory-option "
        >
          Friend Requests
        </div>
        
        <div ref={StatusOptionSlider} className="catagory-option-slider"></div>
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
                <div className="friend-name">Mymass <span className="player-request-message">Invited you to his party</span></div>
              </div>
            </div>
            <div className="frind-options-main-container">
              <div onClick={(e) => {friendInvitesClick(e, 1)}} onMouseOver={() => hoverAudio()} className="friend-option">Reject</div>
              <div onClick={(e) => {friendInvitesClick(e, 2)}} onMouseOver={() => hoverAudio()} className="friend-option">Accept</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
