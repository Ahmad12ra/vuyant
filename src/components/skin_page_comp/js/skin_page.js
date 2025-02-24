import { FirstCharacterCircle } from "../../characters_file/js/characters";
import clickAudio from "../../click_audio_func/click_audio_func";
import { FirstCursor } from "../../cursors_file/js/cursors";
import { FirstHat } from "../../hats_file/js/hats";
import hoverAudio from "../../hover_audio_func/hover_audio_func";
import TopNav from "../../top_nav_comp/js/topNav";
import "../css/skin_page.css";
import { useEffect, useRef, useState } from "react";
export default function SkinsPage() {

    const ownedItemsContainer = useRef(null);

    function checkIfActive(e,func) {
        if (!(e.currentTarget.style.backgroundColor === "var(--now-selected-background-color)" && e.currentTarget.style.outlineColor === "var(--verants-main-color)")) {
            func();
        }
    }

    function ownedItemClick(e) {
        checkIfActive(e,clickAudio)
        Array.from(ownedItemsContainer.current.children).forEach((e) => {
            e.style.cssText = "";
        })
        e.currentTarget.style.cssText = "background-color: var(--now-selected-background-color); outline-color: var(--verants-main-color)";
    }

  return (
    <div className="skin-page-comp-main-container">
      <TopNav skin={true} />
      <div className="skin-page-costume-main-container">
        <div ref={ownedItemsContainer} className="left-part-costumes-overview">
            <div onClick={(e) => {ownedItemClick(e)}} onMouseOver={(e) => checkIfActive(e,hoverAudio)} className="owned-item-costume owned-item-costume1">
                <div className="item-name-costume">Skin</div>
                <div className="item-element-costume"><FirstCharacterCircle /></div>
                <div className="over-lay-skin-owned-items"></div>
            </div>
            <div onClick={(e) => {ownedItemClick(e)}} onMouseOver={(e) => checkIfActive(e,hoverAudio)} className="owned-item-costume owned-item-costume2">
                <div className="item-name-costume">cursor</div>
                <div className="item-element-costume"><FirstCursor /></div>
                <div className="over-lay-skin-owned-items"></div>
            </div>
            <div onClick={(e) => {ownedItemClick(e)}} onMouseOver={(e) => checkIfActive(e,hoverAudio)} className="owned-item-costume owned-item-costume3">
                <div className="item-name-costume">hat</div>
                <div className="item-element-costume"><FirstHat /></div>
                <div className="over-lay-skin-owned-items"></div>
            </div>
            <div onClick={(e) => {ownedItemClick(e)}} onMouseOver={(e) => checkIfActive(e,hoverAudio)} className="owned-item-costume owned-item-costume4">
                <div className="item-name-costume">glasses</div>
                <div className="item-element-costume"><FirstCharacterCircle /></div>
                <div className="over-lay-skin-owned-items"></div>
            </div>
        </div>
        <div className="right-part-costume-show">
            <div style={{pointerEvents: "none"}} className="inner-top-part-costume-show">
                <div> <FirstHat /></div>
            </div>
            <div className="inner-bottom-part-costume-stand"></div>
        </div>
      </div>
    </div>
  );
}
