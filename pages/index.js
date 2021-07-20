import Head from 'next/head';
import { useState, useEffect } from 'react';

import { Container } from 'reactstrap';
import Image from 'next/image'

import Popupburger from '../components/popupburger';

import { API_URL } from '../config/index'
import DealBox from '../components/dealbox'


import Modal from 'react-modal';
import date from 'date-and-time';

import useSWR from 'swr';

const customStyles = {

  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(245, 235, 219, 1)',


  },
};



function Home({ deals }) {

  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);

  const [couponCode, setCouponCode] = useState('coupon');
  const [mydeals, setMydeals] = useState();



  Modal.setAppElement('#modalbind');

  const myLoader = ({ src, width, quality }) => {
    return `https://backendserver-kjd9q.ondigitalocean.app${src}?w=${width}&q=${quality || 75}`
  }

  const now = new Date();

  var sgtime = date.format(now, 'H [GMT]+0800');

  sgtime = sgtime.slice(0, 2);

  console.log('sg time is _');
  console.log(sgtime);

  const { data, error } = useSWR(sgtime >= 17 ? `${API_URL}/deals?_where[Dinner_Menu]=true` : sgtime < 12 ? `${API_URL}/deals?_where[Breakfast_Menu]=true` : `${API_URL}/deals?_where[Lunch_Menu]=true`);



  useEffect(() => {

    if (data) {
      setMydeals(data)

    }
  }, [data])


  function toggle(couponcode) {
    setModal(!modal);
    setCouponCode(couponcode.toString());

  }


  const toggleModalClose = () => {
    setModal(!modal);
    //   setCopied(false);
  }






  return (


    <div id='modalbind'>
      <Head>
        <title>Voucher App Prototype</title>
        <meta name="description" content="A Prototype" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="instructionsbox">
        <div className="heading">
          <Image loader={myLoader} className="inner headingicon" src='/images/burger.svg' alt="me" width="30" height="30" />
          <p className="inner headingtitle"> Digital Coupons</p>
        </div>
        <p className="headinginstruction">SCAN THE PROMO QR CODE ON KIOSKS</p>
        {/* <Button onClick={toggleTemp}>TEMPORARY BUTTON Change Deals Layout</Button> */}

      </div>


      {mydeals == null ? <div className="container"> <p style={{ textAlign: "center", fontSize: "40px" }}>No Deals Yet</p></div> : <Container className="container">
        <div className="row">

          {mydeals.map((deal) => (

            <div key={deal.id} className="col-lg-4 col-6" style={{ padding: '5px' }}>
              <DealBox deal={deal} toggle={toggle} />
            </div>



          ))}
        </div>


        <Modal
          isOpen={modal}


          onRequestClose={toggleModalClose}
          style={customStyles}

          contentLabel="Redeem Coupon"
        >

          <Popupburger code={couponCode.toString()} />




        </Modal>




      </Container>}

      {deals == null ? <div className="container"> <p style={{ textAlign: "center", fontSize: "40px" }}>No Deals Yet</p></div> : <Container className="container">
        <div className="row">

          {deals.map((deal) => (

            <div key={deal.id} className="col-lg-4 col-6" style={{ padding: '5px' }}>
              <DealBox deal={deal} toggle={toggle} />
            </div>



          ))}
        </div>


        <Modal
          isOpen={modal}


          onRequestClose={toggleModalClose}
          style={customStyles}

          contentLabel="Redeem Coupon"
        >

          <Popupburger code={couponCode.toString()} />




        </Modal>




      </Container>}




    </div>

  )
}

export default Home;

//{loading?<div>LOADING</div>:showComments?<div>hey</div>:<Redeembox onAddComment={addCommentHandler}/>}





export async function getStaticProps() {

  // var today = new Date();
  // var time = today.getHours()
  // console.log("localestring");
  // var sgtime=today.toLocaleTimeString('en-SG',{hour:'numeric',hour12:false});
  // console.log(sgtime);

  // const now = new Date();

  //  var sgtime = date.format(now, 'H [GMT]+0800');

  // sgtime = sgtime.slice(0, 2);

  // console.log(sgtime);

  try {
    //fetching all day
    const res = await fetch(`${API_URL}/deals?_where[Dinner_Menu]=true&[Breakfast_Menu]=true&[Lunch_Menu]=true`)
    const deals = await res.json()

    return {
      props: { deals },

    }

    // if (sgtime >= 17) {



    //   const res = await fetch(`${API_URL}/deals?_where[Dinner_Menu]=true`)
    //   const deals = await res.json()

    //   return {
    //     props: { deals },

    //   }

    // } else if (sgtime < 12) {


    //   const res = await fetch(`${API_URL}/deals?_where[Breakfast_Menu]=true`)
    //   const deals = await res.json()

    //   return {
    //     props: { deals },

    //   }

    // } else {

    //   const res = await fetch(`${API_URL}/deals?_where[Lunch_Menu]=true`)
    //   const deals = await res.json()

    //   return {
    //     props: { deals },

    //   }
    // }

  } catch (error) {
    console.log(error)
    const deals = null
    return {
      props: { deals },

    }

  }


}