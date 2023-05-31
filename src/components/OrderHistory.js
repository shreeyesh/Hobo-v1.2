import { memo } from "react";
import styles from "./OrderHistory.module.css";
const OrderHistory = memo(({ priceB, priceA }) => {
  return (
    <div className={styles.history}>
      <div className={styles.orderHistory}>Order History</div>
      <div className={styles.table}>
        <div className={styles.list}>
          <div className={styles.div}>
            <div className={styles.tableCellmultilineLarge}>
              <div className={styles.body}>
                <div className={styles.iconWrapper}>
                  <div className={styles.iconmtv}>
                    <img
                      className={styles.image2Icon}
                      alt=""
                      src="/image-2@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.text}>
                  <div className={styles.title}>132.51853983 MTV</div>
                  <div className={styles.subtitle}>16 hrs</div>
                </div>
              </div>
            </div>
            <div className={styles.tableCellheader}>
              <div className={styles.header}>0,00143200 BNB</div>
            </div>
            <div className={styles.tableCellheader1}>
              <div className={styles.header}>
                <span>{`MTV / `}</span>
                <span className={styles.bnb}>BNB</span>
                <span>{priceA}</span>
              </div>
            </div>
            <div className={styles.tableCelltext}>
              <div className={styles.text1}>Success</div>
            </div>
          </div>
          <div className={styles.div}>
            <div className={styles.tableCellmultilineLarge}>
              <div className={styles.body}>
                <div className={styles.iconWrapper}>
                  <img className={styles.iconftr} alt="" src="/iconftr11.svg" />
                </div>
                <div className={styles.text}>
                  <div className={styles.title}>1.109 FTR</div>
                  <div className={styles.subtitle}>16 hrs</div>
                </div>
              </div>
            </div>
            <div className={styles.tableCellheader}>
              <div className={styles.header}>2.4 BNB</div>
            </div>
            <div className={styles.tableCellheader1}>
              <div className={styles.header}>
                <span>{`FTR / `}</span>
                <span className={styles.bnb}>BNB</span>
                <span>{priceB}</span>
              </div>
            </div>
            <div className={styles.tableCelltext}>
              <div className={styles.text1}>Success</div>
            </div>
          </div>
        </div>
        <div className={styles.tableCell}>
          <div className={styles.tableCelltext2}>
            <div className={styles.text1}>Receiveed</div>
          </div>
          <div className={styles.tableCelltext3}>
            <div className={styles.text1}>Paid</div>
          </div>
          <div className={styles.tableCelltext4}>
            <div className={styles.text1}>Price</div>
          </div>
          <div className={styles.tableCelltext5}>
            <div className={styles.text1}>Status</div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default OrderHistory;
