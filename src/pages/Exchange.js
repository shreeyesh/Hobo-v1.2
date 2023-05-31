import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AccountConnectedPopup from "../components/AccountConnectedPopup";
import PortalPopup from "../components/PortalPopup";
import ConnectWalletPopoup from "../components/ConnectWalletPopoup";
import Nav from "../components/Nav";
import CardExchange from "../components/CardExchange";
import GraphData from "../components/GraphData";
import GraphInfo from "../components/GraphInfo";
import OrderHistory from "../components/OrderHistory";
import styles from "./Exchange.module.css";
const Exchange = () => {
  const navigate = useNavigate();
  const [isAccountConnectedPopupOpen, setAccountConnectedPopupOpen] =
    useState(false);
  const [isConnectWalletPopoupPopupOpen, setConnectWalletPopoupPopupOpen] =
    useState(false);

  const onMenuItemHorizontalitemClick = useCallback(() => {
    navigate("/3exchange");
  }, [navigate]);

  const onMenuItemHorizontalitem1Click = useCallback(() => {
    navigate("/4liquidity");
  }, [navigate]);

  const onMenuItemHorizontalitem2Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const openAccountConnectedPopup = useCallback(() => {
    setAccountConnectedPopupOpen(true);
  }, []);

  const closeAccountConnectedPopup = useCallback(() => {
    setAccountConnectedPopupOpen(false);
  }, []);

  const openConnectWalletPopoupPopup = useCallback(() => {
    setConnectWalletPopoupPopupOpen(true);
  }, []);

  const closeConnectWalletPopoupPopup = useCallback(() => {
    setConnectWalletPopoupPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.exchange}>
        <div className={styles.bg} />
        <Nav
          onMenuItemHorizontalitemClick={onMenuItemHorizontalitemClick}
          onMenuItemHorizontalitem1Click={onMenuItemHorizontalitem1Click}
          iconliquidityMining="/iconliquiditymining11.svg"
          icontradingMining="/icontradingmining11.svg"
          iconvftr="/iconvftr1.svg"
          onMenuItemHorizontalitem2Click={onMenuItemHorizontalitem2Click}
          openAccountConnectedPopup={openAccountConnectedPopup}
          group="/group6.svg"
          openConnectWalletPopoupPopup={openConnectWalletPopoupPopup}
          vector="/vector3.svg"
          iconmenu="/iconmenu.svg"
          image3="/image-3@2x.png"
        />
        <CardExchange tokenIn="BUSD" />
        <GraphData tokenOut="USDC" tokenIn="BUSD/" tokenIcon="/coin1.svg" />
        <b className={styles.usdc}>1.0005 USDC</b>
        <GraphInfo gainValue="+227.543364 USDC" recency="Past 24 Hours" />
        <div className={styles.tags}>
          <button className={styles.tag}>
            <div className={styles.text}>24H</div>
          </button>
          <button className={styles.tag}>
            <div className={styles.text}>1W</div>
          </button>
          <button className={styles.tag}>
            <div className={styles.text}>1M</div>
          </button>
        </div>
        <div className={styles.chart}>
          <div className={styles.chart1}>
            <div className={styles.chartChild} />
            <img className={styles.chartItem} alt="" src="/vector-171.svg" />
          </div>
          <div className={styles.time}>
            <div className={styles.am}>11:30 AM</div>
            <div className={styles.am}>7:30 PM</div>
            <div className={styles.am}>3:30 AM</div>
            <div className={styles.am}>10:35 AM</div>
          </div>
        </div>
        <OrderHistory priceB=" 461,07790652 " priceA=" 0,00001080" />
      </div>
      {isAccountConnectedPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAccountConnectedPopup}
        >
          <AccountConnectedPopup onClose={closeAccountConnectedPopup} />
        </PortalPopup>
      )}
      {isConnectWalletPopoupPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeConnectWalletPopoupPopup}
        >
          <ConnectWalletPopoup onClose={closeConnectWalletPopoupPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Exchange;
