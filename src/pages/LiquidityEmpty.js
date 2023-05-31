import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AccountConnectedPopup from "../components/AccountConnectedPopup";
import PortalPopup from "../components/PortalPopup";
import ConnectWalletPopoup from "../components/ConnectWalletPopoup";
import Nav from "../components/Nav";
import styles from "./LiquidityEmpty.module.css";
const LiquidityEmpty = () => {
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

  const onBtnClick = useCallback(() => {
    navigate("/liquiditymanageradd");
  }, [navigate]);

  const onInputBigIcondefaultClick = useCallback(() => {
    navigate("/42liquidityselecttoken");
  }, [navigate]);

  const onInputBigIcondefault1Click = useCallback(() => {
    navigate("/42liquidityselecttoken");
  }, [navigate]);

  const onInputClick = useCallback(() => {
    navigate("/lp-select");
  }, [navigate]);

  const onBtn2Click = useCallback(() => {
    navigate("/liquiditydetails");
  }, [navigate]);

  const onBtn3Click = useCallback(() => {
    navigate("/liquiditydetails");
  }, [navigate]);

  return (
    <>
      <div className={styles.liquidityEmpty}>
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
              <button className={styles.btn} onClick={onBtnClick}>
                <b className={styles.text}>Add Liquidity</b>
              </button>
              <div className={styles.title}>Select a pair</div>
              <div className={styles.title1}>Select a pool</div>
              <div className={styles.inputGroup}>
                <button
                  className={styles.inputBigIcondefault}
                  onClick={onInputBigIcondefaultClick}
                >
                  <div className={styles.left}>
                    <div className={styles.iconWrapper}>
                      <img
                        className={styles.iconeth}
                        alt=""
                        src="/iconeth3.svg"
                      />
                    </div>
                    <div className={styles.label}>ETH</div>
                  </div>
                  <img
                    className={styles.iconiconarrowDown}
                    alt=""
                    src="/iconiconarrowdown1.svg"
                  />
                </button>
                <img
                  className={styles.iconiconarrowDown}
                  alt=""
                  src="/iconplus3.svg"
                />
                <button
                  className={styles.inputBigIcondefault1}
                  onClick={onInputBigIcondefault1Click}
                >
                  <div className={styles.left}>
                    <div className={styles.iconWrapper}>
                      <img
                        className={styles.iconeth}
                        alt=""
                        src="/iconusdc5.svg"
                      />
                    </div>
                    <div className={styles.label}>USDC</div>
                  </div>
                  <img
                    className={styles.iconiconarrowDown}
                    alt=""
                    src="/iconiconarrowdown1.svg"
                  />
                </button>
              </div>
              <div className={styles.btn1}>
                <b className={styles.text1}>Create a pool</b>
              </div>
              <button className={styles.input} onClick={onInputClick}>
                <div className={styles.text2}>0x75c2...ff34</div>
                <img
                  className={styles.iconiconarrowDown2}
                  alt=""
                  src="/iconiconarrowdown1.svg"
                />
              </button>
              <div className={styles.mbListbasic7}>
                <div className={styles.list}>
                  <div className={styles.mbListItemBasic}>
                    <div className={styles.mbListItemitemLeft}>
                      <div className={styles.content1}>Total Liquidity</div>
                    </div>
                    <div className={styles.mbListItemitemRight}>
                      <div className={styles.title2}>9,577.514455</div>
                      <div className={styles.iconWrapper}>
                        <img
                          className={styles.iconeth}
                          alt=""
                          src="/iconeth3.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.mbListItemBasic1}>
                    <div className={styles.mbListItemitemRight1}>
                      <div className={styles.title2}>10,831,937.7876</div>
                      <div className={styles.iconWrapper}>
                        <img
                          className={styles.iconeth}
                          alt=""
                          src="/iconusdc5.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Nav
          onMenuItemHorizontalitemClick={onMenuItemHorizontalitemClick}
          onMenuItemHorizontalitem1Click={onMenuItemHorizontalitem1Click}
          iconliquidityMining="/iconliquiditymining6.svg"
          icontradingMining="/icontradingmining4.svg"
          iconvftr="/iconvftr1.svg"
          onMenuItemHorizontalitem2Click={onMenuItemHorizontalitem2Click}
          openAccountConnectedPopup={openAccountConnectedPopup}
          group="/group41.svg"
          groupRight="10.62%"
          groupLeft="10.63%"
          openConnectWalletPopoupPopup={openConnectWalletPopoupPopup}
          groupTop="10.63%"
          groupBottom="10.62%"
          vector="/vector3.svg"
          iconmenu="/iconmenu1.svg"
          image3="/image-3@2x.png"
        />
        <div className={styles.myLiquidity}>My Liquidity</div>
        <div className={styles.table}>
          <div className={styles.list1}>
            <div className={styles.div}>
              <div className={styles.tableCelladditionalComponen}>
                <div className={styles.left2}>
                  <img className={styles.avatarIcon} alt="" src="/avatar.svg" />
                  <div className={styles.title2}>0x75f5...1666</div>
                </div>
                <img className={styles.iconeth} alt="" src="/iconshare1.svg" />
              </div>
              <div className={styles.tableCellheader}>
                <div className={styles.header}>
                  1.104008 WETH / 2,888.28 USDC
                </div>
              </div>
              <div className={styles.tableCelladditionalComponen1}>
                <div className={styles.btn2}>
                  <button className={styles.btn3} onClick={onBtn2Click}>
                    <b className={styles.text4}>Manager</b>
                  </button>
                  <button className={styles.btn3} onClick={onBtn3Click}>
                    <b className={styles.text4}>Details</b>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.div}>
              <div className={styles.tableCelladditionalComponen}>
                <div className={styles.left2}>
                  <img
                    className={styles.avatarIcon}
                    alt=""
                    src="/avatar1.svg"
                  />
                  <div className={styles.title2}>0x3đ1...077b</div>
                </div>
                <img className={styles.iconeth} alt="" src="/iconshare1.svg" />
              </div>
              <div className={styles.tableCellheader}>
                <div className={styles.header}>300 DAIDAI / 300 USDC</div>
              </div>
              <div className={styles.tableCelladditionalComponen3}>
                <div className={styles.btn2}>
                  <div className={styles.btn6}>
                    <b className={styles.content1}>Manager</b>
                  </div>
                  <div className={styles.btn6}>
                    <b className={styles.content1}>Details</b>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.div}>
              <div className={styles.tableCelladditionalComponen}>
                <div className={styles.left2}>
                  <img
                    className={styles.avatarIcon}
                    alt=""
                    src="/avatar2.svg"
                  />
                  <div className={styles.title2}>0x3đ1...077b</div>
                </div>
                <img className={styles.iconeth} alt="" src="/iconshare1.svg" />
              </div>
              <div className={styles.tableCellheader}>
                <div className={styles.header}>500 BUSD / 500 USDT</div>
              </div>
              <div className={styles.tableCelladditionalComponen3}>
                <div className={styles.btn2}>
                  <div className={styles.btn6}>
                    <b className={styles.content1}>Manager</b>
                  </div>
                  <div className={styles.btn6}>
                    <b className={styles.content1}>Details</b>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.div}>
              <div className={styles.tableCelladditionalComponen}>
                <div className={styles.left2}>
                  <img
                    className={styles.avatarIcon}
                    alt=""
                    src="/avatar3.svg"
                  />
                  <div className={styles.title2}>0x75f5...1666</div>
                </div>
                <img className={styles.iconeth} alt="" src="/iconshare1.svg" />
              </div>
              <div className={styles.tableCellheader}>
                <div className={styles.header}>
                  0.624822 WETH / 339,97585406 1INCH
                </div>
              </div>
              <div className={styles.tableCelladditionalComponen3}>
                <div className={styles.btn2}>
                  <div className={styles.btn6}>
                    <b className={styles.content1}>Manager</b>
                  </div>
                  <div className={styles.btn6}>
                    <b className={styles.content1}>Details</b>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.div}>
              <div className={styles.tableCelladditionalComponen}>
                <div className={styles.left2}>
                  <img
                    className={styles.avatarIcon}
                    alt=""
                    src="/avatar4.svg"
                  />
                  <div className={styles.title2}>0x3đ1...077b</div>
                </div>
                <img className={styles.iconeth} alt="" src="/iconshare1.svg" />
              </div>
              <div className={styles.tableCellheader}>
                <div className={styles.header}>
                  100 DAIDAI / 0,03837881 WETH
                </div>
              </div>
              <div className={styles.tableCelladditionalComponen3}>
                <div className={styles.btn2}>
                  <div className={styles.btn6}>
                    <b className={styles.content1}>Manager</b>
                  </div>
                  <div className={styles.btn6}>
                    <b className={styles.content1}>Details</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.tableCell}>
            <div className={styles.tableCelltext}>
              <div className={styles.text18}>Pool</div>
            </div>
            <div className={styles.tableCelltext1}>
              <div className={styles.text18}>My Liquidity</div>
            </div>
            <div className={styles.tableCelltext2}>
              <div className={styles.text18}>Action</div>
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

export default LiquidityEmpty;
