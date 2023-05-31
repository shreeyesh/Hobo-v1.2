import { memo } from "react";
import styles from "./Cardmining.module.css";
const Cardmining = memo(() => {
  return (
    <div className={styles.cardmining}>
      <div className={styles.top}>
        <div className={styles.iconicon2Coin}>
          <img className={styles.groupIcon} alt="" src="/group.svg" />
        </div>
        <div className={styles.tableCelladditionalComponen}>
          <div className={styles.header}>BUSD-USDT LP</div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.parent}>
          <b className={styles.b}>25.70%</b>
          <div className={styles.wethApr}>BUSD APR</div>
        </div>
        <b className={styles.b1}>/</b>
        <div className={styles.parent}>
          <b className={styles.b}>35.07%</b>
          <div className={styles.wethApr}>USDT APR</div>
        </div>
      </div>
      <div className={styles.mbListItemBasicParent}>
        <div className={styles.mbListItemBasic}>
          <div className={styles.mbListItemitemLeft}>
            <div className={styles.caption}>Reward Token</div>
          </div>
          <div className={styles.mbListItemitemRight}>
            <div className={styles.iconWrapper}>
              <img className={styles.iconftr} alt="" src="/iconftr1.svg" />
            </div>
          </div>
        </div>
        <div className={styles.mbListItemBasic}>
          <div className={styles.mbListItemitemLeft}>
            <div className={styles.caption}>Value Locked</div>
          </div>
          <div className={styles.mbListItemitemRight1}>
            <div className={styles.caption}>$635,577.11</div>
          </div>
        </div>
        <div className={styles.mbListItemBasic}>
          <div className={styles.mbListItemitemLeft}>
            <div className={styles.caption}>My Share</div>
          </div>
          <div className={styles.mbListItemitemRight1}>
            <div className={styles.caption}>$0 (0%)</div>
          </div>
        </div>
        <div className={styles.mbListItemBasic}>
          <div className={styles.mbListItemitemLeft}>
            <div className={styles.caption}>Available Balance</div>
          </div>
          <div className={styles.mbListItemitemRight1}>
            <div className={styles.caption}>$0</div>
          </div>
        </div>
        <div className={styles.mbListItemBasic}>
          <div className={styles.mbListItemitemLeft}>
            <div className={styles.caption}>My Reward</div>
          </div>
          <div className={styles.mbListItemitemRight4}>
            <div className={styles.caption}>$0</div>
            <div className={styles.iconWrapper}>
              <img className={styles.icongift} alt="" src="/icongift.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.btn}>
          <b className={styles.text}>StakeBUSD</b>
        </div>
        <div className={styles.btn}>
          <b className={styles.text}>StakeUSDT</b>
        </div>
      </div>
    </div>
  );
});

export default Cardmining;
