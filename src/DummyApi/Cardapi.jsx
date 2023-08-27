import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cardapi() {
    const [first, setfirst] = useState([])
    useEffect(() => {
      axios.get('https://dummyjson.com/products/').then((display)=>{
        console.log(display);
        setfirst(display.data.products)})
     
    }, [])

    
    
  return (
    <div>
         {first.map((display)=>{
            return(
         
            
        
<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={display.images[0]} />
      <Card.Body>
        <Card.Title>{display.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            )}
    )}


    </div>
  )
}

export default Cardapi