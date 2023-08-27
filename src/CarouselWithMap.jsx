import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';

function CarouselWithMap() {
    const [first, setfirst] = useState([{ Name : "Bullet", Year :2017, id :1, img : "https://i.pinimg.com/736x/32/39/81/323981629c252dc299bbb8461f3d8288.jpg" },{Name :"Dominar", Year :2019, id : 2, img :"https://bd.gaadicdn.com/processedimages/bajaj/dominar-400-ug/640X309/dominar-400-ug61767d8504389.jpg", img : "https://www.rushlane.com/wp-content/uploads/2020/07/bajaj-dominar-diablo-cyclops-black-26.jpg"}] )
  return (
    
    <div>
    
    <Carousel>
      {first.map((display)=>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={display.img}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{display.Name}</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      )
}
    </Carousel>

    </div>
    
  )
}

export default CarouselWithMap