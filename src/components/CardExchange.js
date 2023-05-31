import { memo, useState, useCallback } from "react";
import SharePopup from "./SharePopup";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import PairSelectPopup from "./PairSelectPopup";
import styles from "./CardExchange.module.css";
const CardExchange = memo(({ tokenIn, inValue }) => {
  const [isSharePopupOpen, setSharePopupOpen] = useState(false);
  const navigate = useNavigate();
  const [isPairSelectPopupOpen, setPairSelectPopupOpen] = useState(false);
  const [isPairSelectPopup1Open, setPairSelectPopup1Open] = useState(false);

  const openSharePopup = useCallback(() => {
    setSharePopupOpen(true);
  }, []);

  const closeSharePopup = useCallback(() => {
    setSharePopupOpen(false);
  }, []);

  const onBtn4Click = useCallback(() => {
    navigate("/settings");
  }, [navigate]);

  const openPairSelectPopup = useCallback(() => {
    setPairSelectPopupOpen(true);
  }, []);

  const closePairSelectPopup = useCallback(() => {
    setPairSelectPopupOpen(false);
  }, []);

  const openPairSelectPopup1 = useCallback(() => {
    setPairSelectPopup1Open(true);
  }, []);

  const closePairSelectPopup1 = useCallback(() => {
    setPairSelectPopup1Open(false);
  }, []);

  const onBtn5Click = useCallback(() => {
    navigate("/orderconfirm");
  }, [navigate]);

  return (
    <>
      <div className={styles.cardExchange}>
        <div className={styles.buttonGroup}>
          <button className={styles.btn}>
            <img className={styles.iconreset} alt="" src="/iconreset1.svg" />
          </button>
          <button className={styles.btn}>
            <img className={styles.iconreset} alt="" src="/icongift11.svg" />
          </button>
          <button className={styles.btn} onClick={openSharePopup}>
            <img className={styles.iconshare} alt="" src="/iconshare1.svg" />
          </button>
          <button className={styles.btn} onClick={onBtn4Click}>
            <img className={styles.iconreset} alt="" src="/iconsetting.svg" />
          </button>
        </div>
        <div className={styles.pay}>
          <div className={styles.title}>
            <div className={styles.receiveEstimated}>Pay</div>
            <div className={styles.available500}>Available: 500</div>
          </div>
          <div className={styles.inputGroupwDropdown}>
            <button className={styles.dropdown} onClick={openPairSelectPopup}>
              <img
                className={styles.iconiconarrowDown}
                alt=""
                src="/iconiconarrowdown.svg"
              />
              <div className={styles.label}>{tokenIn}</div>
              <img className={styles.iconbusd} alt="" src="/iconbusd.svg" />
            </button>
            <input
              className={styles.input}
              type="text"
              placeholder="0"
              value={inValue}
            />
          </div>
        </div>
        <img
          className={styles.iconiconarrowDown2}
          alt=""
          src="/iconiconarrowdown21.svg"
        />
        <div className={styles.pay}>
          <div className={styles.title}>
            <div className={styles.receiveEstimated}>Receive (Estimated)</div>
            <div className={styles.available1200}>Available: 1,200</div>
          </div>
          <div className={styles.inputGroupwDropdown}>
            <button className={styles.dropdown} onClick={openPairSelectPopup1}>
              <img
                className={styles.iconiconarrowDown}
                alt=""
                src="/iconiconarrowdown.svg"
              />
              <div className={styles.label}>USDC</div>
              <img className={styles.iconbusd} alt="" src="/iconusdc21.svg" />
            </button>
            <input className={styles.input} type="text" placeholder="0" />
          </div>
        </div>
        <div className={styles.rate}>
          <div className={styles.receiveEstimated}>1 BUSD = 1.0005 USDC</div>
          <img
            className={styles.iconreset}
            alt=""
            src="/iconiconarrowexchangeswap.svg"
          />
        </div>
        <div className={styles.btn4}>
          <button className={styles.btn5} onClick={onBtn5Click}>
            <b className={styles.text}>Confirm Order</b>
          </button>
          <div className={styles.receiveEstimated}>
            Enter an amount to see more trading details
          </div>
        </div>
        <div className={styles.dividerhorizontal} />
      </div>
      {isSharePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSharePopup}
        >
          <SharePopup onClose={closeSharePopup} />
        </PortalPopup>
      )}
      {isPairSelectPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePairSelectPopup}
        >
          <PairSelectPopup onClose={closePairSelectPopup} />
        </PortalPopup>
      )}
      {isPairSelectPopup1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePairSelectPopup1}
        >
          <PairSelectPopup onClose={closePairSelectPopup1} />
        </PortalPopup>
      )}
    </>
  );
});

export default CardExchange;
