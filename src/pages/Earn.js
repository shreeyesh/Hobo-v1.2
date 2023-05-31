import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AccountConnectedPopup from "../components/AccountConnectedPopup";
import PortalPopup from "../components/PortalPopup";
import ConnectWalletPopoup from "../components/ConnectWalletPopoup";
import Cardmining from "../components/Cardmining";
import StakePopup from "../components/StakePopup";
import CardminingCore from "../components/CardminingCore";
import Nav from "../components/Nav";
import styles from "./Earn.module.css";
const Earn = () => {
  const navigate = useNavigate();
  const [isAccountConnectedPopupOpen, setAccountConnectedPopupOpen] =
    useState(false);
  const [isConnectWalletPopoupPopupOpen, setConnectWalletPopoupPopupOpen] =
    useState(false);
  const [isStakePopupOpen, setStakePopupOpen] = useState(false);
  const [isStakePopup1Open, setStakePopup1Open] = useState(false);

  const onMenuItemHorizontalitemClick = useCallback(() => {
    navigate("/exchange");
  }, [navigate]);

  const onMenuItemHorizontalitem1Click = useCallback(() => {
    navigate("/liquidity");
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

  const openStakePopup = useCallback(() => {
    setStakePopupOpen(true);
  }, []);

  const closeStakePopup = useCallback(() => {
    setStakePopupOpen(false);
  }, []);

  const openStakePopup1 = useCallback(() => {
    setStakePopup1Open(true);
  }, []);

  const closeStakePopup1 = useCallback(() => {
    setStakePopup1Open(false);
  }, []);

  return (
    <>
      <div className={styles.earn}>
        <div className={styles.earnChild} />
        <div className={styles.card}>
          <div className={styles.row1}>
            <div className={styles.row11}>
              {/* <Cardmining /> */}
              {/* <div className={styles.cardmining}>
                <div className={styles.top}>
                  <div className={styles.iconicon2Coin}>
                    <img
                      className={styles.groupIcon}
                      alt=""
                      src="/group1.svg"
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
                          src="/iconftr1.svg"
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
                          src="/icongift1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.bottom}>
                  <button className={styles.btn} onClick={openStakePopup}>
                    <b className={styles.text}>StakeUSDC</b>
                  </button>
                  <button className={styles.btn} onClick={openStakePopup1}>
                    <b className={styles.text}>StakeBUSD</b>
                  </button>
                </div>
              </div> */}
              {/* <div className={styles.cardmining}>
                <div className={styles.top}>
                  <div className={styles.iconicon2Coin}>
                    <img
                      className={styles.groupIcon}
                      alt=""
                      src="/group2.svg"
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
                  <b className={styles.b4}>/</b>
                  <div className={styles.frameDiv}>
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
                          src="/iconftr2.svg"
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
                          src="/icongift2.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.bottom1}>
                  <div className={styles.btn2}>
                    <b className={styles.number}>Stake</b>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className={styles.row11}>
            <CardminingCore
              rewardToken = "stCORE"
              aprValue="48.9%"
              lockedValue="$925,576.05"
              rate="1 Core = 1 stCore"
              availableBalance="$0"
              rewardValue="$0"
            />
            {/* <div className={styles.cardmining}>
              <div className={styles.top}>
                <div className={styles.iconicon2Coin}>
                  <img className={styles.groupIcon} alt="" src="/group3.svg" />
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
                <b className={styles.b4}>/</b>
                <div className={styles.frameDiv}>
                  <b className={styles.b}>35.07%</b>
                  <div className={styles.wethApr}>WETH APR</div>
                </div>
              </div>
              <div className={styles.mbListItemBasicParent}>
                <div className={styles.mbListItemBasic}>
                  <div className={styles.mbListItemitemLeft}>
                    <div className={styles.caption}>Reward Token</div>
                  </div>
                  <div className={styles.iconicon2Coin3}>
                    <img
                      className={styles.groupIcon3}
                      alt=""
                      src="/group4.svg"
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
                        src="/icongift1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.bottom2}>
                <div className={styles.btn3}>
                  <div className={styles.content}>
                    <img
                      className={styles.nobIcon}
                      alt=""
                      src="/icongift3.svg"
                    />
                    <b className={styles.number}>Claim</b>
                  </div>
                </div>
                <div className={styles.btn4}>
                  <b className={styles.number}>Stake</b>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <Nav
          onMenuItemHorizontalitemClick={onMenuItemHorizontalitemClick}
          onMenuItemHorizontalitem1Click={onMenuItemHorizontalitem1Click}
          iconliquidityMining="/iconliquiditymining.svg"
          icontradingMining="/icontradingmining.svg"
          iconvftr="/iconvftr.svg"
          onMenuItemHorizontalitem2Click={onMenuItemHorizontalitem2Click}
          openAccountConnectedPopup={openAccountConnectedPopup}
          group="/group5.svg"
          groupRight="10.62%"
          groupLeft="10.62%"
          openConnectWalletPopoupPopup={openConnectWalletPopoupPopup}
          groupTop="10.63%"
          groupBottom="10.63%"
          vector="/vector2.svg"
          iconmenu="/iconmenu.svg"
          image3="/image-3@2x.png"
        />
        <div className={styles.title}>
          <b className={styles.provideLiquidityEarn}>
            Provide Liquidity, Earn CORE.
          </b>
          <b className={styles.b9}>$105,786,890.44</b>
          <div className={styles.numberParent}>
            <div className={styles.number}>Total Value Locked (TVL)</div>
            <div className={styles.texttext}>
              <div className={styles.number}>Tutorial</div>
              <img className={styles.nobIcon} alt="" src="/iconwrapper1.svg" />
            </div>
          </div>
        </div>
        <div className={styles.search}>
          <div className={styles.input}>
            <input
              className={styles.label}
              type="text"
              placeholder="Search by token symbol or pool address"
            />
            <img className={styles.iconsearch} alt="" src="/iconsearch1.svg" />
          </div>
          <button className={styles.btn5}>
            <b className={styles.text6}>Search</b>
          </button>
        </div>
        <div className={styles.top3}>
          <div className={styles.tabsStyle2}>
            <button className={styles.tabItemstyle2Itemmedium}>
              <div className={styles.tab}>Active</div>
            </button>
            <button className={styles.tabItemstyle2Itemmedium}>
              <div className={styles.tab}>Ended</div>
            </button>
            <div className={styles.tabItemstyle2Itemmedium2}>
              <div className={styles.tab2}>Tab</div>
            </div>
          </div>
          <div className={styles.switchParent}>
            <div className={styles.switch}>
              <div className={styles.number}>My Liquidity Only</div>
              <div className={styles.switch1}>
                <img className={styles.nobIcon} alt="" src="/nob.svg" />
              </div>
            </div>
            <div className={styles.dropdown}>
              <div className={styles.label1}>Available Balance</div>
              <img
                className={styles.iconiconarrowDown}
                alt=""
                src="/iconiconarrowdown.svg"
              />
            </div>
          </div>
        </div>
        <img
          className={styles.liquidityMining41}
          alt=""
          src="/liquidity--mining-4-1@2x.png"
        />
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
      {isStakePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeStakePopup}
        >
          <StakePopup onClose={closeStakePopup} />
        </PortalPopup>
      )}
      {isStakePopup1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeStakePopup1}
        >
          <StakePopup onClose={closeStakePopup1} />
        </PortalPopup>
      )}
    </>
  );
};

export default Earn;
