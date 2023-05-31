import { memo } from "react";
import styles from "./GraphData.module.css";
const GraphData = memo(({ tokenOut, tokenIn, tokenIcon }) => {
  return (
    <div className={styles.mbListicon6}>
      <img className={styles.coinIcon} alt="" src={tokenIcon} />
      <div className={styles.info}>
        <div className={styles.busdusdc}>
          <span className={styles.busd}>{tokenIn}</span>
          <b className={styles.usdc}>{tokenOut}</b>
        </div>
        <img
          className={styles.iconiconarrowExchangeSwap}
          alt=""
          src="/iconiconarrowexchangeswap.svg"
        />
      </div>
    </div>
  );
});

export default GraphData;
