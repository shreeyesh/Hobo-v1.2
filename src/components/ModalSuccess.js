import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ModalSuccess.module.css";
const ModalSuccess = memo(() => {
  const navigate = useNavigate();

  const onIconcloseSmallClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onBtnClick = useCallback(() => {
    window.open("https://etherscan.io/");
  }, []);

  return (
    <div className={styles.modalSuccess}>
      <div className={styles.nav}>
        <button
          className={styles.iconcloseSmall}
          onClick={onIconcloseSmallClick}
        >
          <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
        </button>
      </div>
      <div className={styles.illus1} />
      <div className={styles.info}>
        <div className={styles.title}>Transaction Submitted</div>
        <div className={styles.title1}>Exchanging your assets</div>
      </div>
      <button className={styles.btn} onClick={onBtnClick}>
        <b className={styles.text}>View on Etherscan</b>
      </button>
    </div>
  );
});

export default ModalSuccess;
