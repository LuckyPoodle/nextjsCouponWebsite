import React from 'react'
import { API_URL } from '../config/index'
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
  } from 'reactstrap';



const DealBox = ({deal,toggleModal}) => {

    console.log(deal);

    return (
        <CardGroup className="dealboxcard">
        <Card onClick={()=>toggleModal(deal.Code)}  className="justify-content-center align-items-center">
   
          {deal.Image==null?<></>:<CardImg top width="100%" src={API_URL+deal.Image.formats.small.url} alt="Card image cap" />}
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
