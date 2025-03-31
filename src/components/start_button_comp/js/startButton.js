import clickAudio from "../../click_audio_func/click_audio_func";
import hoverAudio from "../../hover_audio_func/hover_audio_func";
import { io } from "socket.io-client";
import "../css/startButton.css";
import { UseContextValues } from "../../../App";
import { useContext, useEffect, useState } from "react";
export default function StartButton() {
  const userInfo = useContext(UseContextValues);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    setSocket(io("http://localhost:4000"));
  }, [])
  
  function startButtonClicked () {
    clickAudio();
    socket.emit("addUserToRoom", userInfo.userId);
  }
  
  return (
    <>
        <div onMouseOver={() => hoverAudio()} onClick={() => startButtonClicked()} className="start-button-main-container">
          <div className="start-button-inner-start-text">START</div>
          {/* <div className="start-button-inner-x-container"><span>+</span></div> */}
          <div className="start-button-overlay"></div>
        </div>
    </>
  );
}
