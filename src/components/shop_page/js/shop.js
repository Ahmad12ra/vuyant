import { useEffect, useRef } from "react";
import "../css/shop.css";
import TopNav from "../../top_nav_comp/js/topNav";
import Verants from "../../verants_comp/js/verants";
import clickAudio from "../../click_audio_func/click_audio_func";
import hoverAudio from "../../hover_audio_func/hover_audio_func";
import { FirstCharacterCircle } from "../../characters_file/js/characters";
import { FirstCursor } from "../../cursors_file/js/cursors";
import { FirstHat } from "../../hats_file/js/hats";
export default function ShopPage() {
  const shopMainItemsContainer = useRef(null);

  useEffect(() => {
    Array.from(shopMainItemsContainer.current.children).forEach((el) => {
      el.onmouseover = () => {
        hoverAudio();
      };

      el.onclick = () => clickAudio();
    });
  }, []);

  return (
    <div className="shop-page-main-container">
      <TopNav shop={true} />;
      <div ref={shopMainItemsContainer} className="shop-main-items-container">
        <div className="shop-item shop-main-bundel-item">
          <div className="items-cover-shop"></div>
          <div className="shop-item-main-container">
            <FirstCharacterCircle />
            <FirstHat />
            <FirstCursor />
          </div>
          <div className="shop-price-main-container">
            <div className="verants-shop-icon">
              <Verants scale={0.4} />
            </div>
            <div className="shop-item-price-count">2,050</div>
          </div>
        </div>
        <div className="shop-item shop-item-one">
          <div className="items-cover-shop"></div>
          <div className="shop-price-main-container">
            <div className="verants-shop-icon">
              <Verants scale={0.4} />
            </div>
            <div className="shop-item-price-count">1,000</div>
          </div>
        </div>
        <div className="shop-item shop-item-two">
          <div className="items-cover-shop"></div>
          <div className="shop-price-main-container">
            <div className="verants-shop-icon">
              <Verants scale={0.4} />
            </div>
            <div className="shop-item-price-count">600</div>
          </div>
        </div>
        <div className="shop-item shop-item-three">
          <div className="items-cover-shop"></div>
          <div className="shop-price-main-container">
            <div className="verants-shop-icon">
              <Verants scale={0.4} />
            </div>
            <div className="shop-item-price-count">200</div>
          </div>
        </div>
      </div>
    </div>
  );
}
