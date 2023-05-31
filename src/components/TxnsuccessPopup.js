import ModalSuccess from "./ModalSuccess";
import styles from "./TxnsuccessPopup.module.css";
const TxnsuccessPopup = ({ onClose }) => {
  return (
    <div className={styles.txnsuccessPopup}>
      <ModalSuccess />
      <img className={styles.hoboLogoIcon} alt="" src="/hobologo@2x.png" />
    </div>
  );
};

export default TxnsuccessPopup;
