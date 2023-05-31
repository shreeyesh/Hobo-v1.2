import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AccountConnectedPopup from "../components/AccountConnectedPopup";
import PortalPopup from "../components/PortalPopup";
import ConnectWalletPopoup from "../components/ConnectWalletPopoup";
import Nav from "../components/Nav";
import styles from "./LiquidityManagerRemove.module.css";
const LiquidityManagerRemove = () => {
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
    navigate("/liquidityempty");
  }, [navigate]);

  return (
    <>
      <div className={styles.liquidityManagerRemove}>
        <div className={styles.right}>
          <div className={styles.bottom}>
            <img className={styles.bgIcon} alt="" src="/bg1.svg" />
            <div className={styles.content}>
              Tokens can be redeemed by removing liquidity. The number of
              redeemed tokens may change due to price fluctuations.
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.bg} />
            <button className={styles.btn} onClick={onBtnClick}>
              <b className={styles.text}>Enter An Amount</b>
            </button>
            <div className={styles.content1}>
              <div className={styles.pool}>
                <div className={styles.mbListItemBasic}>
                  <div className={styles.mbListItemitemLeft}>
                    <div className={styles.content2}>Pool</div>
                  </div>
                </div>
                <div className={styles.mbListItemBasic1}>
                  <div className={styles.mbListItemitemLeft1}>
                    <div className={styles.title}>0x75c2...ff34</div>
                  </div>
                  <div className={styles.mbListItemitemRight}>
                    <div className={styles.iconWrapper}>
                      <img
                        className={styles.iconshare}
                        alt=""
                        src="/iconshare2.svg"
                      />
                    </div>
                    <div className={styles.iconWrapper}>
                      <img
                        className={styles.iconcopy}
                        alt=""
                        src="/iconcopy1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.pool}>
                <div className={styles.mbListItemBasic}>
                  <div className={styles.mbListItemitemLeft}>
                    <div className={styles.content2}>Total Liquidity</div>
                  </div>
                </div>
                <div className={styles.mbListItemBasic3}>
                  <div className={styles.mbListItemitemLeft}>
                    <div className={styles.title1}>
                      9,601.09004 ETH / 10,773,969.7918 USDC
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.pay}>
              <div className={styles.title2}>
                <div className={styles.available0}>Available: 500</div>
              </div>
              <div className={styles.inputGroupwDropdown}>
                <div className={styles.dropdown}>
                  <img
                    className={styles.iconiconarrowDown}
                    alt=""
                    src="/iconiconarrowdown1.svg"
                  />
                  <div className={styles.label}>ETH</div>
                  <img className={styles.iconeth} alt="" src="/iconeth5.svg" />
                </div>
                <input className={styles.input} type="number" placeholder="0" />
              </div>
            </div>
            <div className={styles.tabsStyle2}>
              <div className={styles.tabItemstyle2Itemlarge}>
                <div className={styles.title}>Add</div>
              </div>
              <div className={styles.tabItemstyle2Itemlarge1}>
                <div className={styles.title}>Remove</div>
              </div>
            </div>
            <div className={styles.titleicon}>
              <img
                className={styles.iconcopy}
                alt=""
                src="/iconiconarrowleft22.svg"
              />
              <img className={styles.iconshare} alt="" src="/iconshare2.svg" />
            </div>
          </div>
        </div>
        <Nav
          onMenuItemHorizontalitemClick={onMenuItemHorizontalitemClick}
          onMenuItemHorizontalitem1Click={onMenuItemHorizontalitem1Click}
          iconliquidityMining="/iconliquiditymining10.svg"
          icontradingMining="/icontradingmining5.svg"
          iconvftr="/iconvftr3.svg"
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
          <div className={styles.list}>
            <div className={styles.div}>
              <div className={styles.tableCelladditionalComponen}>
                <div className={styles.left}>
                  <img
                    className={styles.avatarIcon}
                    alt=""
                    src="/avatar15.svg"
                  />
                  <div className={styles.title}>0x75f5...1666</div>
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
                <div className={styles.btn1}>
                  <div className={styles.btn2}>
                    <b className={styles.content2}>Manager</b>
                  </div>
                  <div className={styles.btn2}>
                    <b className={styles.content2}>Details</b>
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
                    src="/avatar16.svg"
                  />
                  <div className={styles.title}>0x3đ1...077b</div>
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
                <div className={styles.btn1}>
                  <div className={styles.btn2}>
                    <b className={styles.content2}>Manager</b>
                  </div>
                  <div className={styles.btn2}>
                    <b className={styles.content2}>Details</b>
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
                    src="/avatar17.svg"
                  />
                  <div className={styles.title}>0x3đ1...077b</div>
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
                <div className={styles.btn1}>
                  <div className={styles.btn2}>
                    <b className={styles.content2}>Manager</b>
                  </div>
                  <div className={styles.btn2}>
                    <b className={styles.content2}>Details</b>
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
                    src="/avatar18.svg"
                  />
                  <div className={styles.title}>0x75f5...1666</div>
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
                <div className={styles.btn1}>
                  <div className={styles.btn2}>
                    <b className={styles.content2}>Manager</b>
                  </div>
                  <div className={styles.btn2}>
                    <b className={styles.content2}>Details</b>
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
                    src="/avatar19.svg"
                  />
                  <div className={styles.title}>0x3đ1...077b</div>
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
                <div className={styles.btn1}>
                  <div className={styles.btn2}>
                    <b className={styles.content2}>Manager</b>
                  </div>
                  <div className={styles.btn2}>
                    <b className={styles.content2}>Details</b>
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
    </>
  );
};

export default LiquidityManagerRemove;
