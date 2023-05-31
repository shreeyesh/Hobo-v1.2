import { useState, useCallback, useEffect } from "react";
import AccountConnectedPopup from "./AccountConnectedPopup";
import PortalPopup from "./PortalPopup";
import styles from "./ConnectWalletPopoup.module.css";
import { ethers } from 'ethers';
// import AccountContext from './components/AccountContext';
import AccountContext from './AccountContext';

// const accountAddress = 'example-address';
// import { useAccount, useConnect, useDisconnect } from 'wagmi'
// import { InjectedConnector } from 'wagmi/connectors/injected'
// import { alchemyProvider } from 'wagmi/providers/alchemy'
// import { WagmiConfig } from 'wagmi'
// import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
// import { publicProvider } from 'wagmi/providers/public'

const ConnectWalletPopoup = ({ onClose }) => {
  const [isAccountConnectedPopupOpen, setAccountConnectedPopupOpen] =
    useState(false);
  const [isAccountConnectedPopup1Open, setAccountConnectedPopup1Open] =
    useState(false);

  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [accountAddress, setAccountAddress] = useState("");
  setAccountAddress  = useContext(AccountContext);


  const handleConnectWallet = async () => {
    // Check if the site is already connected, if yes return already connected
    if (window.ethereum && window.ethereum.selectedAddress) {
      // current address
      const currentAddress = window.ethereum.selectedAddress;
      console.log('Already connected with : ',currentAddress);
      return;
    }
    
    try {
      // const url = "https://polygon-mumbai.g.alchemy.com/v2/jPZqholKXkdi1N3EE7KpZDNNu7wHMF7y"
      // Connect to MetaMask
      await window.ethereum.enable();
      provider = new ethers.providers.Web3Provider(window.ethereum)
      // provider = new ethers.JsonRpcProvider(url)
      await provider.send("eth_requestAccounts", [])
      const signer = provider.getSigner()
      const accountAddress = await signer.getAddress()
      console.log(accountAddress)
      // const provider = new ethers.providers.Web3Provider(window.ethereum);
      // const signer = provider.getSigner();
      // setProvider(provider);
      // setSigner(signer);

      // // Get the user's account address
      // const address = await signer.getAddress();
      // setAccountAddress(address);
          // Display Connected Account in AccountConnectedPopup
    // setAccountAddress(accountAddress);

      console.log('Connected to wallet with : ',accountAddress);
    } catch (err) {
      console.error(err);
    }
  };


  // useEffect(() => {
  //   const provider = new ethers.JsonRpcProvider.Web3Provider(window.ethereum);
  //   setProvider(provider);
  // }, []);

  // const connectWallet = async () => {
  //   try {
  //     const [account] = await provider.send("eth_requestAccounts", []);
  //     setAccountAddress(account);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  const openAccountConnectedPopup = useCallback(() => {
    setAccountConnectedPopupOpen(true);
  }, []);

  const closeAccountConnectedPopup = useCallback(() => {
    setAccountConnectedPopupOpen(false);
  }, []);

  const openAccountConnectedPopup1 = useCallback(() => {
    setAccountConnectedPopup1Open(true);
  }, []);

  const closeAccountConnectedPopup1 = useCallback(() => {
    setAccountConnectedPopup1Open(false);
  }, []);

  return (
    <>
      <div className={styles.connectwalletPopoup}>
        <div className={styles.modalSuccess}>
          <div className={styles.nav}>
            <div className={styles.titleicon}>
              <img
                className={styles.iconiconarrowLeft2}
                alt=""
                src="/iconiconarrowleft2.svg"
              />
              {/* <button className={styles.title} >Connect Wallet
            </button> */}
            </div>
            <button className={styles.iconcloseSmall} onClick={onClose}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
              <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
            </button>
          </div>
          <div className={styles.checkbox}>
            <input className={styles.checkboxInput} type="checkbox" required />
            <div className={styles.iHaveReadContainer}>
              <span>{`I have read, understand, and agree to the `}</span>
              <span className={styles.termsOfService}>Terms of Service.</span>
            </div>
          </div>
          <div className={styles.list}>
            <button className={styles.button} onClick={handleConnectWallet}>
              <img
                className={styles.iconmetaMask}
                alt=""
                src="/iconmetamask.svg"
              />
              <div className={styles.metaMask} >Meta Mask</div>
            </button>
            <p>Account Address: {accountAddress}</p>
            <button className={styles.button}>
              <img className={styles.iconmetaMask} alt="" src="/iconbnb.svg" />
              <div className={styles.metaMask}>Binance Chain Wallet</div>
            </button>
            <button
              className={styles.button}
              onClick={openAccountConnectedPopup}
            >
              <img
                className={styles.iconmetaMask}
                alt=""
                src="/iconwalletconnect.svg"
              />
              <div className={styles.metaMask}>WalletConnect</div>
            </button>
            <button
              className={styles.button}
              onClick={openAccountConnectedPopup1}
            >
              <img
                className={styles.iconmetaMask}
                alt=""
                src="/iconportis.svg"
              />
              <div className={styles.metaMask}>Portis</div>
            </button>
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
      {isAccountConnectedPopup1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAccountConnectedPopup1}
        >
          <AccountConnectedPopup onClose={closeAccountConnectedPopup1} />
        </PortalPopup>
      )}
    </>
  );
};

export default ConnectWalletPopoup;
