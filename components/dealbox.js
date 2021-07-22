import React from 'react'
import { API_URL } from '../config/index'
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
  } from 'reactstrap';


//src={API_URL+deal.Image.formats.small.url}
const DealBox = ({deal,toggle}) => {

    console.log(deal);

    return (
        <CardGroup className="dealboxcard">
        <Card onClick={()=>toggle(deal.Code,deal.Category,deal.Image.formats.small.url)}  className="justify-content-center align-items-center">
   
          {deal.Image==null?<></>:<CardImg top width="100%" src={deal.Image.formats.small.url} alt="Promo Image" />}
          <CardBody>
            <CardTitle tag="h5"className="dealboxtitle">{deal.Title}</CardTitle>
           
            <CardText className="dealboxdesc">{deal.Description}</CardText>
            
            
          </CardBody>
          {/* <Button className="dealboxbutton " style={{"background-color":"#0033A0"}} onClick={()=>toggleModal(deal.Code)}>Redeem</Button> */}
          
        </Card>
        
      </CardGroup>
    )
}

export default DealBox
