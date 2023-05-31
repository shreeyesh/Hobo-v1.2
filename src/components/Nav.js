import { memo, useMemo } from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
const Nav = memo(
  ({
    onMenuItemHorizontalitemClick,
    onMenuItemHorizontalitem1Click,
    iconliquidityMining,
    icontradingMining,
    iconvftr,
    onMenuItemHorizontalitem2Click,
    openAccountConnectedPopup,
    group,
    groupRight,
    groupLeft,
    openConnectWalletPopoupPopup,
    groupTop,
    groupBottom,
    vector,
    iconmenu,
    image3,
  }) => {
    const groupIconStyle = useMemo(() => {
      return {
        right: groupRight,
        left: groupLeft,
        top: groupTop,
        bottom: groupBottom,
      };
    }, [groupRight, groupLeft, groupTop, groupBottom]);

    return (
      <div className={styles.nav}>
        <div className={styles.menu}>
          <div className={styles.menu1}>
            <div className={styles.menu2}>
              <div className={styles.menuItemHorizontalitem}>
                <div className={styles.title}>HOBO FINANCE</div>
              </div>
              <Link
                className={styles.menuItemHorizontalitem1}
                to="/3exchange"
                onClick={onMenuItemHorizontalitemClick}
              >
                <div className={styles.title}>Exchange</div>
              </Link>
              <Link
                className={styles.menuItemHorizontalitem2}
                to="/4liquidity"
                onClick={onMenuItemHorizontalitem1Click}
              >
                <div className={styles.flyout}>
                  <div className={styles.verticalMenuItem2ndLevelG}>
                    <div className={styles.verticalMenuItem2ndLevel}>
                      <div className={styles.innerWrapper}>
                        <div className={styles.iconWrapper}>
                          <img
                            className={styles.iconliquidityMining}
                            alt=""
                            src={iconliquidityMining}
                          />
                        </div>
                        <div className={styles.content}>
                          <div className={styles.ndTitleLevel}>
                            Liquidity Mining
                          </div>
                          <div className={styles.ndTitleLevel1}>
                            Earn FTR rewards by staking assets for market making
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.verticalMenuItem2ndLevel1}>
                      <div className={styles.innerWrapper}>
                        <div className={styles.iconWrapper}>
                          <img
                            className={styles.icontradingMining}
                            alt=""
                            src={icontradingMining}
                          />
                        </div>
                        <div className={styles.content}>
                          <div className={styles.ndTitleLevel}>
                            Trading Mining
                          </div>
                          <div className={styles.ndTitleLevel1}>
                            Successfully complete a trade to get a FTR airdrop
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.verticalMenuItem2ndLevel}>
                      <div className={styles.innerWrapper}>
                        <div className={styles.iconWrapper}>
                          <img
                            className={styles.icontradingMining}
                            alt=""
                            src={iconvftr}
                          />
                        </div>
                        <div className={styles.content}>
                          <div className={styles.ndTitleLevel}>vFTR</div>
                          <div className={styles.ndTitleLevel1}>
                            Mint vFTR to earn more DoDo
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.body}>
                  <div className={styles.title}>Liquidity</div>
                </div>
              </Link>
              <Link
                className={styles.menuItemHorizontalitem3}
                to="/Earn"
                onClick={onMenuItemHorizontalitem2Click}
              >
                <a className={styles.title3}>Earn</a>
                <div className={styles.iconWrapper}>
                  <img className={styles.iconiconarrowDown} alt="" src="/iconiconarrowdown.svg" />
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.itemRight}>
            <button
              className={styles.iconuser}
              onClick={openAccountConnectedPopup}
            >
              <img
                className={styles.groupIcon}
                alt=""
                src={group}
                style={groupIconStyle}
              />
            </button>
            <div className={styles.address}>
              <div className={styles.eth}>
                <div className={styles.iconcolorDot}>
                  <img className={styles.vectorIcon} alt="" src={vector} />
                </div>
                <div className={styles.core}>CORE</div>
              </div>
              <button
                className={styles.tag}
                onClick={openConnectWalletPopoupPopup}
              >
                <div className={styles.text}>Connect to a wallet</div>
              </button>
            </div>
            <button className={styles.btn}>
              <img className={styles.iconiconarrowDown} alt="" src={iconmenu} />
            </button>
          </div>
        </div>
        <img className={styles.image3Icon} alt="" src={image3} />
      </div>
    );
  }
);

export default Nav;
