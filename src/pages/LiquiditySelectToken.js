import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AccountConnectedPopup from "../components/AccountConnectedPopup";
import PortalPopup from "../components/PortalPopup";
import ConnectWalletPopoup from "../components/ConnectWalletPopoup";
import Nav from "../components/Nav";
import styles from "./LiquiditySelectToken.module.css";
const LiquiditySelectToken = () => {
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

  const onMbListItemBasicContainer1Click = useCallback(() => {
    navigate("/liquidityempty");
  }, [navigate]);

  const onMbListItemBasicContainer2Click = useCallback(() => {
    navigate("/liquidityempty");
  }, [navigate]);

  return (
    <>
      <div className={styles.liquiditySelectToken}>
        <div className={styles.right}>
          <div className={styles.selectAPair}>
            <div className={styles.bg} />
            <div className={styles.titleicon}>
              <img
                className={styles.iconiconarrowLeft2}
                alt=""
                src="/iconiconarrowleft21.svg"
              />
              <div className={styles.title}>Select A Pair</div>
            </div>
            <div className={styles.input}>
              <div className={styles.label}>
                Enter the token symbol or address
              </div>
              <img
                className={styles.iconsearch}
                alt=""
                src="/iconsearch1.svg"
              />
            </div>
            <div className={styles.listTokens}>
              <div className={styles.mbListItemBasic}>
                <div className={styles.mbListItemitemLeft}>
                  <div className={styles.iconWrapper}>
                    <img
                      className={styles.iconftr}
                      alt=""
                      src="/iconftr5.svg"
                    />
                  </div>
                  <div className={styles.title1}>FTR</div>
                </div>
                <div className={styles.mbListItemitemRight}>
                  <div className={styles.paragraph}>0</div>
                </div>
              </div>
              <div
                className={styles.mbListItemBasic1}
                onClick={onMbListItemBasicContainer1Click}
              >
                <div className={styles.mbListItemitemLeft}>
                  <div className={styles.iconWrapper}>
                    <img
                      className={styles.iconeth}
                      alt=""
                      src="/iconeth4.svg"
                    />
                  </div>
                  <div className={styles.title1}>ETH</div>
                </div>
                <div className={styles.mbListItemitemRight}>
                  <div className={styles.paragraph}>0</div>
                </div>
              </div>
              <div
                className={styles.mbListItemBasic1}
                onClick={onMbListItemBasicContainer2Click}
              >
                <div className={styles.mbListItemitemLeft}>
                  <div className={styles.iconWrapper}>
                    <img
                      className={styles.iconeth}
                      alt=""
                      src="/iconusdc6.svg"
                    />
                  </div>
                  <div className={styles.title1}>USDC</div>
                </div>
                <div className={styles.mbListItemitemRight}>
                  <div className={styles.paragraph}>0</div>
                </div>
              </div>
              <div className={styles.mbListItemBasic}>
                <div className={styles.mbListItemitemLeft}>
                  <div className={styles.iconWrapper}>
                    <img
                      className={styles.iconeth}
                      alt=""
                      src="/iconicon1inch1.svg"
                    />
                  </div>
                  <div className={styles.title1}>1INCH</div>
                </div>
                <div className={styles.mbListItemitemRight}>
                  <div className={styles.paragraph}>0</div>
                </div>
              </div>
              <div className={styles.mbListItemBasic}>
                <div className={styles.mbListItemitemLeft}>
                  <div className={styles.iconWrapper}>
                    <img
                      className={styles.iconeth}
                      alt=""
                      src="/iconiconaave1.svg"
                    />
                  </div>
                  <div className={styles.title1}>AAVE</div>
                </div>
                <div className={styles.mbListItemitemRight}>
                  <div className={styles.paragraph}>0</div>
                </div>
              </div>
              <div className={styles.mbListItemBasic}>
                <div className={styles.mbListItemitemLeft}>
                  <div className={styles.iconWrapper}>
                    <img
                      className={styles.iconeth}
                      alt=""
                      src="/iconiconampl1.svg"
                    />
                  </div>
                  <div className={styles.title1}>AMPL</div>
                </div>
                <div className={styles.mbListItemitemRight}>
                  <div className={styles.paragraph}>0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Nav
          onMenuItemHorizontalitemClick={onMenuItemHorizontalitemClick}
          onMenuItemHorizontalitem1Click={onMenuItemHorizontalitem1Click}
          iconliquidityMining="/iconliquiditymining7.svg"
          icontradingMining="/icontradingmining2.svg"
          iconvftr="/iconvftr11.svg"
          onMenuItemHorizontalitem2Click={onMenuItemHorizontalitem2Click}
          openAccountConnectedPopup={openAccountConnectedPopup}
          group="/group4.svg"
          groupRight="10.63%"
          groupLeft="10.63%"
          openConnectWalletPopoupPopup={openConnectWalletPopoupPopup}
          groupTop="10.63%"
          groupBottom="10.62%"
          vector="/vector3.svg"
          iconmenu="/iconmenu.svg"
          image3="/image-3@2x.png"
        />
        <div className={styles.myLiquidity}>My Liquidity</div>
        <div className={styles.table}>
          <div className={styles.list}>
            <div className={styles.div}>
              <div className={styles.tableCelladditionalComponen}>
                <div className={styles.left}>
                  <img
                    className={styles.avatarIcon}
                    alt=""
                    src="/avatar5.svg"
                  />
                  <div className={styles.text}>0x75f5...1666</div>
                </div>
                <img
                  className={styles.iconshare}
                  alt=""
                  src="/iconshare2.svg"
                />
              </div>
              <div className={styles.tableCellheader}>
                <div className={styles.header}>
                  1.104008 WETH / 2,888.28 USDC
                </div>
              </div>
              <div className={styles.tableCelladditionalComponen1}>
                <div className={styles.btn}>
                  <div className={styles.btn1}>
                    <b className={styles.paragraph}>Manager</b>
                  </div>
                  <div className={styles.btn1}>
                    <b className={styles.paragraph}>Details</b>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.div}>
              <div className={styles.tableCelladditionalComponen}>
                <div className={styles.left}>
                  <img
                    className={styles.avatarIcon}
                    alt=""
                    src="/avatar6.svg"
                  />
                  <div className={styles.text}>0x3đ1...077b</div>
                </div>
                <img
                  className={styles.iconshare}
                  alt=""
                  src="/iconshare2.svg"
                />
              </div>
              <div className={styles.tableCellheader}>
                <div className={styles.header}>300 DAIDAI / 300 USDC</div>
              </div>
              <div className={styles.tableCelladditionalComponen1}>
                <div className={styles.btn}>
                  <div className={styles.btn1}>
                    <b className={styles.paragraph}>Manager</b>
                  </div>
                  <div className={styles.btn1}>
                    <b className={styles.paragraph}>Details</b>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.div}>
              <div className={styles.tableCelladditionalComponen}>
                <div className={styles.left}>
                  <img
                    className={styles.avatarIcon}
                    alt=""
                    src="/avatar7.svg"
                  />
                  <div className={styles.text}>0x3đ1...077b</div>
                </div>
                <img
                  className={styles.iconshare}
                  alt=""
                  src="/iconshare2.svg"
                />
              </div>
              <div className={styles.tableCellheader}>
                <div className={styles.header}>500 BUSD / 500 USDT</div>
              </div>
              <div className={styles.tableCelladditionalComponen1}>
                <div className={styles.btn}>
                  <div className={styles.btn1}>
                    <b className={styles.paragraph}>Manager</b>
                  </div>
                  <div className={styles.btn1}>
                    <b className={styles.paragraph}>Details</b>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.div}>
              <div className={styles.tableCelladditionalComponen}>
                <div className={styles.left}>
                  <img
                    className={styles.avatarIcon}
                    alt=""
                    src="/avatar8.svg"
                  />
                  <div className={styles.text}>0x75f5...1666</div>
                </div>
                <img
                  className={styles.iconshare}
                  alt=""
                  src="/iconshare2.svg"
                />
              </div>
              <div className={styles.tableCellheader}>
                <div className={styles.header}>
                  0.624822 WETH / 339,97585406 1INCH
                </div>
              </div>
              <div className={styles.tableCelladditionalComponen1}>
                <div className={styles.btn}>
                  <div className={styles.btn1}>
                    <b className={styles.paragraph}>Manager</b>
                  </div>
                  <div className={styles.btn1}>
                    <b className={styles.paragraph}>Details</b>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.div}>
              <div className={styles.tableCelladditionalComponen}>
                <div className={styles.left}>
                  <img
                    className={styles.avatarIcon}
                    alt=""
                    src="/avatar9.svg"
                  />
                  <div className={styles.text}>0x3đ1...077b</div>
                </div>
                <img
                  className={styles.iconshare}
                  alt=""
                  src="/iconshare2.svg"
                />
              </div>
              <div className={styles.tableCellheader}>
                <div className={styles.header}>
                  100 DAIDAI / 0,03837881 WETH
                </div>
              </div>
              <div className={styles.tableCelladditionalComponen1}>
                <div className={styles.btn}>
                  <div className={styles.btn1}>
                    <b className={styles.paragraph}>Manager</b>
                  </div>
                  <div className={styles.btn1}>
                    <b className={styles.paragraph}>Details</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.tableCell}>
            <div className={styles.tableCelltext}>
              <div className={styles.text15}>Pool</div>
            </div>
            <div className={styles.tableCelltext1}>
              <div className={styles.text15}>My Liquidity</div>
            </div>
            <div className={styles.tableCelltext2}>
              <div className={styles.text15}>Action</div>
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

export default LiquiditySelectToken;
