import { useState, useCallback } from "react";
import PairSelectPopup from "./PairSelectPopup";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./StakePopup.module.css";
const StakePopup = ({ onClose }) => {
  const [isPairSelectPopupOpen, setPairSelectPopupOpen] = useState(false);
  const navigate = useNavigate();

  const openPairSelectPopup = useCallback(() => {
    setPairSelectPopupOpen(true);
  }, []);

  const closePairSelectPopup = useCallback(() => {
    setPairSelectPopupOpen(false);
  }, []);

  const onBtnClick = useCallback(() => {
    navigate("/stake");
  }, [navigate]);

  const onTabItemstyle2ItemmediumClick = useCallback(() => {
    navigate("/unstake");
  }, [navigate]);

  return (
    <>
      <div className={styles.stakePopup}>
        <div className={styles.popUp}>
          <div className={styles.popUpChild} />
          <div className={styles.amountStake}>
            <div className={styles.receive}>
              <div className={styles.receive1}>
                <div className={styles.title}>
                  <div className={styles.stake}>Stake</div>
                  <div className={styles.available1200}>Available: 1,200</div>
                </div>
                <div className={styles.inputGroupwDropdown}>
                  <button
                    className={styles.dropdown}
                    onClick={openPairSelectPopup}
                  >
                    <img
                      className={styles.iconiconarrowDown}
                      alt=""
                      src="/iconiconarrowdown.svg"
                    />
                    <div className={styles.label}>CORE</div>
                    <img
                      className={styles.iconusdc}
                      alt=""
                      src="/coreIcon.png"
                    />
                  </button>
                  <input className={styles.input} type="text" placeholder="0" />
                </div>
              </div>
            </div>
            <div className={styles.rate}>
              <div className={styles.texttextParent}>
                <div className={styles.texttext}>
                  <div className={styles.stake}>Amount Staked</div>
                  <img
                    className={styles.iconWrapper}
                    alt=""
                    src="/iconwrapper.svg"
                  />
                </div>
                <div className={styles.rate1}>
                  <div className={styles.stake}>23.95721 ≈ 23.98</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.btn} onClick={onBtnClick}>
            <b className={styles.stake}>{`Stake & Claim Rewards`}</b>
          </div>
          <div className={styles.claimRewards}>
            <div className={styles.content}>
              <p className={styles.singleSidedLiquidityMining}>
                Single-Sided Liquidity Mining
              </p>
              <p className={styles.singleSidedLiquidityMining}>
                {`First, you need to deposit your tokens into the liquidity pools. Then, you wil get equal amount of stCore in return. `}
              </p>
            </div>
            <div className={styles.listInfo}>
              <div className={styles.mbListItemBasic}>
                <div className={styles.mbListItemitemLeft}>
                  <div className={styles.stake}>APY</div>
                </div>
                <div className={styles.mbListItemitemRight}>
                  <div className={styles.stake}>36.38%</div>
                </div>
              </div>
              <div className={styles.mbListItemBasic}>
                <div className={styles.mbListItemitemLeft}>
                  <div className={styles.stake}>Claimable Rewards</div>
                </div>
                <div className={styles.mbListItemitemRight1}>
                  <div className={styles.stake}>
                    <span>0.000540 Core</span>
                    <span className={styles.span}>{` - `}</span>
                    <span className={styles.span1}>$0.0022</span>
                  </div>
                </div>
              </div>
            </div>
            <button className={styles.btn1} onClick={onBtnClick}>
              <b className={styles.text2}>Claim Rewards</b>
            </button>
          </div>
          <button className={styles.iconcloseSmall} onClick={onClose}>
            <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
          </button>
          <div className={styles.tabsStyle2}>
            <div className={styles.tabItemstyle2Itemmedium}>
              <div className={styles.tab}>Stake</div>
            </div>
            <button
              className={styles.tabItemstyle2Itemmedium1}
              onClick={onTabItemstyle2ItemmediumClick}
            >
              <div className={styles.tab1}>Unstake</div>
            </button>
            <div className={styles.tabItemstyle2Itemmedium2}>
              <div className={styles.tab}>Tab</div>
            </div>
          </div>
        </div>
      </div>
      {isPairSelectPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePairSelectPopup}
        >
          <PairSelectPopup onClose={closePairSelectPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default StakePopup;
