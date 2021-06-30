import React from 'react'
import Image from 'next/image'
const Footer = () => {
    return (
        <div className="footercontainer">

            <div className="footerrow" >
                <p className="footertext">Make it your way</p>
                <Image className="footertext" src='/images/google-play-badge.png' alt="me" width="160px" height="47px"></Image>


            </div>
            <p>Google Play and the Google Play logo are trademarks of Google LLC.</p>
        </div>
    )
}

export default Footer
