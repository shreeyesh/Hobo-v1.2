import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AccountConnectedPopup from "../components/AccountConnectedPopup";
import PortalPopup from "../components/PortalPopup";
import ConnectWalletPopoup from "../components/ConnectWalletPopoup";
import Nav from "../components/Nav";
import styles from "./Unstake2.module.css";
const Unstake2 = () => {
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
    navigate("/");
  }, [navigate]);

  return (
    <>
      <div className={styles.unstake2}>
        <div className={styles.under}>
          <div className={styles.under}>
            <div className={styles.underChild} />
            <div className={styles.card}>
              <div className={styles.slippageTolerance}>
                <div className={styles.row11}>
                  <div className={styles.cardmining}>
                    <div className={styles.top}>
                      <div className={styles.iconicon2Coin}>
                        <img
                          className={styles.groupIcon}
                          alt=""
                          src="/group23.svg"
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
                              src="/iconftr17.svg"
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
                          <div className={styles.caption}>
                            Available Balance
                          </div>
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
                          src="/group24.svg"
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
                              src="/iconftr18.svg"
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
                          <div className={styles.caption}>
                            Available Balance
                          </div>
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
                          src="/group25.svg"
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
                              src="/iconftr19.svg"
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
                          <div className={styles.caption}>
                            Available Balance
                          </div>
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
                        src="/group311.svg"
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
                            src="/group32.svg"
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
                <div className={styles.cardmining}>
                  <div className={styles.top}>
                    <div className={styles.iconicon2Coin}>
                      <img
                        className={styles.groupIcon}
                        alt=""
                        src="/group33.svg"
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
                          src="/group34.svg"
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
                            src="/icongift9.svg"
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
                          src="/icongift12.svg"
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
              iconliquidityMining="/iconliquiditymining15.svg"
              icontradingMining="/icontradingmining8.svg"
              iconvftr="/iconvftr2.svg"
              onMenuItemHorizontalitem2Click={onMenuItemHorizontalitem2Click}
              openAccountConnectedPopup={openAccountConnectedPopup}
              group="/group30.svg"
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
                    src="/iconwrapper5.svg"
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
                  src="/iconsearch5.svg"
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
          <div className={styles.popUp}>
            <div className={styles.popUpChild} />
            <div className={styles.btn9}>
              <b className={styles.text}>Unstake</b>
            </div>
            <button className={styles.iconcloseSmall}>
              <img className={styles.vectorIcon} alt="" src="/vector11.svg" />
              <img className={styles.vectorIcon} alt="" src="/vector21.svg" />
            </button>
            <div className={styles.tabsStyle2Parent}>
              <div className={styles.tabsStyle21}>
                <div className={styles.tabItemstyle2Itemmedium1}>
                  <div className={styles.tab}>Stake</div>
                </div>
                <div className={styles.tabItemstyle2Itemmedium}>
                  <div className={styles.tab}>Unstake</div>
                </div>
                <div className={styles.tabItemstyle2Itemmedium2}>
                  <div className={styles.tab}>Tab</div>
                </div>
              </div>
              <div className={styles.claimRewards}>
                <div className={styles.tableCell}>
                  <div className={styles.tableCelltext}>
                    <div className={styles.text11}>Token</div>
                  </div>
                  <div className={styles.tableCelltext1}>
                    <div className={styles.text11}>APY</div>
                  </div>
                  <div className={styles.tableCelltext2}>
                    <div className={styles.parent7}>
                      <div className={styles.div}>$</div>
                      <div className={styles.text}>Claimable Reward</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.claimRewards1}>
                <div className={styles.tableCell1}>
                  <div className={styles.tableCelltext}>
                    <div className={styles.label}>FTR</div>
                    <img
                      className={styles.iconftr3}
                      alt=""
                      src="/iconftr20.svg"
                    />
                  </div>
                  <div className={styles.tableCelltext1}>
                    <div className={styles.text11}>228.62%</div>
                  </div>
                  <div className={styles.tableCelltext2}>
                    <div className={styles.parent7}>
                      <div className={styles.div}>$</div>
                      <div className={styles.text}>5.192613</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.claimRewards2}>
                <div className={styles.btn10}>
                  <b className={styles.text}>Claim Rewards</b>
                </div>
              </div>
              <div className={styles.amountStake}>
                <div className={styles.receive}>
                  <div className={styles.title1}>
                    <div className={styles.tab}>Unstake</div>
                    <div className={styles.available55762366}>
                      Available: 55.762366
                    </div>
                  </div>
                  <div className={styles.receive1}>
                    <div className={styles.receive2}>
                      <div className={styles.inputGroupwDropdown}>
                        <div className={styles.dropdown1}>
                          <img
                            className={styles.iconiconarrowDown1}
                            alt=""
                            src="/iconiconarrowdown1.svg"
                          />
                          <div className={styles.label2}>USDC LP</div>
                          <img
                            className={styles.iconsearch}
                            alt=""
                            src="/iconusdc8.svg"
                          />
                        </div>
                        <div className={styles.input1}>
                          <b className={styles.text16}>27.881183</b>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.slippageTolerance}>
                    <div className={styles.tags}>
                      <button className={styles.tag}>
                        <div className={styles.text17}>25%</div>
                      </button>
                      <button className={styles.tag}>
                        <div className={styles.text17}>50%</div>
                      </button>
                      <button className={styles.tag}>
                        <div className={styles.text17}>75%</div>
                      </button>
                      <button className={styles.tag}>
                        <div className={styles.text17}>100%</div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mask1} />
        <div className={styles.modalSuccess}>
          <div className={styles.nav}>
            <button className={styles.iconcloseSmall1}>
              <img className={styles.vectorIcon} alt="" src="/vector11.svg" />
              <img className={styles.vectorIcon} alt="" src="/vector21.svg" />
            </button>
          </div>
          <div className={styles.illus1} />
          <div className={styles.info}>
            <div className={styles.tab}>End Mining</div>
            <div className={styles.title3}>End Mining Submitted</div>
          </div>
          <button className={styles.btn11} onClick={onBtn1Click}>
            <b className={styles.text21}>Ok</b>
          </button>
        </div>
        <img className={styles.hoboLogoIcon} alt="" src="/hobologo@2x.png" />
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

export default Unstake2;
