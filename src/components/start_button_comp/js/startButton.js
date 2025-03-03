import clickAudio from "../../click_audio_func/click_audio_func";
import hoverAudio from "../../hover_audio_func/hover_audio_func";
import "../css/startButton.css";
export default function StartButton() {
  return (
    <>
        <div onMouseOver={() => hoverAudio()} onClick={() => clickAudio()} className="start-button-main-container">
          <div className="start-button-inner-start-text">START</div>
          {/* <div className="start-button-inner-x-container"><span>+</span></div> */}
          <div className="start-button-overlay"></div>
        </div>
    </>
  );
}
