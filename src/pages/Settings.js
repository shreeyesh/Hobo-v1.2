import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AccountConnectedPopup from "../components/AccountConnectedPopup";
import PortalPopup from "../components/PortalPopup";
import ConnectWalletPopoup from "../components/ConnectWalletPopoup";
import Nav from "../components/Nav";
import styles from "./Settings.module.css";
const Settings = () => {
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

  const onIconiconarrowLeft2Click = useCallback(() => {
    navigate("/33typing");
  }, [navigate]);

  return (
    <>
      <div className={styles.settings}>
        <div className={styles.bg} />
        <Nav
          onMenuItemHorizontalitemClick={onMenuItemHorizontalitemClick}
          onMenuItemHorizontalitem1Click={onMenuItemHorizontalitem1Click}
          iconliquidityMining="/iconliquiditymining2.svg"
          icontradingMining="/icontradingmining2.svg"
          iconvftr="/iconvftr11.svg"
          onMenuItemHorizontalitem2Click={onMenuItemHorizontalitem2Click}
          openAccountConnectedPopup={openAccountConnectedPopup}
          group="/group11.svg"
          groupRight="10.63%"
          groupLeft="10.63%"
          openConnectWalletPopoupPopup={openConnectWalletPopoupPopup}
          groupTop="10.62%"
          groupBottom="10.63%"
          vector="/vector3.svg"
          iconmenu="/iconmenu1.svg"
          image3="/image-3@2x.png"
        />
        <div className={styles.cardExchange}>
          <div className={styles.body}>
            <div className={styles.nav}>
              <div className={styles.left}>
                <img
                  className={styles.iconiconarrowLeft2}
                  alt=""
                  src="/iconiconarrowleft211.svg"
                  onClick={onIconiconarrowLeft2Click}
                />
                <div className={styles.title}>Exchange Settings</div>
              </div>
            </div>
            <div className={styles.slippageTolerance}>
              <div className={styles.title1}>
                <div className={styles.expertMode}>Slippage Tolerance</div>
              </div>
              <div className={styles.tags}>
                <button className={styles.tag}>
                  <div className={styles.text}>0.5%</div>
                </button>
                <button className={styles.tag}>
                  <div className={styles.text}>1%</div>
                </button>
                <button className={styles.tag}>
                  <div className={styles.text}>3%</div>
                </button>
                <input className={styles.input} type="text" placeholder="20" />
                <div className={styles.number}>%</div>
              </div>
            </div>
            <div className={styles.slippageTolerance}>
              <div className={styles.title1}>
                <div className={styles.expertMode}>Transaction Deadline</div>
              </div>
              <div className={styles.tags}>
                <input className={styles.input} type="text" placeholder="20" />
                <div className={styles.number}>Min</div>
              </div>
            </div>
            <div className={styles.transactionDeadline2}>
              <div className={styles.title3}>
                <div className={styles.expertMode}>Expert Mode</div>
              </div>
              <button className={styles.switch}>
                <img className={styles.nobIcon} alt="" src="/nob1.svg" />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.mbListicon6}>
          <img className={styles.coinIcon} alt="" src="/coin2.svg" />
          <div className={styles.left}>
            <div className={styles.busdusdc}>
              <span className={styles.busd}>BUSD/</span>
              <b className={styles.usdc}>USDC</b>
            </div>
            <img
              className={styles.nobIcon}
              alt=""
              src="/iconiconarrowexchangeswap.svg"
            />
          </div>
        </div>
        <b className={styles.usdc1}>1.0005 USDC</b>
        <div className={styles.price}>
          <div className={styles.number}>+227.543364 USDC</div>
          <div className={styles.number1}>Past 24 Hours</div>
        </div>
        <div className={styles.tag3}>
          <button className={styles.tag4}>
            <div className={styles.text}>24H</div>
          </button>
          <button className={styles.tag4}>
            <div className={styles.text}>1W</div>
          </button>
          <button className={styles.tag4}>
            <div className={styles.text}>1M</div>
          </button>
        </div>
        <div className={styles.chart}>
          <div className={styles.chart1}>
            <div className={styles.chartChild} />
            <img className={styles.chartItem} alt="" src="/vector-172.svg" />
          </div>
          <div className={styles.time}>
            <div className={styles.number}>11:30 AM</div>
            <div className={styles.number}>7:30 PM</div>
            <div className={styles.number}>3:30 AM</div>
            <div className={styles.number}>10:35 AM</div>
          </div>
        </div>
        <div className={styles.history}>
          <div className={styles.orderHistory}>Order History</div>
          <div className={styles.table}>
            <div className={styles.list}>
              <div className={styles.div}>
                <div className={styles.tableCellmultilineLarge}>
                  <div className={styles.body1}>
                    <div className={styles.iconWrapper}>
                      <div className={styles.iconmtv}>
                        <img
                          className={styles.image2Icon}
                          alt=""
                          src="/image-2@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.text8}>
                      <div className={styles.expertMode}>132.51853983 MTV</div>
                      <div className={styles.subtitle}>16 hrs</div>
                    </div>
                  </div>
                </div>
                <div className={styles.tableCellheader}>
                  <div className={styles.header}>0,00143200 BNB</div>
                </div>
                <div className={styles.tableCellheader1}>
                  <div className={styles.header}>
                    <span>{`MTV / `}</span>
                    <span className={styles.bnb}>BNB</span>
                    <span> 0,00001080</span>
                  </div>
                </div>
                <div className={styles.tableCelltext}>
                  <div className={styles.text9}>Success</div>
                </div>
              </div>
              <div className={styles.div}>
                <div className={styles.tableCellmultilineLarge}>
                  <div className={styles.body1}>
                    <div className={styles.iconWrapper}>
                      <img
                        className={styles.iconftr}
                        alt=""
                        src="/iconftr21.svg"
                      />
                    </div>
                    <div className={styles.text8}>
                      <div className={styles.expertMode}>1.109 FTR</div>
                      <div className={styles.subtitle}>16 hrs</div>
                    </div>
                  </div>
                </div>
                <div className={styles.tableCellheader}>
                  <div className={styles.header}>2.4 BNB</div>
                </div>
                <div className={styles.tableCellheader1}>
                  <div className={styles.header}>
                    <span>{`FTR / `}</span>
                    <span className={styles.bnb}>BNB</span>
                    <span>{` 461,07790652 `}</span>
                  </div>
                </div>
                <div className={styles.tableCelltext}>
                  <div className={styles.text9}>Success</div>
                </div>
              </div>
            </div>
            <div className={styles.tableCell}>
              <div className={styles.tableCelltext2}>
                <div className={styles.text9}>Receiveed</div>
              </div>
              <div className={styles.tableCelltext3}>
                <div className={styles.text9}>Paid</div>
              </div>
              <div className={styles.tableCelltext4}>
                <div className={styles.text9}>Price</div>
              </div>
              <div className={styles.tableCelltext5}>
                <div className={styles.text9}>Status</div>
              </div>
            </div>
          </div>
        </div>
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

export default Settings;
