import styles from "./AccountConnectedPopup.module.css";
import AccountContext from './AccountContext';
import React, { useContext } from "react";

const AccountConnectedPopup = ({ onClose }) => {
  // const { accountAddress } = useContext(AccountContext);
  const currentAddress = window.ethereum.selectedAddress;
  console.log("currentAddress : ",currentAddress)
  // console.log("account : ",accountAddress)

  // Disconnect Account
  const handleDisconnectWallet = async () => {
    // logic to disconnect wallet
    await window.ethereum.disconnect();
    console.log('Wallet disconnected');
    onClose();
  }

  return (
    <div className={styles.accountconnectedPopup}>
      <div className={styles.connectedAccountPopup}>
        <div className={styles.modalSuccess}>
          <div className={styles.header}>
            <div className={styles.nav}>
              <div className={styles.titleicon}>
                <img
                  className={styles.iconiconarrowLeft2}
                  alt=""
                  src="/iconiconarrowleft2.svg"
                />
                <div className={styles.title}>Account</div>
              </div>
              <button className={styles.iconcloseSmall} onClick={onClose}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
              </button>
            </div>
            <div className={styles.xbad7e116Parent}>
              <b className={styles.xbad7e116}>{currentAddress}</b>
              <div className={styles.btnParent}>
                <div className={styles.btn}>
                  <img
                    className={styles.icondirect}
                    alt=""
                    src="/icondirect.svg"
                  />
                </div>
                <div className={styles.btn}>
                  <img
                    className={styles.icondirect}
                    alt=""
                    src="/iconcopy.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.btnGroup}>
              <div className={styles.btn2}>
                <div className={styles.titleicon}>
                  <img
                    className={styles.icondirect}
                    alt=""
                    src="/iconswitchexchange.svg"
                  />
                  <b className={styles.text}>Switch Wallet</b>
                </div>
              </div>
              <button className={styles.btn3} onClick={handleDisconnectWallet}>
                <b className={styles.text}>Disconnect Wallet</b>
              </button>
            </div>
          </div>
          <div className={styles.transaction}>
            <div className={styles.div}>
              <div className={styles.recentTransactions}>
                Recent Transactions
              </div>
              <div className={styles.btn4}>
                <b className={styles.text}>Clear All</b>
              </div>
            </div>
            <div className={styles.list}>
              <div className={styles.div}>
                <div className={styles.content1}>
                  <div className={styles.text}>Stake</div>
                  <img
                    className={styles.icondirect}
                    alt=""
                    src="/iconiconarrowdiagrams.svg"
                  />
                </div>
                <img
                  className={styles.icondirect}
                  alt=""
                  src="/iconcheck.svg"
                />
              </div>
              <div className={styles.div}>
                <div className={styles.content1}>
                  <div className={styles.text}>Approve DEXDLP</div>
                  <img
                    className={styles.icondirect}
                    alt=""
                    src="/iconiconarrowdiagrams.svg"
                  />
                </div>
                <img
                  className={styles.icondirect}
                  alt=""
                  src="/iconcheck.svg"
                />
              </div>
              <div className={styles.div2}>
                <div className={styles.div}>
                  <div className={styles.content1}>
                    <div className={styles.text}>ADD Liquidity</div>
                    <img
                      className={styles.icondirect}
                      alt=""
                      src="/iconiconarrowdiagrams.svg"
                    />
                  </div>
                  <img
                    className={styles.icondirect}
                    alt=""
                    src="/iconcheck.svg"
                  />
                </div>
                <div className={styles.dex5812291025829Mtv}>
                  <p className={styles.dex}>7.4812029 DEX</p>
                  <p className={styles.dex}>5812.291025829 MTV</p>
                </div>
              </div>
              <div className={styles.div}>
                <div className={styles.content1}>
                  <div className={styles.text}>Approve DEX</div>
                  <img
                    className={styles.icondirect}
                    alt=""
                    src="/iconiconarrowdiagrams.svg"
                  />
                </div>
                <img
                  className={styles.icondirect}
                  alt=""
                  src="/iconcheck.svg"
                />
              </div>
              <div className={styles.div}>
                <div className={styles.content1}>
                  <div className={styles.text}>Approve MTV</div>
                  <img
                    className={styles.icondirect}
                    alt=""
                    src="/iconiconarrowdiagrams.svg"
                  />
                </div>
                <img
                  className={styles.icondirect}
                  alt=""
                  src="/iconcheck.svg"
                />
              </div>
              <div className={styles.div2}>
                <div className={styles.div}>
                  <div className={styles.content1}>
                    <div className={styles.text}>Swap</div>
                    <img
                      className={styles.icondirect}
                      alt=""
                      src="/iconiconarrowdiagrams.svg"
                    />
                  </div>
                  <img
                    className={styles.icondirect}
                    alt=""
                    src="/iconclose.svg"
                  />
                </div>
                <div className={styles.dex5812291025829Mtv}>
                  0.045125 BNB to 2132.51853983 MTV
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountConnectedPopup;
