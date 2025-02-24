import clickAudio from "../../click_audio_func/click_audio_func";
import hoverAudio from "../../hover_audio_func/hover_audio_func";
import TopNav from "../../top_nav_comp/js/topNav";
import "../css/rank.css";
import { useEffect, useRef, useState } from "react";
export default function RankPage() {
return (
    <div className="rank-page-main-container">
        <TopNav rank={true} />
        <div className="rank-show-main-container">
            <div className="rank-page-top-part">
                <div className="rank-name-top-part">Dimond II</div>
                <div className="rank-image-middle-part"><i class="fa-solid fa-gem"></i></div>
                <div className="rank-progress-main-main-container">
                    <div className="ranks-goal-current-container">
                        <div>Dimond II <i class="fa-solid fa-gem"></i></div>
                        <div>Dimond III <i class="fa-solid fa-gem"></i></div>
                    </div>
                <div className="rank-progress-main-container">
                    <div className="rank-progress-part1"></div>
                    <div className="rank-progress-part2"></div>
                    <div className="rank-progress-part3"></div>
                </div>
                </div>
            <div className="rank-page-bottom-part">
                <div className="wins-losts-status-main-container">
                    <div className="wins-losts-status">Wins</div>
                    <div className="wins-losts-status-count">20</div>
                </div>
                <div className="wins-losts-status-main-container">
                    <div className="wins-losts-status">Losts</div>
                    <div className="wins-losts-status-count">8</div>
                </div>
            </div>
            </div>
        </div>
    </div>
)
}
