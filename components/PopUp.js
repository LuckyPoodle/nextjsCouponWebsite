import React from "react";
import {useState,  useEffect } from 'react';
import styles from "./PopUp.module.scss";
import Link from 'next/link';


const PopUp = ({ code, imageurl, upsells }) => {

  const [currentcode,setCurrentCode]=useState('');
  const [currentimageurl,setCurrentimageurl]=useState('');
  console.log(code);
  console.log(imageurl);
  console.log(upsells);


  useEffect(() => {

    setCurrentCode(code);
    setCurrentimageurl(imageurl);
    
  }, []);

  function changecurrentcodeandimage(codetochange,imagetochange){
    setCurrentimageurl(imagetochange);
    setCurrentCode(codetochange);

  }




  return (
    <div className={styles.frame2}>
      <img
        alt=""
        className={styles.j1001358JuneECouponWmJd051}
        src={currentimageurl}
      />
      <p className={styles.redeemPromoCode}>
        REDEEM PROMO CODE{" "}
      </p>
      <div className={styles.couponCode}>
        <p className={styles.couponcode123}>
          {currentcode}
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

                
                  <img
                  onClick={()=>changecurrentcodeandimage(item.Code,item.Image.formats.small.url)}
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