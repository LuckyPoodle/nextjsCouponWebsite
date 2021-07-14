import React from 'react'
import Image from 'next/image'

const Footertwo = () => {
  const myLoader = ({ src, width, quality }) => {
    return `https://backendserver-kjd9q.ondigitalocean.app/${src}?w=${width}&q=${quality || 75}`
  }
  

  return (
    <div className="footerstick">
      <div className=" bg-green  text-white d-flex-column text-center">
        <hr className="mt-0" />

        <div className="text-center">
          <h4 className="footermessage1">Make it your way</h4>
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item resize">
            <Image loader={myLoader} loading="eager" src='/images/google-play-badge.png' alt="me" width="320px" height="94px"></Image>
          
            </li>
            <li className="list-inline-item resize">
            <Image loader={myLoader} loading="eager" src='/images/appstore.png' alt="me" width="320px" height="94px"></Image>
         
            </li>
            <div className="bottomcopyright">
              {/* <div><span>Copyright 2021</span></div> */}
              <div className="small-font-size">Google Play and the Google Play logo are trademarks of Google LLC.
                App Store and the App Store logo are trademarks of Apple Inc.</div>
            
            </div>
          </ul>
        </div>











      </div>
    </div>
  )
}

export default Footertwo


{/* 
  
  //// <div className="py-3 text-center">
  
  
  <div className="container text-left text-md-center">
<div className="row">
 
  <div className="col-md-3 mx-auto shfooter">
    <h5 className="my-2 font-weight-bold d-none d-md-block">Product</h5>
    <div className="d-md-none title" data-target="#Product" data-toggle="collapse">
      <div className="mt-3 font-weight-bold">Product
        <div className="float-right navbar-toggler">
          <i className="fas fa-angle-down"></i>
          <i className="fas fa-angle-up"></i>
        </div>
      </div>
    </div>
    <ul className="list-unstyled collapse" id="Product">
      <li><a href="https://codepen.io/jettaz">Create Websites</a></li>
      <li><a href="https://codepen.io/jettaz">Secure Cloud Hosting</a></li>
      <li><a href="https://codepen.io/jettaz">Engage Your Audience</a></li>
      <li><a href="https://codepen.io/jettaz">Website Support</a></li>
    </ul>
  </div>
 
  <hr claclassNamess="clearfix w-100 d-md-none mb-0"/>
 
  <div className="col-md-3 mx-auto shfooter">
    <h5 className="my-2 font-weight-bold d-none d-md-block">Company</h5>
    <div className="d-md-none title" data-target="#Company" data-toggle="collapse">
      <div className="mt-3 font-weight-bold">Company
        <div className="float-right navbar-toggler">
          <i className="fas fa-angle-down"></i>
          <i className="fas fa-angle-up"></i>
        </div>
      </div>
    </div>
    <ul className="list-unstyled collapse" id="Company">
      <li><a href="https://codepen.io/jettaz">About</a></li>
      <li><a href="https://codepen.io/jettaz">Careers</a></li>
      <li><a href="https://codepen.io/jettaz">Support</a></li>
      <li><a href="https://codepen.io/jettaz">Pricing</a></li>
      <li><a href="https://codepen.io/jettaz">FAQ</a></li>
    </ul>
  </div>

  <hr className="clearfix w-100 d-md-none mb-0" />

  <div className="col-md-3 mx-auto shfooter">
    <h5 className="my-2 font-weight-bold d-none d-md-block">Resources</h5>
    <div className="d-md-none title" data-target="#Resources" data-toggle="collapse">
      <div className="mt-3 font-weight-bold">Resources
        <div className="float-right navbar-toggler">
          <i className="fas fa-angle-down"></i>
          <i className="fas fa-angle-up"></i>
        </div>
      </div>
    </div>
    <ul className="list-unstyled collapse" id="Resources">
      <li><a href="https://codepen.io/jettaz">Blog</a></li>
      <li><a href="https://codepen.io/jettaz">eBooks</a></li>
      <li><a href="https://codepen.io/jettaz">Whitepapers</a></li>
      <li><a href="https://codepen.io/jettaz">Comparison Guide</a></li>
      <li><a href="https://codepen.io/jettaz">Website Grader</a></li>
    </ul>
  </div>

  <hr className="clearfix w-100 d-md-none mb-0"/>

  <div className="col-md-3 mx-auto shfooter">
    <h5 className="my-2 font-weight-bold d-none d-md-block">Get Help</h5>
    <div className="d-md-none title" data-target="#Get-Help" data-toggle="collapse">
      <div className="mt-3 font-weight-bold">Get Help
        <div className="float-right navbar-toggler">
          <i className="fas fa-angle-down"></i>
          <i className="fas fa-angle-up"></i>
        </div>
      </div>
    </div>
    <ul className="list-unstyled collapse" id="Get-Help">
      <li><a href="https://codepen.io/jettaz" target="_blank">Help Center</a></li>
      <li><a href="https://codepen.io/jettaz">Contact Us</a></li>
      <li><a href="https://codepen.io/jettaz">Privacy Policy</a></li>
      <li><a href="https://codepen.io/jettaz">Terms</a></li>
      <li><a href="https://codepen.io/jettaz">Login</a></li>
    </ul>
  </div>

</div>
</div> */}