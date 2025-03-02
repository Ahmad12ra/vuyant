import { useContext, useState, useEffect } from "react";
import addCommaToNum from "../../addCommaToNum.js";
import { useNavigate } from "react-router-dom";
import "../css/challenges.css";
import { UseContextValues } from "../../../App.js";

export default function Challenges() {
    let [innerProgWidth, setInnerPrgWidth] = useState();
    const contextValues = useContext(UseContextValues);
    const nav = useNavigate();

    useEffect(() => {
        if (contextValues.currentXp == 0) {
            setInnerPrgWidth("0%");
        } else {
            const width = (contextValues.currentXp / contextValues.goalXp) * 100;
            setInnerPrgWidth(width + "%")
        }
    }, [contextValues.currentXp])

  return (
    <>
        <div className="challenges-main-container">
            <div className="challenges-xp-lvl-progress">
                <div><span>{addCommaToNum(contextValues.currentXp)}</span>XP</div>
                <div><span>{addCommaToNum(contextValues.goalXp)}</span>XP</div>
            </div>
            <div className="xp-progress-bar">
                <div style={{width: innerProgWidth}} className="xp-inner-progress-bar"></div>
            </div>
            <div className="challenges-xp-lvl-progress">
                <div>Lvl <span>{addCommaToNum(contextValues.userLevel)}</span></div>
                <div>Lvl <span>{addCommaToNum(contextValues.userLevel + 1)}</span></div>
            </div>
            <div className="challenges-clickable-main-container">
                <div className="top-chllenges-button-trans"></div>
                <span onClick={() => {nav("/challenges")}}>Challenges</span>
            </div>
        </div>
    </>
  );
}