/* import React from 'react'
import Image from 'next/image';
import {
    Button
  } from 'reactstrap';
const HorizontalDealBox = ({deal,toggleModal}) => {
    return (
      <div className="horizontaldealboxcontainer">
          <Image className="horizontaldealboximage" src={deal.Image.formats.large.url} width="500" height="500"></Image>
            <div className="horizontaldealboxcontent">
                <p className="horizontaldealboxtitle">{deal.Title}</p>
                <p className="horizontaldealboxdesc">{deal.Description}</p>
                <Button style={{"background-color":"#0033A0"}}className="horizontaldealbutton"  onClick={()=>toggleModal(deal.Code)}>Redeem</Button>
            </div>
      </div>
    )
}

export default HorizontalDealBox
 */