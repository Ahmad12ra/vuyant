import { useRef, useState } from "react";
import clickAudio from "../../click_audio_func/click_audio_func";
import hoverAudio from "../../hover_audio_func/hover_audio_func";
import "../css/side_bar.css";
import SideBarFriends from "../../side_bar_friends_catagory/js/friends";
import SideBarRequests from "../../side_bar_requests/js/requests";
export default function SideBar() {
  const catagorySlider = useRef(null);
  let [catagory, setCatagory] = useState(1);

  function changeCatagorySideBar(num,e) {
    const catgSlid = catagorySlider.current;
    if (num === 1) {
      catgSlid.style.left = "0%";
      e.target.style.color = "black";
      e.target.nextElementSibling.style.color = "white";
      setCatagory(1);
    } else {
      catgSlid.style.left = "50%";
      e.target.style.color = "black";
      e.target.previousElementSibling.style.color = "white";
      setCatagory(2);
    }
  }

  const overlay = {
    position: "absolute",
    width: "100%",
    height: "100%",
    left: "0",
    top: "0",
  };

  return (
    <div className="side-bar-main-container">
      <div className="menue-part-side-bar">
        <div
          className="menue-options-container-side-bar"
          onMouseOver={() => hoverAudio()}
          onClick={() => clickAudio()}
        >
          Report{" "}
          <span>
            <i class="fa-solid fa-circle-exclamation"></i>
          </span>
          <div style={overlay}></div>
        </div>
        <div
          className="menue-options-container-side-bar"
          onMouseOver={() => hoverAudio()}
          onClick={() => clickAudio()}
        >
          <i class="fa-solid fa-gear"></i>
          <div style={overlay}></div>
        </div>
      </div>
      <div className="side-bar-catagory-options-main-container">
        <div
          onClick={(e) => {
            changeCatagorySideBar(1, e);
            clickAudio();
          }}
          className="catagory-option catagory-option-acitve"
        >
          Friends
        </div>
        <div
          onClick={(e) => {
            changeCatagorySideBar(2, e);
            clickAudio();
          }}
          className="catagory-option "
        >
          Requests
        </div>
        <div ref={catagorySlider} className="catagory-option-slider"></div>
      </div>
      {catagory === 1 ? <SideBarFriends /> : <SideBarRequests />}
    </div>
  );
}
