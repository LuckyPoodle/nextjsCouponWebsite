import React from "react";
import styles from "./PopUp.module.scss";


const PopUp = ({ code, imageurl, upsells }) => {
  console.log(code);
  console.log(imageurl);
  console.log(upsells);
  const { data, error } = useSWR(sgtime >= 17 ? `${API_URL}/deals?_where[Dinner_Menu]=true` : sgtime < 12 ? `${API_URL}/deals?_where[Breakfast_Menu]=true` : `${API_URL}/deals?_where[Lunch_Menu]=true`);
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
              <div className={styles.card}>
                <img
                  alt=""
                  className={styles.smallimage}
                  src={item.Image.formats.small.url}
                />
              </div>
            ))}
          </div>
        }






      </div>
    </div>
  );
};

export default PopUp;