import { memo } from "react";
import styles from "./GraphInfo.module.css";
const GraphInfo = memo(({ gainValue, recency }) => {
  return (
    <div className={styles.numberParent}>
      <div className={styles.number}>{gainValue}</div>
      <div className={styles.number1}>{recency}</div>
    </div>
  );
});

export default GraphInfo;
