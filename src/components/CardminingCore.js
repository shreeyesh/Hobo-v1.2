import { useState,useCallback,memo } from "react";
import styles from "./CardminingCore.module.css";
import StakePopup from "../components/StakePopup";
import PortalPopup from "../components/PortalPopup";

const CardminingCore = memo(
  ({ aprValue, lockedValue, rate, availableBalance, rewardValue }) => {
    const [isStakePopupOpen, setStakePopupOpen] = useState(false);
const openStakePopup = useCallback(() => {
  setStakePopupOpen(true);
}, []);
const closeStakePopup = useCallback(() => {
  setStakePopupOpen(false);
}, []);
    return (
      <div className={styles.cardmining}>
        <div className={styles.top}>
          <div className={styles.iconicon2Coin}>
            <img className={styles.groupIcon} alt="" src="/group1.svg"/>
          </div>
          <div className={styles.tableCelladditionalComponen}>
            <div className={styles.header}> CORE</div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.parent}>
            <b className={styles.b}>16.14%</b>
            <div className={styles.wethApr}>WETH APR</div>
          </div>
          <b className={styles.b1}>/</b>
          <div className={styles.group}>
            <b className={styles.b}>{aprValue}</b>
            <div className={styles.wethApr}>APR</div>
          </div>
        </div>
        <div className={styles.mbListItemBasicParent}>
          <div className={styles.mbListItemBasic}>
            <div className={styles.mbListItemitemLeft}>
              <div className={styles.caption}>Reward Token</div>
            </div>
            <div className={styles.mbListItemitemRight}>
              <div className={styles.iconicon2Coin1}>
                <img className={styles.groupIcon1} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.mbListItemBasic}>
            <div className={styles.mbListItemitemLeft}>
              <div className={styles.caption}>Value Locked</div>
            </div>
            <div className={styles.mbListItemitemRight1}>
              <div className={styles.caption}>{lockedValue}</div>
            </div>
          </div>
          <div className={styles.mbListItemBasic}>
            <div className={styles.mbListItemitemLeft}>
              <div className={styles.caption}>Rate</div>
            </div>
            <div className={styles.mbListItemitemRight1}>
              <div className={styles.caption}>{rate}</div>
            </div>
          </div>
          <div className={styles.mbListItemBasic}>
            <div className={styles.mbListItemitemLeft}>
              <div className={styles.caption}>Available Balance</div>
            </div>
            <div className={styles.mbListItemitemRight1}>
              <div className={styles.caption}>{availableBalance}</div>
            </div>
          </div>
          <div className={styles.mbListItemBasic}>
            <div className={styles.mbListItemitemLeft}>
              <div className={styles.caption}>My Reward</div>
            </div>
            <div className={styles.mbListItemitemRight4}>
              <div className={styles.caption}>{rewardValue}</div>
              <div className={styles.iconWrapper}>
                <img className={styles.icongift} alt="" src="/icongift.svg" />
              </div>
            </div>
          </div>
        </div>
        {isStakePopupOpen && (
      <PortalPopup
        overlayColor="rgba(113, 113, 113, 0.3)"
        placement="Centered"
        onOutsideClick={closeStakePopup}
      >
        <StakePopup onClose={closeStakePopup} />
      </PortalPopup>
    )}
        <div className={styles.bottom}>
        <button className={styles.btn} onClick={openStakePopup}>
            <b className={styles.text}>Stake</b>
          </button>
        </div>
      </div>
      
    );
  }
);

export default CardminingCore;
