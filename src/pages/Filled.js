import { useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AccountConnectedPopup from "../components/AccountConnectedPopup";
import PortalPopup from "../components/PortalPopup";
import ConnectWalletPopoup from "../components/ConnectWalletPopoup";
import Nav from "../components/Nav";
import TxnsuccessPopup from "../components/TxnsuccessPopup";
import styles from "./Filled.module.css";
const Filled = () => {
  const loc = useLocation();
  const navigate = useNavigate();
  console.log(loc.state.amount);
  const [isAccountConnectedPopupOpen, setAccountConnectedPopupOpen] =
    useState(false);
  const [isConnectWalletPopoupPopupOpen, setConnectWalletPopoupPopupOpen] =
    useState(false);
  const [isTxnsuccessPopupOpen, setTxnsuccessPopupOpen] = useState(false);

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

  const openTxnsuccessPopup = useCallback(() => {
    setTxnsuccessPopupOpen(true);
  }, []);

  const closeTxnsuccessPopup = useCallback(() => {
    setTxnsuccessPopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.filled}>
        <div className={styles.bg} />
        <Nav
          onMenuItemHorizontalitemClick={onMenuItemHorizontalitemClick}
          onMenuItemHorizontalitem1Click={onMenuItemHorizontalitem1Click}
          iconliquidityMining="/iconliquiditymining4.svg"
          icontradingMining="/icontradingmining3.svg"
          iconvftr="/iconvftr2.svg"
          onMenuItemHorizontalitem2Click={onMenuItemHorizontalitem2Click}
          openAccountConnectedPopup={openAccountConnectedPopup}
          group="/group21.svg"
          groupRight="10.63%"
          groupLeft="10.63%"
          openConnectWalletPopoupPopup={openConnectWalletPopoupPopup}
          groupTop="10.62%"
          groupBottom="10.63%"
          vector="/vector3.svg"
          iconmenu="/iconmenu.svg"
          image3="/image-3@2x.png"
        />
        <div className={styles.cardExchangeconfirm}>
          <div className={styles.nav}>
            <div className={styles.left}>
              <img
                className={styles.iconsetting}
                alt=""
                src="/iconiconarrowleft21.svg"
                onClick={onMenuItemHorizontalitem2Click}
              />
              <div className={styles.title}>Select Amount</div>
            </div>
            <img
              className={styles.iconsetting}
              alt=""
              src="/iconsetting1.svg"
            />
          </div>
          <div className={styles.pay}>
            <div className={styles.youPay}>You Pay</div>
            <div className={styles.parent}>
              <b className={styles.b}>320</b>
              <img className={styles.iconbusd} alt="" src="/iconbusd2.svg" />
            </div>
          </div>
          <div className={styles.pay}>
            <div className={styles.youPay}>You Receive</div>
            <div className={styles.parent}>
              <b className={styles.b}>320.16</b>
              <img className={styles.iconbusd} alt="" src="/iconusdc4.svg" />
            </div>
          </div>
          <div className={styles.outputIsEstimated}>
            Output is estimated. You will recei at least 317.90 USDC or the
            transaction will revert
          </div>
          <div className={styles.info}>
            <div className={styles.mbListItemBasic}>
              <div className={styles.mbListItemitemLeft}>
                <div className={styles.youPay}>Price</div>
              </div>
              <div className={styles.mbListItemitemRight}>
                <div className={styles.youPay}>1.000 BUSD per 1USDC</div>
                <div className={styles.iconWrapper}>
                  <img
                    className={styles.iconsetting}
                    alt=""
                    src="/iconiconarrowexchangeswap.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.mbListItemBasic}>
              <div className={styles.mbListItemitemLeft1}>
                <div className={styles.youPay}>Minimum received</div>
                <div className={styles.iconWrapper}>
                  <img
                    className={styles.iconquestionHelp}
                    alt=""
                    src="/iconquestionhelp1.svg"
                  />
                </div>
              </div>
              <div className={styles.mbListItemitemRight1}>
                <div className={styles.youPay}>317.90 USDC</div>
              </div>
            </div>
            <div className={styles.mbListItemBasic}>
              <div className={styles.mbListItemitemLeft1}>
                <div className={styles.youPay}>Price Impact</div>
                <div className={styles.iconWrapper}>
                  <img
                    className={styles.iconquestionHelp}
                    alt=""
                    src="/iconquestionhelp2.svg"
                  />
                </div>
              </div>
              <div className={styles.mbListItemitemRight1}>
                <div className={styles.youPay}>{`<0.01%`}</div>
              </div>
            </div>
            <div className={styles.mbListItemBasic}>
              <div className={styles.mbListItemitemLeft1}>
                <div className={styles.youPay}>Liquidity Provider Fee</div>
                <div className={styles.iconWrapper}>
                  <img
                    className={styles.iconquestionHelp}
                    alt=""
                    src="/iconquestionhelp3.svg"
                  />
                </div>
              </div>
              <div className={styles.mbListItemitemRight1}>
                <div className={styles.youPay}>3.2 BUSD</div>
              </div>
            </div>
          </div>
          <button className={styles.btn} onClick={openTxnsuccessPopup}>
            <b className={styles.text}>Confirm</b>
          </button>
        </div>
        <div className={styles.mbListicon6}>
          <img className={styles.coinIcon} alt="" src="/coin3.svg" />
          <div className={styles.left}>
            <div className={styles.busdusdc}>
              <span className={styles.busd}>BUSD/</span>
              <b className={styles.usdc}>USDC</b>
            </div>
            <img
              className={styles.iconsetting}
              alt=""
              src="/iconiconarrowexchangeswap.svg"
            />
          </div>
        </div>
        <b className={styles.usdc1}>1.0005 USDC</b>
        <div className={styles.price}>
          <div className={styles.youPay}>+227.543364 USDC</div>
          <div className={styles.number1}>Past 24 Hours</div>
        </div>
        <div className={styles.tags}>
          <button className={styles.tag}>
            <div className={styles.text1}>24H</div>
          </button>
          <button className={styles.tag}>
            <div className={styles.text1}>1W</div>
          </button>
          <button className={styles.tag}>
            <div className={styles.text1}>1M</div>
          </button>
        </div>
        <div className={styles.chart}>
          <div className={styles.chart1}>
            <div className={styles.chartChild} />
            <img className={styles.chartItem} alt="" src="/vector-174.svg" />
          </div>
          <div className={styles.time}>
            <div className={styles.youPay}>11:30 AM</div>
            <div className={styles.youPay}>7:30 PM</div>
            <div className={styles.youPay}>3:30 AM</div>
            <div className={styles.youPay}>10:35 AM</div>
          </div>
        </div>
        <div className={styles.history}>
          <div className={styles.orderHistory}>Order History</div>
          <div className={styles.table}>
            <div className={styles.list}>
              <div className={styles.div}>
                <div className={styles.tableCellmultilineLarge}>
                  <div className={styles.body}>
                    <div className={styles.iconWrapper}>
                      <div className={styles.iconmtv}>
                        <img
                          className={styles.image2Icon}
                          alt=""
                          src="/image-2@2x.png"
                        />
                      </div>
                    </div>
                    <div className={styles.text4}>
                      <div className={styles.title1}>132.51853983 MTV</div>
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
                  <div className={styles.text5}>Success</div>
                </div>
              </div>
              <div className={styles.div}>
                <div className={styles.tableCellmultilineLarge}>
                  <div className={styles.body}>
                    <div className={styles.iconWrapper}>
                      <img
                        className={styles.iconftr}
                        alt=""
                        src="/iconftr4.svg"
                      />
                    </div>
                    <div className={styles.text4}>
                      <div className={styles.title1}>1.109 FTR</div>
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
                  <div className={styles.text5}>Success</div>
                </div>
              </div>
            </div>
            <div className={styles.tableCell}>
              <div className={styles.tableCelltext2}>
                <div className={styles.text5}>Receiveed</div>
              </div>
              <div className={styles.tableCelltext3}>
                <div className={styles.text5}>Paid</div>
              </div>
              <div className={styles.tableCelltext4}>
                <div className={styles.text5}>Price</div>
              </div>
              <div className={styles.tableCelltext5}>
                <div className={styles.text5}>Status</div>
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
      {isTxnsuccessPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeTxnsuccessPopup}
        >
          <TxnsuccessPopup onClose={closeTxnsuccessPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Filled;
