import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import AccountConnectedPopup from "../components/AccountConnectedPopup";
import PortalPopup from "../components/PortalPopup";
import ConnectWalletPopoup from "../components/ConnectWalletPopoup";
import Nav from "../components/Nav";
import SharePopup from "../components/SharePopup";
import PairSelectPopup from "../components/PairSelectPopup";
import TxnsuccessPopup from "../components/TxnsuccessPopup";
import styles from "./Home.module.css";
import { ethers } from 'ethers';


const Home = () => {
  const navigate = useNavigate();
  const [isAccountConnectedPopupOpen, setAccountConnectedPopupOpen] =
    useState(false);
  const [isConnectWalletPopoupPopupOpen, setConnectWalletPopoupPopupOpen] =
    useState(false);
  const [isSharePopupOpen, setSharePopupOpen] = useState(false);
  const [isPairSelectPopupOpen, setPairSelectPopupOpen] = useState(false);
  const [isPairSelectPopup1Open, setPairSelectPopup1Open] = useState(false);
 const [amount, setAmount] = useState(0);
 const [amount2, setAmount2] = useState(0);
  const [price, setPrice] = useState(0);
  const [isTxnsuccessPopupOpen, setTxnsuccessPopupOpen] = useState(false);

  // let amount2 = 0;
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contractAddress = '<your_contract_address>';
  // const contractABI = [...]; // your contract ABI
  // const contract = new ethers.Contract(contractAddress, contractABI, signer);

  async function handleAmountChange(event) {
    console.log("Amount",amount)
    const amountSecondary =  event.target.value * 1.0005;
    console.log("amountSecondary : ", amountSecondary)
    setAmount2(amountSecondary);
    setAmount( event.target.value);
    // Addresses of the source and destination tokens
    const sourceTokenAddress = '<source_token_address>';
    const destinationTokenAddress = '<destination_token_address>';

    // Call the getPrice function with the source and destination token addresses
    const newPrice = await contract.getPrice(
      sourceTokenAddress,
      destinationTokenAddress
    );
    setPrice(newPrice);
    
  
  }
  // Fetch secondary token amount
// function amountSecondary(amount) {
//   // const price = 1;
//   const amountSecondary = amount * 1.1;
//   console.log("amountSecondary : ", amountSecondary)
//   return amountSecondary;
// }

  async function handlePriceChange(event) {
    setPrice(event.target.value);
    // Addresses of the source and destination tokens
    const sourceTokenAddress = '<source_token_address>';
    const destinationTokenAddress = '<destination_token_address>';
    // Call the getAmount function with the source and destination token addresses
    const newAmount = await contract.getAmount(
      sourceTokenAddress,
      destinationTokenAddress
    );
    setAmount(newAmount);
  }

  const onMenuItemHorizontalitemClick = useCallback(() => {
    navigate("/3exchange");
  }, [navigate]);

  const onMenuItemHorizontalitem1Click = useCallback(() => {
    navigate("/4liquidity");
  }, [navigate]);

  const onMenuItemHorizontalitem2Click = useCallback(() => {
    navigate("/Earn");
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

  const openSharePopup = useCallback(() => {
    setSharePopupOpen(true);
  }, []);

  const closeSharePopup = useCallback(() => {
    setSharePopupOpen(false);
  }, []);

  const onBtn4Click = useCallback(() => {
    navigate("/settings");
  }, [navigate]);

  const openPairSelectPopup = useCallback(() => {
    setPairSelectPopupOpen(true);
  }, []);

  const closePairSelectPopup = useCallback(() => {
    setPairSelectPopupOpen(false);
  }, []);

  const openPairSelectPopup1 = useCallback(() => {
    setPairSelectPopup1Open(true);
  }, []);

  const closePairSelectPopup1 = useCallback(() => {
    setPairSelectPopup1Open(false);
  }, []);

  const openTxnsuccessPopup = useCallback(() => {
    setTxnsuccessPopupOpen(true);
  }, []);

  const closeTxnsuccessPopup = useCallback(() => {
    setTxnsuccessPopupOpen(false);
  }, []);

  const onBtn5Click = useCallback(() => {
    navigate("/orderconfirm",{
      state:{
        amount:amount
      }
    });
  }, [navigate]);

  return (
    <>
      <div className={styles.home}>
        <div className={styles.bg} />
        <Nav
          onMenuItemHorizontalitemClick={onMenuItemHorizontalitemClick}
          onMenuItemHorizontalitem1Click={onMenuItemHorizontalitem1Click}
          iconliquidityMining="/iconliquiditymining1.svg"
          icontradingMining="/icontradingmining1.svg"
          iconvftr="/iconvftr1.svg"
          onMenuItemHorizontalitem2Click={onMenuItemHorizontalitem2Click}
          openAccountConnectedPopup={openAccountConnectedPopup}
          group="/profileButton.svg"
          groupRight="10.62%"
          groupLeft="10.62%"
          openConnectWalletPopoupPopup={openConnectWalletPopoupPopup}
          groupTop="10.62%"
          groupBottom="10.62%"
          vector="/vector3.svg"
          iconmenu="/iconmenu.svg"
          image3="/image-3@2x.png"
        />
        <div className={styles.mbListicon6}>
          <img className={styles.coinIcon} alt="" src="/coin.svg" />
          <div className={styles.info}>
            <div className={styles.busdusdc}>
              <span className={styles.busd}>BUSD/</span>
              <b className={styles.usdc}>USDC</b>
            </div>
            <img
              className={styles.iconiconarrowExchangeSwap}
              alt=""
              src="/iconiconarrowexchangeswap.svg"
            />
          </div>
        </div>
        <b className={styles.usdc1}>1.0005 USDC</b>
        <div className={styles.info1}>
          <div className={styles.number}>+227.543364 USDC</div>
          <div className={styles.number1}>Past 24 Hours</div>
        </div>
        <div className={styles.cardExchange}>
          <div className={styles.buttonGroup}>
            <button className={styles.btn}>
              <img
                className={styles.iconiconarrowExchangeSwap}
                alt=""
                src="/iconreset.svg"
              />
            </button>
            <button className={styles.btn}>
              <img
                className={styles.iconiconarrowExchangeSwap}
                alt=""
                src="/icongift1.svg"
              />
            </button>
            <button className={styles.btn} onClick={openSharePopup}>
              <img className={styles.iconshare} alt="" src="/iconshare.svg" />
            </button>
            <button className={styles.btn} onClick={onBtn4Click}>
              <img
                className={styles.iconiconarrowExchangeSwap}
                alt=""
                src="/iconsetting.svg"
              />
            </button>
          </div>
          <div className={styles.pay}>
            <div className={styles.title}>
              <div className={styles.number}>Pay</div>
              <div className={styles.available500}>Available: 500</div>
            </div>
            <div className={styles.inputGroupwDropdown}>
              <button className={styles.dropdown} onClick={openPairSelectPopup}>
                <img
                  className={styles.iconiconarrowDown}
                  alt=""
                  src="/iconiconarrowdown.svg"
                />
                <div className={styles.label}>BUSD</div>
                <img className={styles.iconbusd} alt="" src="/iconbusd.svg" />
              </button>
              <input className={styles.input} type="text" placeholder="0" onChange={handleAmountChange} />
            </div>
          </div>
          <img
            className={styles.iconiconarrowDown2}
            alt=""
            src="/iconiconarrowdown2.svg"
          />
          <div className={styles.pay}>
            <div className={styles.title}>
              <div className={styles.number}>Receive (Estimated)</div>
              <div className={styles.available1200}>Available: 1,200</div>
            </div>
            <div className={styles.inputGroupwDropdown}>
              <button
                className={styles.dropdown}
                onClick={openPairSelectPopup1}
              >
                <img
                  className={styles.iconiconarrowDown}
                  alt=""
                  src="/iconiconarrowdown.svg"
                />
                <div className={styles.label}>USDC</div>
                <img className={styles.iconbusd} alt="" src="/iconusdc2.svg" />
              </button>
              <input className={styles.input} type="text" value={amount2}  />
            </div>
          </div>
          <div className={styles.info}>
            <div className={styles.number}>1 BUSD = 1.0005 USDC</div>
            <img
              className={styles.iconiconarrowExchangeSwap}
              alt=""
              src="/iconiconarrowexchangeswap.svg"
            />
          </div>
          <div className={styles.btn4}>
            <button className={styles.btn5} onClick={openTxnsuccessPopup}>
              <b className={styles.text}>Confirm Order</b>
            </button>
            <div className={styles.number}>
              Enter an amount to see more trading details
            </div>
          </div>
          <div className={styles.dividerhorizontal} />
        </div>
        <div className={styles.tags}>
          <button className={styles.tag}>
            <div className={styles.text1}>24H</div>
          </button>
          <button className={styles.tag}>
            <div className={styles.text1}>1W</div>
          </button>
          <button className={styles.tag}>
            <div className={styles.text1}>1M</div>
          </button>
        </div>
        <div className={styles.chart}>
          <div className={styles.chart1}>
            <div className={styles.chartChild} />
            <img className={styles.chartItem} alt="" src="/vector-17.svg" />
          </div>
          <div className={styles.time}>
            <div className={styles.number}>11:30 AM</div>
            <div className={styles.number}>7:30 PM</div>
            <div className={styles.number}>3:30 AM</div>
            <div className={styles.number}>10:35 AM</div>
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
      {isPairSelectPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePairSelectPopup}
        >
          <PairSelectPopup onClose={closePairSelectPopup} />
        </PortalPopup>
      )}
      {isPairSelectPopup1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePairSelectPopup1}
        >
          <PairSelectPopup onClose={closePairSelectPopup1} />
        </PortalPopup>
      )}
        {isTxnsuccessPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeTxnsuccessPopup}
        >
          <TxnsuccessPopup onClose={closeTxnsuccessPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Home;
