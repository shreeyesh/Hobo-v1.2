import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./StakePopUpComp.module.css";
const StakePopUpComp = memo(() => {
  const navigate = useNavigate();

  const onTabItemstyle2ItemmediumContainer4Click = useCallback(() => {
    navigate("/unstake");
  }, [navigate]);

  return (
    <div className={styles.popUp}>
      <div className={styles.popUpChild} />
      <div className={styles.btn}>
        <b className={styles.text}>Stake</b>
      </div>
      <button className={styles.iconcloseSmall} >
        <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
        <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      </button>
      <div className={styles.tabsStyle2Parent}>
        <div className={styles.tabsStyle2}>
          <div className={styles.tabItemstyle2Itemmedium}>
            <div className={styles.tab}>Stake</div>
          </div>
          <div
            className={styles.tabItemstyle2Itemmedium1}
            onClick={onTabItemstyle2ItemmediumContainer4Click}
          >
            <div className={styles.tab}>Unstake</div>
          </div>
          <div className={styles.tabItemstyle2Itemmedium2}>
            <div className={styles.tab}>Tab</div>
          </div>
        </div>
        <div className={styles.claimRewards}>
          <div className={styles.content}>
            <p className={styles.singleSidedLiquidityMining}>
              Single-Sided Liquidity Mining
            </p>
            <p className={styles.singleSidedLiquidityMining}>
              {`First, you need to deposit your tokens into the liquidity pools. Then, use the returned tokens and stake them to the `}
              <span className={styles.wethusdc}>stCORE/USDC</span> liquidity pool
              on this page.
            </p>
          </div>
          <div className={styles.listInfo}>
            <div className={styles.mbListItemBasic}>
              <div className={styles.mbListItemitemLeft}>
                <div className={styles.text}>APY</div>
              </div>
              <div className={styles.mbListItemitemRight}>
                <div className={styles.text}>36.38%</div>
              </div>
            </div>
            <div className={styles.mbListItemBasic}>
              <div className={styles.mbListItemitemLeft}>
                <div className={styles.text}>Claimable Rewards</div>
              </div>
              <div className={styles.mbListItemitemRight1}>
                <div className={styles.text}>
                  <span>0.000540 FTR</span>
                  <span className={styles.span}>{` - `}</span>
                  <span className={styles.span1}>$0.0022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.amountStake}>
          <div className={styles.receive}>
            <div className={styles.title}>
              <div className={styles.tab}>Stake</div>
              <div className={styles.available1200}>Available: 1,200</div>
            </div>
            <div className={styles.receive1}>
              <div className={styles.receive2}>
                <div className={styles.title}>
                  <div className={styles.text}>Stake</div>
                  <div className={styles.available12001}>Available: 1,200</div>
                </div>
                <div className={styles.inputGroupwDropdown}>
                  <div className={styles.dropdown}>
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
                  </div>
                  <div className={styles.input}>
                    {/* <b className={styles.label1}>0</b> */}
                    <input className={styles.input} type="text" placeholder="0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rate}>
            <div className={styles.texttextParent}>
              <div className={styles.texttext}>
                <div className={styles.text}>Amount Staked</div>
                <img
                  className={styles.iconWrapper}
                  alt=""
                  src="/iconwrapper4.svg"
                />
              </div>
              <div className={styles.rate1}>
                <div className={styles.text}>23.95721 ≈ 23.98</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default StakePopUpComp;
