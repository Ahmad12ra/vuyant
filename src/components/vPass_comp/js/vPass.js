import { FirstCharacterCircle } from "../../characters_file/js/characters";
import TopNav from "../../top_nav_comp/js/topNav";
import "../css/vPass.css";
import { useEffect, useRef, useState } from "react";
export default function Vpass() {
    return (
        <div className="v-pass-page-main-container">
            <TopNav vPass={true} />
            <div className="v-pass-content-main-container">
                <div className="v-pass-content-top-part">
                    <div className="back-shadow-v-pass-top-part"></div>
                    <div style={{scale: "2"}}>
                    <FirstCharacterCircle />
                    </div>
                </div>
                <div className="v-pass-content-bottom-part">
                    <div className="top-layer-bottom-part-v-pass"></div>
                    <div className="bottom-layer-bottom-part-v-pass">
                        <div className="progress-bar-main-container-part">
                            <div className="progress-bar-part-rec"></div>
                            <div className="progress-bar-part-circle"></div>
                        </div>
                        <div className="progress-bar-main-container-part">
                            <div className="progress-bar-part-rec"></div>
                            <div className="progress-bar-part-circle"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

