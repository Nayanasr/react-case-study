import React from 'react'
import { Card } from 'react-bootstrap'

const AddCart = () => {
  return (

    <div>

     <Card style={{ width: '75rem', border: "none", display: "flex" }} className="mx-2 mt-4 card_style">
        <Card.Title>My Cart(1 item)</Card.Title>
         <Card.Text>
          <div className="button_div d-flex justify-content-right"></div>
         </Card.Text>
         <Card.Img variant="top"  style={{ height: "20rem" }}></Card.Img>
         <Card.Body>
        
         </Card.Body>
    </Card>

   </div>
  )
}

export default AddCart