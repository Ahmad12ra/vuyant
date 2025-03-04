import { FirstCharacterCircle } from "../../characters_file/js/characters";
import clickAudio from "../../click_audio_func/click_audio_func";
import { FirstCursor } from "../../cursors_file/js/cursors";
import { FirstHat } from "../../hats_file/js/hats";
import hoverAudio from "../../hover_audio_func/hover_audio_func";
import TopNav from "../../top_nav_comp/js/topNav";
import getUserOwnedCharacters from "../../getUserOwnedCharacters";
import * as charactersFile from "../../characters_file/js//characters"
import "../css/skin_page.css";
import { UseContextValues } from "../../../App";
import { useEffect, useRef, useState, useContext } from "react";
export default function SkinsPage() {
    const userInfo = useContext(UseContextValues);
    const ownedItemsContainer = useRef(null);
    const ownedItemsScrollBar = useRef(null);
    function checkIfActive(e,func) {
        if (!(e.currentTarget.style.backgroundColor === "var(--now-selected-background-color)" && e.currentTarget.style.outlineColor === "var(--verants-main-color)")) {
            func();
        }
    }

// scrollLeft 122px

function scrollOnClick(direction) {
    const scroll = 4;
    const scrollCount = () =>  {direction === -1 ? ownedItemsScrollBar.current.scrollLeft -= scroll : ownedItemsScrollBar.current.scrollLeft += scroll};
    let count = 0;
    const interval = setInterval(() => {
        if (! (count === 120)) {
            scrollCount();
            count += 4
        } else {clearInterval(interval); count = 0};
    }, 1)
    
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
            <div onClick={(e) => {ownedItemClick(e); getUserOwnedCharacters(userInfo.userId)}} onMouseOver={(e) => checkIfActive(e,hoverAudio)} className="owned-item-costume owned-item-costume1">
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
      <div className="bottom-part-owned-items-show-bar">

      <div onClick={() => scrollOnClick(-1)} className="go-left-skins-page-owned-items-main-container">
            <i class="fa-solid fa-arrow-left"></i>
        </div>
        <div onClick={() => scrollOnClick(1)} className="go-right-skins-page-owned-items-main-container">
            <i class="fa-solid fa-arrow-right"></i>
        </div>

      <div ref={ownedItemsScrollBar} className="owned-items-scrollable-container-skins-page">

        
        
<div className="bottom-part-skin-page-owned-items-main-container">
  <div id={1} className="item-inside-owned-items-container">
      <div className="item-inside-owned-items-container-overlay"></div>
      <FirstHat />
  </div>
  <div id={2} className="item-inside-owned-items-container">
      <div className="item-inside-owned-items-container-overlay"></div>
      <FirstHat />
  </div>
  <div id={3} className="item-inside-owned-items-container">
      <div className="item-inside-owned-items-container-overlay"></div>
      <FirstHat />
  </div>
  <div id={4} className="item-inside-owned-items-container">
      <div className="item-inside-owned-items-container-overlay"></div>
      <FirstHat />
  </div>
  <div id={5} className="item-inside-owned-items-container">
      <div className="item-inside-owned-items-container-overlay"></div>
      <FirstHat />
  </div>
  <div id={6} className="item-inside-owned-items-container">
      <div className="item-inside-owned-items-container-overlay"></div>
      <FirstHat />
  </div>
  <div id={7} className="item-inside-owned-items-container">
      <div className="item-inside-owned-items-container-overlay"></div>
      <FirstHat />
  </div>
  <div id={8} className="item-inside-owned-items-container">
      <div className="item-inside-owned-items-container-overlay"></div>
      <FirstHat />
  </div>
  <div id={9} className="item-inside-owned-items-container">
      <div className="item-inside-owned-items-container-overlay"></div>
      <FirstHat />
  </div>
</div>
</div>
      </div>
    </div>
  );
}
