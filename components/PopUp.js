import React from "react";
import styles from "./PopUp.module.scss";
import Link from 'next/link';


const PopUp = ({ code, imageurl, upsells }) => {
  console.log(code);
  console.log(imageurl);
  console.log(upsells);



  return (
    <div className={styles.frame2}>
      <img
        alt=""
        className={styles.j1001358JuneECouponWmJd051}
        src={imageurl}
      />
      <p className={styles.redeemPromoCode}>
        REDEEM PROMO CODE{" "}
      </p>
      <div className={styles.couponCode}>
        <p className={styles.couponcode123}>
          {code}
        </p>
      </div>
      <p className={styles.youMayAlsoBeInterestedIn}>
        You may also be interested in .....
      </p>
      <div>

        {upsells == null ? <hr></hr> :
          <div className={styles.frame1}>
            {upsells.map((item) => (
              <div className={styles.card} >

                <Link href={`/`+item.urlname}>
                  <img
                    alt=""
                    className={styles.smallimage}
                    src={item.Image.formats.small.url}
                  />
                </Link>

              </div>
            ))}
          </div>
        }






      </div>
    </div>
  );
};

export default PopUp;