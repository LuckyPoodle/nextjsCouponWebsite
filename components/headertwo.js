import React from 'react'
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faLocationArrow ,faEnvelope} from '@fortawesome/free-solid-svg-icons'
const Headertwo = () => {
    return (
        <>


<header class="container-fluid utility-header">
        <div class="content">
            <nav>
                <ul>
                    <li>
                        <a style={{"textDecoration":"none"}} href="https://www.burgerking.com.sg/About">About <em>BK</em><sup>®</sup></a>
                       
                    </li><li><a style={{"textDecoration":"none"}} href="https://www.burgerking.com.sg/Delivery" class="nav_deliver"><em>BK</em><sup>®</sup> Delivers</a></li>
                    <li><a style={{"textDecoration":"none"}} href="https://www.burgerking.com.sg/Career">Careers</a></li>
                    <li><a style={{"textDecoration":"none"}} href="https://www.burgerking.com.sg/Locator"><i class="icon icon_pindrop-orange"></i>Find Your <em>BK</em><sup>®</sup> Location</a></li>
                </ul>
            </nav>
        </div>
    </header>



<header class="container-fluid main-header">
        <div class="content">
            <div class="logoNavHolder clearfix">
            <div className="logo"><Image src='/images/icon_logo-main.png' className="icon" alt="me"  width="105" height="105"></Image></div>
               
                <a style={{"textDecoration":"none"}}class="mobileMenu">
                    <i class="menu-icon"><span></span><span></span><span></span></i>
                    <i class="icon icon_close-white"></i>
                </a>
            </div>
            <nav id="mainNav">
                <ul  class="mainNav">
                    <li > 
                        <a style={{"textDecoration":"none"}} href="https://www.burgerking.com.sg/Menu" class="subNavToggle">
                            <span class="menuItem-small">Real Good</span>
                            <span class="menuItem-medium">Food</span>
                            <i class="icon icon_plus-orange"></i>
                            <i class="icon icon_minus-orange"></i>
                        </a>
                        <ul class="subNav clearfix">
                                        <li><a href="https://www.burgerking.com.sg/Menu/Category/1">Beef Burgers</a></li>
                                        <li><a href="https://www.burgerking.com.sg/Menu/Category/2">Chicken &amp; Fish Burgers</a></li>
                                        <li><a href="https://www.burgerking.com.sg/Menu/Category/4">Breakfast</a></li>
                                        <li><a href="https://www.burgerking.com.sg/Menu/Category/5">Beverages</a></li>
                                        <li><a href="https://www.burgerking.com.sg/Menu/Category/6">Coffee</a></li>
                                        <li><a href="https://www.burgerking.com.sg/Menu/Category/7">Sides</a></li>
                                        <li><a href="https://www.burgerking.com.sg/Menu/Category/8">Sweets</a></li>
                                        <li><a href="https://www.burgerking.com.sg/Menu/Category/9">Nutritional Value</a></li>

                        </ul>
                    </li>

                    <li > <a style={{"textDecoration":"none"}} href="https://www.burgerking.com.sg/Offer"><span class="menuItem-small">Get Fresh</span><span class="menuItem-medium">Offers</span></a></li>

                    <li > 
                        <a style={{"textDecoration":"none"}}href="https://www.burgerking.com.sg/Locator" data-ga="send,event,nav,click,locator">
                            <span class="menuItem-small">Your <em>BK</em><sup style={{marginBottom:"1px"}}>®</sup></span>
                            <span class="menuItem-medium">Locator <FontAwesomeIcon className="icon icon_pindrop-header" icon={faLocationArrow} />
</span>
                        </a>
                        
                    </li>

                    <li  class="hasForm">
                        <a style={{"textDecoration":"none"}} href="#" data-ga="send,event,nav,click,search">
                            <span class="menuItem-small">Site</span>
                            <span class="menuItem-medium">Search<FontAwesomeIcon className="icon icon_search-header" icon={faSearch} /></span>
                        </a>
<form action="/Search" class="formArea" enctype="multipart/form-data" method="get" role="form">
    <input type="text" class="navInput" name="search" placeholder="Search"/>
        <button class="navInputSubmit" type="submit" >
        <FontAwesomeIcon className="icon icon_search-header" icon={faSearch} />
        </button>
</form>                   
 </li>

 <li>
     
<FontAwesomeIcon className="icon icon_msg" icon={faEnvelope} />
 </li>


                </ul>
            </nav>
        </div>
    </header>





           
        </>
                )
}

                export default Headertwo
