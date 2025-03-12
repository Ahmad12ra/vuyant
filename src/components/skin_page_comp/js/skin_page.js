import { FirstCharacterCircle } from "../../characters_file/js/characters";
import clickAudio from "../../click_audio_func/click_audio_func";
import { FirstCursor } from "../../cursors_file/js/cursors";
import { FirstHat } from "../../hats_file/js/hats";
import hoverAudio from "../../hover_audio_func/hover_audio_func";
import TopNav from "../../top_nav_comp/js/topNav";
import getUserOwnedCharacters from "../../getUserOwnedCharacters";
import getUserOwnedCursors from "../../getUserOwnedCursors";
import getUserOwnedHats from "../../getUserOwnedHats";
import getUserOwnedGlasses from "../../getUserOwnedGlasses";
import getUserCostume from "../../getUserCostume";
import * as charactersFile from "../../characters_file/js/characters";
import * as cursorsFile from "../../cursors_file/js/cursors";
import * as hatsFile from "../../hats_file/js/hats";
import * as glassesFile from "../../glasses_file/js/glasses";
import "../css/skin_page.css";
import { UseContextValues } from "../../../App";
import { useEffect, useRef, useState, useContext } from "react";
export default function SkinsPage() {
  const userInfo = useContext(UseContextValues);
  const ownedItemsContainer = useRef(null);
  const ownedItemsScrollBar = useRef(null);
  const [UserCharacter, setUserCharacter] = useState()
  const [UserCursor, setUserCursor] = useState()
  const [UserHat, setUserHat] = useState()
  const [UserGlasses, setUserGlasses] = useState()
  let [ownedItems, setOwnedItems] = useState([]);
  function checkIfActive(e, func) {
    if (
      !(
        e.currentTarget.style.backgroundColor ===
          "var(--now-selected-background-color)" &&
        e.currentTarget.style.outlineColor === "var(--verants-main-color)"
      )
    ) {
      func();
    }
  }


  // adjust the user current costume to show the current costume items in the boxes on the left
  useEffect(() => {
    getUserCostume(userInfo.userId, (userCostume) => {
      setUserCharacter(() => charactersFile[userCostume.characterName[0]]);
      setUserCursor(() => cursorsFile[userCostume.cursorName[0]]);
      setUserHat(() => hatsFile[userCostume.hatName[0]]);
      setUserGlasses(() => {return glassesFile[userCostume.glassesName[0]]});
    })
  }, [])

  // call back funciton
  function showUserOwnedCharacters(arrayOfCharacterNames) {
    const items = ShowOwnedItems(charactersFile, arrayOfCharacterNames, "0.6");
    setOwnedItems(items);
  }
  function showUserOwnedCursors(arrayOfCursorNames) {
    const items = ShowOwnedItems(cursorsFile, arrayOfCursorNames, "1");
    setOwnedItems(items);
  }
  function showUserOwnedHats(arrayOfHatNames) {
    if (arrayOfHatNames.length > 0) {
      const items = ShowOwnedItems(hatsFile, arrayOfHatNames, "1");
    setOwnedItems(items);
    } else {
      setOwnedItems(<div style={{color: "#c9c9c9"}}>there is no owned hats</div>);
    }
  }
  function showUserOwnedGlasses(arrayOfGlassesNames) {
    if (arrayOfGlassesNames.length > 0) {
      const items = ShowOwnedItems(glassesFile, arrayOfGlassesNames, "1");
    setOwnedItems(items);
    } else {
      setOwnedItems(<div style={{color: "#c9c9c9"}}>there is no owned glasses</div>);
    }
  }
  // to show itmes in the down scroll in the skin page
  function ShowOwnedItems(fileType, arrayOfExtractedFiles, scaleAmount) {
    if (arrayOfExtractedFiles != null) {
      let returnedValue = [];
    for (let i = 0; i < arrayOfExtractedFiles.length; i++) {
      const ItemName = arrayOfExtractedFiles[i];
      const Component = fileType[ItemName];
      returnedValue.push(
        <div key={i} className="item-inside-owned-items-container">
          <div className="item-inside-owned-items-container-overlay"></div>
          <div style={{transform: `scale(${scaleAmount})`}} className="item-component-in-skin-page-inner-item-inside-owned-itmes-container">
            <Component />
          </div>
        </div>
      );
    }

    return returnedValue;
    } else {
      return null;
    }
  }

  function scrollOnClick(direction) {
    const scroll = 4;
    const scrollCount = () => {
      direction === -1
        ? (ownedItemsScrollBar.current.scrollLeft -= scroll)
        : (ownedItemsScrollBar.current.scrollLeft += scroll);
    };
    let count = 0;
    const interval = setInterval(() => {
      if (!(count === 120)) {
        scrollCount();
        count += 4;
      } else {
        clearInterval(interval);
        count = 0;
      }
    }, 1);
  }

  function ownedItemClick(e) {
    checkIfActive(e, clickAudio);
    Array.from(ownedItemsContainer.current.children).forEach((e) => {
      e.style.cssText = "";
    });
    e.currentTarget.style.cssText =
      "background-color: var(--now-selected-background-color); outline-color: var(--verants-main-color)";
  }

  return (
    <div className="skin-page-comp-main-container">
      <TopNav skin={true} />
      <div className="skin-page-costume-main-container">
        <div ref={ownedItemsContainer} className="left-part-costumes-overview">
          <div
            onClick={(e) => {
              ownedItemClick(e);
              getUserOwnedCharacters(userInfo.userId, showUserOwnedCharacters);
            }}
            onMouseOver={(e) => checkIfActive(e, hoverAudio)}
            className="owned-item-costume owned-item-costume1"
          >
            <div className="item-name-costume">Skin</div>
            <div className="item-element-costume">
              {UserCharacter ? <UserCharacter /> : ""}
            </div>
            <div></div>
            <div className="over-lay-skin-owned-items"></div>
          </div>
          <div
            onClick={(e) => {
              ownedItemClick(e);
              getUserOwnedCursors(userInfo.userId, showUserOwnedCursors)
            }}
            onMouseOver={(e) => checkIfActive(e, hoverAudio)}
            className="owned-item-costume owned-item-costume2"
          >
            <div className="item-name-costume">cursor</div>
            <div className="item-element-costume">
              {UserCursor ? <UserCursor /> : ""}
            </div>
            <div></div>
            <div className="over-lay-skin-owned-items"></div>
          </div>
          <div
            onClick={(e) => {
              ownedItemClick(e);
              getUserOwnedHats(userInfo.userId, showUserOwnedHats)
            }}
            onMouseOver={(e) => checkIfActive(e, hoverAudio)}
            className="owned-item-costume owned-item-costume3"
          >
            <div className="item-name-costume">hat</div>
            <div className="item-element-costume">
              {UserHat ? <UserHat /> : ""}
            </div>
            <div></div>
            <div className="over-lay-skin-owned-items"></div>
          </div>
          <div
            onClick={(e) => {
              ownedItemClick(e);
              getUserOwnedGlasses(userInfo.userId, showUserOwnedGlasses);
            }}
            onMouseOver={(e) => checkIfActive(e, hoverAudio)}
            className="owned-item-costume owned-item-costume4"
          >
            <div className="item-name-costume">glasses</div>
            <div className="item-element-costume">
            {UserGlasses ? <UserGlasses /> : ""}
            </div>
            <div></div>
            <div className="over-lay-skin-owned-items"></div>
          </div>
        </div>
        <div className="right-part-costume-show">
          <div
            style={{ pointerEvents: "none" }}
            className="inner-top-part-costume-show"
          >
            <div>
              {" "}
              <FirstHat />
            </div>
          </div>
          <div className="inner-bottom-part-costume-stand"></div>
        </div>
      </div>
      <div className="bottom-part-owned-items-show-bar">
        <div
          onClick={() => scrollOnClick(-1)}
          className="go-left-skins-page-owned-items-main-container"
        >
          <i class="fa-solid fa-arrow-left"></i>
        </div>
        <div
          onClick={() => scrollOnClick(1)}
          className="go-right-skins-page-owned-items-main-container"
        >
          <i class="fa-solid fa-arrow-right"></i>
        </div>

        <div
          ref={ownedItemsScrollBar}
          className="owned-items-scrollable-container-skins-page"
        >
          <div className="bottom-part-skin-page-owned-items-main-container">
            {ownedItems}
          </div>
        </div>
      </div>
    </div>
  );
}
