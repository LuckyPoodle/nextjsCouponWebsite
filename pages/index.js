import Head from 'next/head';
import { useState, useEffect } from 'react';

import { Container, Modal, ModalBody,ModalHeader } from 'reactstrap';
import Image from 'next/image'



import { API_URL } from '../config/index'
import DealBox from '../components/dealbox'


//import Modal from 'react-modal';
import date from 'date-and-time';

import useSWR from 'swr';
import PopUp from '../components/PopUp';

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
  const [similarCategoryDeals, setSimilarCategoryDeals] = useState([]);
  const [imageurl, setImageUrl] = useState('');


  const [couponCode, setCouponCode] = useState('coupon');
  const [mydeals, setMydeals] = useState();
  const [currentlivedeals, setCurrentLivedeals] = useState();




  // Modal.setAppElement('#modalbind');

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



    var livedeals = []

    if (data) {
      data.forEach(element => {
        console.log('ITERATING!!!!!!!!!!');
        var strapidate = new Date(element.ExpiryDay);
        console.log(strapidate)
        console.log(now)
        if (element.LongRunningDeal != true && strapidate < now) {
          console.log("EXPIRED " + element.Title)

        } else {
          livedeals.push(element);
        }

      });

      setCurrentLivedeals(livedeals);
      setMydeals(livedeals);

    }
  }, [data])


  function toggle(couponcode, categoryname, imageurl, dealkey) {
    console.log("CLICKED ON TOGGLE")
    if (modal) {
      setModal(!modal);
      return;
    } else {
      setCouponCode(couponcode.toString());
      getSimilarCategoryPdts(categoryname, dealkey);
      setImageUrl(imageurl);
      console.log("SIMILAR CATEGORY: ");
      console.log(similarCategoryDeals)

    }
    setModal(!modal);

  }

  function getSimilarCategoryPdts(categoryname, dealkey) {
    var upsellitems = []
    currentlivedeals.forEach(element => {
      if (element.Category == categoryname && element.id != dealkey) {
        upsellitems.push(element)

      }
    });

    // Shuffle array
    const shuffled = upsellitems.sort(() => 0.5 - Math.random());

    if (shuffled.length >= 3) {
      // Get sub-array of first n elements after shuffled
      let selected = shuffled.slice(0, 3);

      setSimilarCategoryDeals(selected);


    } else {
      
      //lesser than 3 other same-category deals
      setSimilarCategoryDeals(shuffled);

    }



    

  }


  const toggleModalClose = () => {
    setModal(!modal);
    //   setCopied(false);
  }






  return (


    <>
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
        <p className="headinginstruction">USE PROMO CODE TO CHECK OUT AT KIOSK</p>
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


        {/* <Modal
          isOpen={modal}


          onRequestClose={toggleModalClose}
          style={customStyles}

          contentLabel="Redeem Coupon"
        >

<PopUp code={couponCode.toString()} imageurl={imageurl.toString()}  />




        </Modal> */}

        <Modal className="modalcss" isOpen={modal} toggle={toggle} >

          <ModalBody>
          <ModalHeader toggle={toggle}></ModalHeader>
            <PopUp code={couponCode.toString()} imageurl={imageurl.toString()} upsells={similarCategoryDeals} />
          </ModalBody>

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

        {/* 
        <Modal
          isOpen={modal}


          onRequestClose={toggleModalClose}
          style={customStyles}

          contentLabel="Redeem Coupon"
        >


          <PopUp code={couponCode.toString()} imageurl={imageurl.toString()} />



        </Modal> */}

        <Modal className="modalcss" isOpen={modal} toggle={toggle} >

        <ModalHeader toggle={toggle}></ModalHeader>
          <PopUp code={couponCode.toString()} imageurl={imageurl.toString()} upsells={similarCategoryDeals} />


        </Modal>




      </Container>}




    </>

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
    console.log('fetching longrunnig')
    const res = await fetch(`${API_URL}/deals?_where[LongRunningDeal]=true`)
    const deals = await res.json()
    //console.log(deals)

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