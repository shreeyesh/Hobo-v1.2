import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AccountConnectedPopup from "../components/AccountConnectedPopup";
import PortalPopup from "../components/PortalPopup";
import ConnectWalletPopoup from "../components/ConnectWalletPopoup";
import SharePopup from "../components/SharePopup";
import Nav from "../components/Nav";
import styles from "./LiquidityManagerAdd.module.css";
const LiquidityManagerAdd = () => {
  const navigate = useNavigate();
  const [isAccountConnectedPopupOpen, setAccountConnectedPopupOpen] =
    useState(false);
  const [isConnectWalletPopoupPopupOpen, setConnectWalletPopoupPopupOpen] =
    useState(false);
  const [isSharePopupOpen, setSharePopupOpen] = useState(false);

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

  const onDropdownClick = useCallback(() => {
    navigate("/42liquidityselecttoken");
  }, [navigate]);

  const onDropdown1Click = useCallback(() => {
    navigate("/42liquidityselecttoken");
  }, [navigate]);

  const onTabItemstyle2ItemlargeClick = useCallback(() => {
    navigate("/46liquiditymanagerremove");
  }, [navigate]);

  const openSharePopup = useCallback(() => {
    setSharePopupOpen(true);
  }, []);

  const closeSharePopup = useCallback(() => {
    setSharePopupOpen(false);
  }, []);

  return (
    <>
      <div className={styles.liquidityManagerAdd}>
        <div className={styles.right}>
          <div className={styles.card}>
            <div className={styles.bg} />
            <div className={styles.btn}>
              <b className={styles.text}>Enter An Amount</b>
            </div>
            <div className={styles.form}>
              <div className={styles.pay}>
                <div className={styles.title}>
                  <div className={styles.available500}>Available: 500</div>
                </div>
                <div className={styles.inputGroupwDropdown}>
                  <button className={styles.dropdown} onClick={onDropdownClick}>
                    <img
                      className={styles.iconiconarrowDown}
                      alt=""
                      src="/iconiconarrowdown1.svg"
                    />
                    <div className={styles.label}>FTR</div>
                    <img
                      className={styles.iconftr}
                      alt=""
                      src="/iconftr6.svg"
                    />
                  </button>
                  <input
                    className={styles.input}
                    type="text"
                    placeholder="400"
                  />
                </div>
              </div>
              <img className={styles.iconplus3} alt="" src="/iconplus31.svg" />
              <div className={styles.receive}>
                <div className={styles.title}>
                  <div className={styles.available500}>Available: 1,200</div>
                </div>
                <div className={styles.inputGroupwDropdown}>
                  <button
                    className={styles.dropdown}
                    onClick={onDropdown1Click}
                  >
                    <img
                      className={styles.iconiconarrowDown}
                      alt=""
                      src="/iconiconarrowdown1.svg"
                    />
                    <div className={styles.label}>BUSD</div>
                    <img
                      className={styles.iconbusd}
                      alt=""
                      src="/iconbusd1.svg"
                    />
                  </button>
                  <input
                    className={styles.input1}
                    type="text"
                    placeholder=" 129,16706043"
                  />
                </div>
              </div>
            </div>
            <div className={styles.tabsStyle2}>
              <div className={styles.tabItemstyle2Itemlarge}>
                <div className={styles.tab}>Add</div>
              </div>
              <button
                className={styles.tabItemstyle2Itemlarge1}
                onClick={onTabItemstyle2ItemlargeClick}
              >
                <div className={styles.tab1}>Remove</div>
              </button>
            </div>
            <div className={styles.titleicon}>
              <img
                className={styles.iconiconarrowTop}
                alt=""
                src="/iconiconarrowleft211.svg"
              />
              <button className={styles.iconshare} onClick={openSharePopup}>
                <img className={styles.groupIcon} alt="" src="/group61.svg" />
              </button>
            </div>
            <div className={styles.content}>
              <div className={styles.mbListItemBasic}>
                <div className={styles.mbListItemitemLeft}>
                  <div className={styles.text}>Support single-token supply</div>
                </div>
                <div className={styles.mbListItemitemRight}>
                  <div className={styles.text}>More</div>
                  <div className={styles.iconWrapper}>
                    <img
                      className={styles.iconiconarrowTop}
                      alt=""
                      src="/iconiconarrowtop.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.list}>
                <div className={styles.mbListItemBasic1}>
                  <div className={styles.mbListItemitemLeft}>
                    <div className={styles.text}>
                      My Liquidity (share 2.45%)
                    </div>
                  </div>
                </div>
                <div className={styles.mbListItemBasic2}>
                  <div className={styles.mbListItemitemLeft}>
                    <div className={styles.title2}>
                      100 FTR / 129,16706043 BUSD
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
          iconliquidityMining="/iconliquiditymining9.svg"
          icontradingMining="/icontradingmining3.svg"
          iconvftr="/iconvftr2.svg"
          onMenuItemHorizontalitem2Click={onMenuItemHorizontalitem2Click}
          openAccountConnectedPopup={openAccountConnectedPopup}
          group="/group51.svg"
          groupRight="10.63%"
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
                <div className={styles.left}>
                  <img
                    className={styles.avatarIcon}
                    alt=""
                    src="/avatar10.svg"
                  />
                  <div className={styles.tab}>0x75f5...1666</div>
                </div>
                <img
                  className={styles.iconshare1}
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
                <div className={styles.btn1}>
                  <div className={styles.btn2}>
                    <b className={styles.text}>Manager</b>
                  </div>
                  <div className={styles.btn2}>
                    <b className={styles.text}>Details</b>
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
                    src="/avatar11.svg"
                  />
                  <div className={styles.tab}>0x3đ1...077b</div>
                </div>
                <img
                  className={styles.iconshare1}
                  alt=""
                  src="/iconshare2.svg"
                />
              </div>
              <div className={styles.tableCellheader}>
                <div className={styles.header}>300 DAIDAI / 300 USDC</div>
              </div>
              <div className={styles.tableCelladditionalComponen1}>
                <div className={styles.btn1}>
                  <div className={styles.btn2}>
                    <b className={styles.text}>Manager</b>
                  </div>
                  <div className={styles.btn2}>
                    <b className={styles.text}>Details</b>
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
                    src="/avatar12.svg"
                  />
                  <div className={styles.tab}>0x3đ1...077b</div>
                </div>
                <img
                  className={styles.iconshare1}
                  alt=""
                  src="/iconshare2.svg"
                />
              </div>
              <div className={styles.tableCellheader}>
                <div className={styles.header}>500 BUSD / 500 USDT</div>
              </div>
              <div className={styles.tableCelladditionalComponen1}>
                <div className={styles.btn1}>
                  <div className={styles.btn2}>
                    <b className={styles.text}>Manager</b>
                  </div>
                  <div className={styles.btn2}>
                    <b className={styles.text}>Details</b>
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
                    src="/avatar13.svg"
                  />
                  <div className={styles.tab}>0x75f5...1666</div>
                </div>
                <img
                  className={styles.iconshare1}
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
                <div className={styles.btn1}>
                  <div className={styles.btn2}>
                    <b className={styles.text}>Manager</b>
                  </div>
                  <div className={styles.btn2}>
                    <b className={styles.text}>Details</b>
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
                    src="/avatar14.svg"
                  />
                  <div className={styles.tab}>0x3đ1...077b</div>
                </div>
                <img
                  className={styles.iconshare1}
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
                <div className={styles.btn1}>
                  <div className={styles.btn2}>
                    <b className={styles.text}>Manager</b>
                  </div>
                  <div className={styles.btn2}>
                    <b className={styles.text}>Details</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.tableCell}>
            <div className={styles.tableCelltext}>
              <div className={styles.text16}>Pool</div>
            </div>
            <div className={styles.tableCelltext1}>
              <div className={styles.text16}>My Liquidity</div>
            </div>
            <div className={styles.tableCelltext2}>
              <div className={styles.text16}>Action</div>
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
      {isSharePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSharePopup}
        >
          <SharePopup onClose={closeSharePopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default LiquidityManagerAdd;
