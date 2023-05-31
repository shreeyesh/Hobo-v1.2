import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AccountConnectedPopup from "../components/AccountConnectedPopup";
import PortalPopup from "../components/PortalPopup";
import ConnectWalletPopoup from "../components/ConnectWalletPopoup";
import Nav from "../components/Nav";
import StakePopUpComp from "../components/StakePopUpComp";
import styles from "./Stake2.module.css";
const Stake2 = () => {
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
      <div className={styles.stake2}>
        <div className={styles.under}>
          <div className={styles.underChild} />
          <div className={styles.card}>
            <div className={styles.row1}>
              <div className={styles.row11}>
                <div className={styles.cardmining}>
                  <div className={styles.top}>
                    <div className={styles.iconicon2Coin}>
                      <img
                        className={styles.groupIcon}
                        alt=""
                        src="/group15.svg"
                      />
                    </div>
                    <div className={styles.tableCelladditionalComponen}>
                      <div className={styles.header}>BUSD-USDT LP</div>
                    </div>
                  </div>
                  <div className={styles.frameParent}>
                    <div className={styles.parent}>
                      <b className={styles.b}>25.70%</b>
                      <div className={styles.wethApr}>BUSD APR</div>
                    </div>
                    <b className={styles.b1}>/</b>
                    <div className={styles.parent}>
                      <b className={styles.b}>35.07%</b>
                      <div className={styles.wethApr}>USDT APR</div>
                    </div>
                  </div>
                  <div className={styles.mbListItemBasicParent}>
                    <div className={styles.mbListItemBasic}>
                      <div className={styles.mbListItemitemLeft}>
                        <div className={styles.caption}>Reward Token</div>
                      </div>
                      <div className={styles.mbListItemitemRight}>
                        <div className={styles.iconWrapper}>
                          <img
                            className={styles.iconftr}
                            alt=""
                            src="/iconftr10.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.mbListItemBasic}>
                      <div className={styles.mbListItemitemLeft}>
                        <div className={styles.caption}>Value Locked</div>
                      </div>
                      <div className={styles.mbListItemitemRight1}>
                        <div className={styles.caption}>$635,577.11</div>
                      </div>
                    </div>
                    <div className={styles.mbListItemBasic}>
                      <div className={styles.mbListItemitemLeft}>
                        <div className={styles.caption}>My Share</div>
                      </div>
                      <div className={styles.mbListItemitemRight1}>
                        <div className={styles.caption}>$0 (0%)</div>
                      </div>
                    </div>
                    <div className={styles.mbListItemBasic}>
                      <div className={styles.mbListItemitemLeft}>
                        <div className={styles.caption}>Available Balance</div>
                      </div>
                      <div className={styles.mbListItemitemRight1}>
                        <div className={styles.caption}>$0</div>
                      </div>
                    </div>
                    <div className={styles.mbListItemBasic}>
                      <div className={styles.mbListItemitemLeft}>
                        <div className={styles.caption}>My Reward</div>
                      </div>
                      <div className={styles.mbListItemitemRight4}>
                        <div className={styles.caption}>$0</div>
                        <div className={styles.iconWrapper}>
                          <img
                            className={styles.icongift}
                            alt=""
                            src="/icongift8.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.bottom}>
                    <div className={styles.btn}>
                      <b className={styles.text}>StakeBUSD</b>
                    </div>
                    <div className={styles.btn}>
                      <b className={styles.text}>StakeUSDT</b>
                    </div>
                  </div>
                </div>
                <div className={styles.cardmining}>
                  <div className={styles.top}>
                    <div className={styles.iconicon2Coin}>
                      <img
                        className={styles.groupIcon}
                        alt=""
                        src="/group16.svg"
                      />
                    </div>
                    <div className={styles.tableCelladditionalComponen}>
                      <div className={styles.header}>USDC-BUSD LP</div>
                    </div>
                  </div>
                  <div className={styles.frameParent}>
                    <div className={styles.parent}>
                      <b className={styles.b}>29.41%</b>
                      <div className={styles.wethApr}>USDC APR</div>
                    </div>
                    <b className={styles.b1}>/</b>
                    <div className={styles.parent}>
                      <b className={styles.b}>25.87%</b>
                      <div className={styles.wethApr}>BUSD APR</div>
                    </div>
                  </div>
                  <div className={styles.mbListItemBasicParent}>
                    <div className={styles.mbListItemBasic}>
                      <div className={styles.mbListItemitemLeft}>
                        <div className={styles.caption}>Reward Token</div>
                      </div>
                      <div className={styles.mbListItemitemRight}>
                        <div className={styles.iconWrapper}>
                          <img
                            className={styles.iconftr}
                            alt=""
                            src="/iconftr111.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.mbListItemBasic}>
                      <div className={styles.mbListItemitemLeft}>
                        <div className={styles.caption}>Value Locked</div>
                      </div>
                      <div className={styles.mbListItemitemRight1}>
                        <div className={styles.caption}>$925,576.05</div>
                      </div>
                    </div>
                    <div className={styles.mbListItemBasic}>
                      <div className={styles.mbListItemitemLeft}>
                        <div className={styles.caption}>My Share</div>
                      </div>
                      <div className={styles.mbListItemitemRight1}>
                        <div className={styles.caption}>$0 (0%)</div>
                      </div>
                    </div>
                    <div className={styles.mbListItemBasic}>
                      <div className={styles.mbListItemitemLeft}>
                        <div className={styles.caption}>Available Balance</div>
                      </div>
                      <div className={styles.mbListItemitemRight1}>
                        <div className={styles.caption}>$0</div>
                      </div>
                    </div>
                    <div className={styles.mbListItemBasic}>
                      <div className={styles.mbListItemitemLeft}>
                        <div className={styles.caption}>My Reward</div>
                      </div>
                      <div className={styles.mbListItemitemRight4}>
                        <div className={styles.caption}>$0</div>
                        <div className={styles.iconWrapper}>
                          <img
                            className={styles.icongift}
                            alt=""
                            src="/icongift8.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.bottom}>
                    <div className={styles.btn}>
                      <b className={styles.text}>StakeUSDC</b>
                    </div>
                    <div className={styles.btn}>
                      <b className={styles.text}>StakeBUSD</b>
                    </div>
                  </div>
                </div>
                <div className={styles.cardmining}>
                  <div className={styles.top}>
                    <div className={styles.iconicon2Coin}>
                      <img
                        className={styles.groupIcon}
                        alt=""
                        src="/group17.svg"
                      />
                    </div>
                    <div className={styles.tableCelladditionalComponen}>
                      <div className={styles.header}>DAI-USDC LP</div>
                    </div>
                  </div>
                  <div className={styles.frameParent}>
                    <div className={styles.parent}>
                      <b className={styles.b}>320.73%</b>
                      <div className={styles.wethApr}>APR</div>
                    </div>
                    <b className={styles.b7}>/</b>
                    <div className={styles.parent2}>
                      <b className={styles.b}>35.07%</b>
                      <div className={styles.wethApr}>WETH APR</div>
                    </div>
                  </div>
                  <div className={styles.mbListItemBasicParent}>
                    <div className={styles.mbListItemBasic}>
                      <div className={styles.mbListItemitemLeft}>
                        <div className={styles.caption}>Reward Token</div>
                      </div>
                      <div className={styles.mbListItemitemRight}>
                        <div className={styles.iconWrapper}>
                          <img
                            className={styles.iconftr}
                            alt=""
                            src="/iconftr12.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <div className={styles.mbListItemBasic}>
                      <div className={styles.mbListItemitemLeft}>
                        <div className={styles.caption}>Value Locked</div>
                      </div>
                      <div className={styles.mbListItemitemRight1}>
                        <div className={styles.caption}>$735,577.11</div>
                      </div>
                    </div>
                    <div className={styles.mbListItemBasic}>
                      <div className={styles.mbListItemitemLeft}>
                        <div className={styles.caption}>My Share</div>
                      </div>
                      <div className={styles.mbListItemitemRight1}>
                        <div className={styles.caption}>$0 (0%)</div>
                      </div>
                    </div>
                    <div className={styles.mbListItemBasic}>
                      <div className={styles.mbListItemitemLeft}>
                        <div className={styles.caption}>Available Balance</div>
                      </div>
                      <div className={styles.mbListItemitemRight1}>
                        <div className={styles.caption}>$0</div>
                      </div>
                    </div>
                    <div className={styles.mbListItemBasic}>
                      <div className={styles.mbListItemitemLeft}>
                        <div className={styles.caption}>My Reward</div>
                      </div>
                      <div className={styles.mbListItemitemRight4}>
                        <div className={styles.caption}>$0</div>
                        <div className={styles.iconWrapper}>
                          <img
                            className={styles.icongift}
                            alt=""
                            src="/icongift9.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.bottom2}>
                    <div className={styles.btn}>
                      <b className={styles.text}>Stake</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.row11}>
              <div className={styles.cardmining}>
                <div className={styles.top}>
                  <div className={styles.iconicon2Coin}>
                    <img
                      className={styles.groupIcon}
                      alt=""
                      src="/group18.svg"
                    />
                  </div>
                  <div className={styles.tableCelladditionalComponen}>
                    <div className={styles.header}>DAI-FTR LP</div>
                  </div>
                </div>
                <div className={styles.frameParent}>
                  <div className={styles.parent2}>
                    <b className={styles.b}>16.14%</b>
                    <div className={styles.wethApr}>WETH APR</div>
                  </div>
                  <b className={styles.b7}>/</b>
                  <div className={styles.parent}>
                    <b className={styles.b}>485.09%</b>
                    <div className={styles.wethApr}>APR</div>
                  </div>
                </div>
                <div className={styles.mbListItemBasicParent}>
                  <div className={styles.mbListItemBasic}>
                    <div className={styles.mbListItemitemLeft}>
                      <div className={styles.caption}>Reward Token</div>
                    </div>
                    <div className={styles.mbListItemitemRight}>
                      <div className={styles.iconicon2Coin4}>
                        <img
                          className={styles.groupIcon4}
                          alt=""
                          src="/group19.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.mbListItemBasic}>
                    <div className={styles.mbListItemitemLeft}>
                      <div className={styles.caption}>Value Locked</div>
                    </div>
                    <div className={styles.mbListItemitemRight1}>
                      <div className={styles.caption}>$925,576.05</div>
                    </div>
                  </div>
                  <div className={styles.mbListItemBasic}>
                    <div className={styles.mbListItemitemLeft}>
                      <div className={styles.caption}>My Share</div>
                    </div>
                    <div className={styles.mbListItemitemRight1}>
                      <div className={styles.caption}>$0 (0%)</div>
                    </div>
                  </div>
                  <div className={styles.mbListItemBasic}>
                    <div className={styles.mbListItemitemLeft}>
                      <div className={styles.caption}>Available Balance</div>
                    </div>
                    <div className={styles.mbListItemitemRight1}>
                      <div className={styles.caption}>$0</div>
                    </div>
                  </div>
                  <div className={styles.mbListItemBasic}>
                    <div className={styles.mbListItemitemLeft}>
                      <div className={styles.caption}>My Reward</div>
                    </div>
                    <div className={styles.mbListItemitemRight4}>
                      <div className={styles.caption}>$0</div>
                      <div className={styles.iconWrapper}>
                        <img
                          className={styles.icongift}
                          alt=""
                          src="/icongift10.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.bottom2}>
                  <div className={styles.btn}>
                    <b className={styles.text}>Stake</b>
                  </div>
                </div>
              </div>
              <div className={styles.cardmining}>
                <div className={styles.top}>
                  <div className={styles.iconicon2Coin}>
                    <img
                      className={styles.groupIcon}
                      alt=""
                      src="/group20.svg"
                    />
                  </div>
                  <div className={styles.tableCelladditionalComponen}>
                    <div className={styles.header}>FTR-1INCH LP</div>
                  </div>
                </div>
                <div className={styles.frameParent}>
                  <div className={styles.parent}>
                    <b className={styles.b}>584.73%</b>
                    <div className={styles.wethApr}>APR</div>
                  </div>
                  <b className={styles.b7}>/</b>
                  <div className={styles.parent2}>
                    <b className={styles.b}>35.07%</b>
                    <div className={styles.wethApr}>WETH APR</div>
                  </div>
                </div>
                <div className={styles.mbListItemBasicParent}>
                  <div className={styles.mbListItemBasic}>
                    <div className={styles.mbListItemitemLeft}>
                      <div className={styles.caption}>Reward Token</div>
                    </div>
                    <div className={styles.iconicon2Coin4}>
                      <img
                        className={styles.groupIcon4}
                        alt=""
                        src="/group211.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.mbListItemBasic}>
                    <div className={styles.mbListItemitemLeft}>
                      <div className={styles.caption}>Value Locked</div>
                    </div>
                    <div className={styles.mbListItemitemRight1}>
                      <div className={styles.caption}>$270,790.5</div>
                    </div>
                  </div>
                  <div className={styles.mbListItemBasic}>
                    <div className={styles.mbListItemitemLeft}>
                      <div className={styles.caption}>My Share</div>
                    </div>
                    <div className={styles.mbListItemitemRight1}>
                      <div className={styles.caption}>$378.47 (0.13%)</div>
                    </div>
                  </div>
                  <div className={styles.mbListItemBasic}>
                    <div className={styles.mbListItemitemLeft}>
                      <div className={styles.caption}>Available Balance</div>
                    </div>
                    <div className={styles.mbListItemitemRight1}>
                      <div className={styles.caption}>$0</div>
                    </div>
                  </div>
                  <div className={styles.mbListItemBasic}>
                    <div className={styles.mbListItemitemLeft}>
                      <div className={styles.caption}>My Reward</div>
                    </div>
                    <div className={styles.mbListItemitemRight4}>
                      <div className={styles.caption}>$3.5</div>
                      <div className={styles.iconWrapper}>
                        <img
                          className={styles.icongift}
                          alt=""
                          src="/icongift10.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.bottom4}>
                  <div className={styles.btn6}>
                    <div className={styles.content}>
                      <img
                        className={styles.nobIcon}
                        alt=""
                        src="/icongift111.svg"
                      />
                      <b className={styles.text}>Claim</b>
                    </div>
                  </div>
                  <div className={styles.btn7}>
                    <b className={styles.text}>Stake</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Nav
            onMenuItemHorizontalitemClick={onMenuItemHorizontalitemClick}
            onMenuItemHorizontalitem1Click={onMenuItemHorizontalitem1Click}
            iconliquidityMining="/iconliquiditymining13.svg"
            icontradingMining="/icontradingmining7.svg"
            iconvftr="/iconvftr11.svg"
            onMenuItemHorizontalitem2Click={onMenuItemHorizontalitem2Click}
            openAccountConnectedPopup={openAccountConnectedPopup}
            group="/group22.svg"
            groupRight="10.63%"
            groupLeft="10.63%"
            openConnectWalletPopoupPopup={openConnectWalletPopoupPopup}
            groupTop="10.63%"
            groupBottom="10.63%"
            vector="/vector3.svg"
            iconmenu="/iconmenu1.svg"
            image3="/image-3@2x.png"
          />
          <div className={styles.title}>
            <b className={styles.provideLiquidityEarn}>
              Provide Liquidity, Earn FTR
            </b>
            <b className={styles.b15}>$105,786,890.44</b>
            <div className={styles.numberParent}>
              <div className={styles.text}>Total Value Locked (TVL)</div>
              <div className={styles.texttext}>
                <div className={styles.text}>Tutorial</div>
                <img
                  className={styles.nobIcon}
                  alt=""
                  src="/iconwrapper3.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.search}>
            <div className={styles.input}>
              <div className={styles.label}>
                Search by token symbol or pool address
              </div>
              <img
                className={styles.iconsearch}
                alt=""
                src="/iconsearch4.svg"
              />
            </div>
            <div className={styles.btn8}>
              <b className={styles.text}>Search</b>
            </div>
          </div>
          <div className={styles.top5}>
            <div className={styles.tabsStyle2}>
              <div className={styles.tabItemstyle2Itemmedium}>
                <div className={styles.tab}>Active</div>
              </div>
              <div className={styles.tabItemstyle2Itemmedium1}>
                <div className={styles.tab}>Ended</div>
              </div>
              <div className={styles.tabItemstyle2Itemmedium2}>
                <div className={styles.tab}>Tab</div>
              </div>
            </div>
            <div className={styles.switchParent}>
              <div className={styles.switch}>
                <div className={styles.text}>My Liquidity Only</div>
                <div className={styles.switch1}>
                  <img className={styles.nobIcon} alt="" src="/nob1.svg" />
                </div>
              </div>
              <div className={styles.dropdown}>
                <div className={styles.label1}>Available Balance</div>
                <img
                  className={styles.iconiconarrowDown}
                  alt=""
                  src="/iconiconarrowdown1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mask} />
        <StakePopUpComp />
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

export default Stake2;
