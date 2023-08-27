import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function CardWithMap() {
    const [first, setfirst] = useState([{Id : 1 , Name : "Sarath" , Img : "https://img.freepik.com/free-vector/handsome-man_1308-85984.jpg?w=2000" }, {Id : 2 , Name : "Sajid ", Img : "https://w7.pngwing.com/pngs/449/734/png-transparent-businessperson-cartoon-man-hand-boy-cartoon-thumbnail.png"}])
  return (
    first.map((display)=>
    <div>
        
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={display.Img }/>
      <Card.Body>
        <Card.Title>{display.Id}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        
        </div>
    )
  )
}

export default CardWithMap