import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';


function TrialAxios() {
    const [first, setfirst] = useState([])
    useEffect(() => {
        axios.get('https://dummyjson.com/products/').then((display)=>{
            console.log(display);
            setfirst(display.data.products)
     } )
    }, [])
  return (
    <div className='container' >
      
        <h1 className='bg-dark text-danger p-3'>e - ShoppY</h1>
        {first.map((display)=>( 
          <div className='d-inline-flex'>
 
    <Card className='shadow p-3 m-2 bg-white rounded' style={{ width: '18rem',height:'37rem' }}>
    <Carousel>
      <Carousel.Item style={{width:'37rem'}}>
        <img
          className="d-block w-100"
          src={display.images[0]}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={display.images[1]}
          alt="Second slide"
        />

        
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={display.images[2]}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
      
      
      <Card.Body>
        <Card.Title className='text-primary'>{display.title} </Card.Title>
        <Card.Text>
          {display.description} 
        </Card.Text>
         <h5>Price : ${display.price}</h5>
         <div>
          <p>
            Qty : 
            <Button className='m-2 p-1'>-</Button>
            1
            <Button className='m-2 p-1'>+</Button>
          </p>
         </div>
        <Button style={{ width: '10rem' }} variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>
    
    </div>

        )
        
        )}
        
       
        
        </div>
  )
}

export default TrialAxios