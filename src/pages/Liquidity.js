import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AccountConnectedPopup from "../components/AccountConnectedPopup";
import PortalPopup from "../components/PortalPopup";
import ConnectWalletPopoup from "../components/ConnectWalletPopoup";
import Nav from "../components/Nav";
import styles from "./Liquidity.module.css";
const Liquidity = () => {
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

  const onBtn1Click = useCallback(() => {
    navigate("/liquidityempty");
  }, [navigate]);

  return (
    <>
      <div className={styles.liquidity}>
        <div className={styles.right}>
          <div className={styles.cardaddLiquid}>
            <div className={styles.bottom}>
              <img className={styles.bgIcon} alt="" src="/bg.svg" />
              <div className={styles.content}>
                By adding liquidity, you will earn fees proportional to your
                share of the pool on all trades for this pair. Fees are added to
                the pool, accrue in real time, and can be claimed when you
                withdraw your liquidity.
              </div>
            </div>
            <div className={styles.top}>
              <div className={styles.bg} />
              <div className={styles.btn}>
                <b className={styles.text}>Add Liquidity</b>
              </div>
              <div className={styles.title}>Select a pair</div>
              <div className={styles.title1}>Select a pool</div>
              <div className={styles.inputGroup}>
                <div className={styles.inputBigIcondefault}>
                  <div className={styles.left}>
                    <div className={styles.iconWrapper}>
                      <img
                        className={styles.iconeth}
                        alt=""
                        src="/iconeth1.svg"
                      />
                    </div>
                    <div className={styles.label}>ETH</div>
                  </div>
                  <img
                    className={styles.iconiconarrowDown}
                    alt=""
                    src="/iconiconarrowdown.svg"
                  />
                </div>
                <img
                  className={styles.iconiconarrowDown}
                  alt=""
                  src="/iconplus3.svg"
                />
                <div className={styles.inputBigIcondefault1}>
                  <div className={styles.left}>
                    <div className={styles.iconWrapper}>
                      <img
                        className={styles.iconeth}
                        alt=""
                        src="/iconusdc21.svg"
                      />
                    </div>
                    <div className={styles.label}>USDC</div>
                  </div>
                  <img
                    className={styles.iconiconarrowDown}
                    alt=""
                    src="/iconiconarrowdown.svg"
                  />
                </div>
              </div>
              <div className={styles.btn1}>
                <b className={styles.text1}>Create a pool</b>
              </div>
              <div className={styles.input}>
                <div className={styles.text2}>0x75c2...ff34</div>
                <img
                  className={styles.iconiconarrowDown2}
                  alt=""
                  src="/iconiconarrowdown.svg"
                />
              </div>
              <div className={styles.mbListbasic7}>
                <div className={styles.list}>
                  <div className={styles.mbListItemBasic}>
                    <div className={styles.mbListItemitemLeft}>
                      <div className={styles.text}>Total Liquidity</div>
                    </div>
                    <div className={styles.mbListItemitemRight}>
                      <div className={styles.label}>9,577.514455</div>
                      <div className={styles.iconWrapper}>
                        <img
                          className={styles.iconeth}
                          alt=""
                          src="/iconeth2.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.mbListItemBasic1}>
                    <div className={styles.mbListItemitemRight1}>
                      <div className={styles.label}>10,831,937.7876</div>
                      <div className={styles.iconWrapper}>
                        <img
                          className={styles.iconeth}
                          alt=""
                          src="/iconusdc21.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.myLiquidity}>My Liquidity</div>
        <div className={styles.table}>
          <div className={styles.tableCellheader}>
            <div className={styles.header}>No results found</div>
          </div>
          <div className={styles.title4}>
            <div className={styles.tableCelltext}>
              <div className={styles.text3}>Pool</div>
            </div>
            <div className={styles.tableCelltext1}>
              <div className={styles.text3}>My Liquidity</div>
            </div>
            <div className={styles.tableCelltext2}>
              <div className={styles.text3}>Action</div>
            </div>
          </div>
        </div>
        <Nav
          onMenuItemHorizontalitemClick={onMenuItemHorizontalitemClick}
          onMenuItemHorizontalitem1Click={onMenuItemHorizontalitem1Click}
          iconliquidityMining="/iconliquiditymining5.svg"
          icontradingMining="/icontradingmining11.svg"
          iconvftr="/iconvftr1.svg"
          onMenuItemHorizontalitem2Click={onMenuItemHorizontalitem2Click}
          openAccountConnectedPopup={openAccountConnectedPopup}
          group="/group31.svg"
          groupRight="10.62%"
          groupLeft="10.62%"
          openConnectWalletPopoupPopup={openConnectWalletPopoupPopup}
          groupTop="10.63%"
          groupBottom="10.62%"
          vector="/vector3.svg"
          iconmenu="/iconmenu.svg"
          image3="/image-3@2x.png"
        />
        <div className={styles.action}>
          <div className={styles.mask} />
          <div className={styles.modal}>
            <div className={styles.title5}>Risk Disclaimer</div>
            <div className={styles.content2}>
              <div className={styles.input1}>
                <div className={styles.text6}>
                  Market making and liquidity provision involve risk of loss and
                  are not suitable for every user. The valuation and prices of
                  token assets may fluctuate substantially, and, as a result,
                  users may see profits that are below expectations, or even
                  sustain losses.
                </div>
              </div>
              <div className={styles.checkbox1}>
                <div className={styles.checkbox}>
                  <img
                    className={styles.iconiconarrowDown}
                    alt=""
                    src="/checkboxinput.svg"
                  />
                  <div className={styles.text}>
                    <p className={styles.iHaveRead}>
                      I have read, understand, and agree to the
                    </p>
                    <p className={styles.termsOfService}>Terms of Service.</p>
                  </div>
                </div>
              </div>
            </div>
            <button className={styles.btn2} onClick={onBtn1Click}>
              <b className={styles.text8}>Continue</b>
            </button>
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

export default Liquidity;
