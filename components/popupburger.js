import React from "react";
import styles from "./Popupburger.module.scss";

const Popupburger = ({code}) => {
  return (
    <div className={styles.newburger}>
      <div className={styles.burgeritself}>
        <img
          alt=""
          className={styles.ellipse1}
          src='/images/burgertop.svg'
        />
        <div className={styles.couponandpatty}>
          <p className={styles.couponcode}>
            {code}
          </p>
        </div>
        <div className={styles.burgerbottom} />
      </div>
    </div>
  );
};

export default Popupburger;