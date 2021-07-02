import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import QRCode from "react-qr-code";
import { Container, Row, Col, Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Image from 'next/image'
import HeaderThree from '../components/headerthree';

import Footertwo from '../components/footertwo';
import { API_URL } from '../config/index'
import DealBox from '../components/dealbox'
import HorizontalDealBox from '../components/horizontaldealbox'
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Modal from 'react-modal';
import date from 'date-and-time';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard } from '@fortawesome/free-solid-svg-icons'
const customStyles = {

  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};



function Home({ deals }) {

  const [showComments, setShowComments] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [tempArrangement, setTempArrangement] = useState(false);
  const [couponCode, setCouponCode] = useState('coupon');
  const [headerchange, setHeaderchange] = useState(false);
  const [copied, setCopied] = useState(false);

  Modal.setAppElement('#modalbind');


  useEffect(() => {
    console.log(Date().toLocaleString());

  }, [])

  const toggleModal = (couponcode) => {
    setModal(!modal);
    setCouponCode(couponcode);

  }

  const toggleModalClose = () => {
    setModal(!modal);
    setCopied(false);
  }

  const toggleTemp = () => {
    setTempArrangement(!tempArrangement);
  }

  const toggleheader = () => {
    setHeaderchange(!headerchange);

  }


  // function addCommentHandler(commentData) {
  //   console.log(commentData)
  //   setLoading(true)

  //   //send data to API
  //   fetch('https://vouchercode123.herokuapp.com/redeem/'+commentData.code,{
  //     method:'POST',
  //     body:JSON.stringify(commentData),
  //     headers:{
  //       'Content-Type':'application/json'
  //     }
  //   }).then(
  //     response=>{
  //       response.json();
  //       console.log('response is ');
  //       console.log(response)
  //       if (response.status==201){
  //         setShowComments(true)

  //       }
  //       setLoading(false)

  //     }

  //     )
  //   .then((data)=>console.log(data))
  // }






  return (


    <div id='modalbind'>
      <Head>
        <title>Voucher App Prototype</title>
        <meta name="description" content="A Prototype" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderThree />
      <div className="instructionsbox">
        <div className="heading">
          <Image className="inner headingicon" src='/images/burger.svg' alt="me" width="30" height="30" />
          <p className="inner headingtitle"> Digital Coupons</p>
        </div>
        <p className="headinginstruction">SCAN THE PROMO QR CODE ON KIOSKS</p>
        {/* <Button onClick={toggleTemp}>TEMPORARY BUTTON Change Deals Layout</Button> */}

      </div>

      {deals==null?<span>No Deals Yet</span>: <Container className="container">
          <div className="row">

            {deals.map((deal) => (

              <div key={deal.id} className="col-lg-4 col-6" style={{ padding: '5px' }}>
                <DealBox  deal={deal} toggleModal={toggleModal} />
              </div>



            ))}
          </div>



          <Modal
            isOpen={modal}

            onRequestClose={toggleModalClose}
            style={customStyles}
            contentLabel="Redeem Coupon"
          >




            <div className="modalcoupon">
              <span className="modalcouponheading">Redeem Coupon</span>
              <div className="modalrow">
                <span className="modalcouponcode">{couponCode.toString()}</span>

                <CopyToClipboard key="o3" text={couponCode}
                >
                  <div>
                    <FontAwesomeIcon style={{ width: "15px" }} icon={faClipboard} />
                  </div>
                </CopyToClipboard>
              </div>

              <Link href="https://play.google.com/store/apps/details?id=com.oddle.burkerkingcustomerapp/" passHref={true}>
             
              <Image loading="eager" src='/images/google-play-badge.png' alt="me" width="160px" height="47px"></Image>
             </Link>

             <Link href="https://apps.apple.com/sg/app/burger-king-singapore/id1233020916/" passHref={true}>
             <Image loading="eager" src='/images/appstore.png' alt="me" width="160px" height="47px"></Image>
        
     
             </Link>
           

            </div>



          </Modal>


        </Container>}

      

      <Footertwo />

    </div>

  )
}

export default Home;

//{loading?<div>LOADING</div>:showComments?<div>hey</div>:<Redeembox onAddComment={addCommentHandler}/>}





export async function getStaticProps() {
  console.log('getstaticprops!!')
  // var today = new Date();
  // var time = today.getHours()
  // console.log("localestring");
  // var sgtime=today.toLocaleTimeString('en-SG',{hour:'numeric',hour12:false});
  // console.log(sgtime);

  const now = new Date();
  var sgtime = date.format(now, 'H [GMT]+0800');
  console.log(sgtime.slice(0, 2));
  sgtime = sgtime.slice(0, 2);

  if (sgtime >= 17) {
    // const res = await fetch(`${API_URL}/deals?_where[onlydisplayatnight]=true`)
    const res = await fetch(`${API_URL}/deals?_where[Dinner_Menu]=true`)
    const deals = await res.json()

    return {
      props: { deals },
      revalidate: 1,
    }

  } else if (sgtime < 12) {
    const res = await fetch(`${API_URL}/deals?_where[Breakfast_Menu]=true`)
    const deals = await res.json()

    return {
      props: { deals },
      revalidate: 1,
    }

  } else {
    const res = await fetch(`${API_URL}/deals?_where[Lunch_Menu]=true`)
    const deals = await res.json()

    return {
      props: { deals },
      revalidate: 1,
    }
  }


}