import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Task11.css';


function Task11Ternary() {
<style>
    img{ 
        
    }
</style>

  return (



    <div>
        <h1 style={{fontFamily:'cursive',color:'red'}}> <b>Sample Website</b> </h1>
        <Navbar bg="success" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Main</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
       {/* Carousel */}
       <Carousel>
      <Carousel.Item interval={1000}>
        <img style={{width:"50%",height:"600px"}}
          className="d-block w-100"
          src="https://m.economictimes.com/thumb/msid-71699956,width-800,height-600,resizemode-4,imgsize-179228/citi-on-infosys.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Infosys Foundation</h3>
          <p>We bring you powerful advantages to navigate your digital transformation</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img style={{width:"50%",height:"600px"}}
          className="d-block w-100"
          src="https://contentstatic.techgig.com/photo/94829856/is-wipro-a-villain-of-the-it-industry-in-2022.jpg?24666"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Realizing a more sustainable future.l</h3>
          <p>See how Wipro is leading the automotive engineering shift to the software-defined vehicle.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{width:"50%",height:"600px"}}
          className="d-block w-100"
          src="https://www.financialexpress.com/wp-content/uploads/2019/11/1-760.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 >WHAT WE DO
A look inside our toolbox</h3>
          <p>
          WHAT WE DO
A look inside our toolbox
Real transformation demands hard work, persistence, and the right tools for the job. For over 20 years, we've redefined craftsmanship and shared our expertise to help our clients succeed.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    {/* cards */}
    <Card id='container' style={{ width: '58rem',height:'30px' }} >
      <Card.Img className='one1' variant="top" src="https://im.whatshot.in/img/2022/May/eon-it-cropped-1653542702.jpg?w=720&h=490&cc=1" />
      <Card.Body>
        <Card.Title>Pune IT Park</Card.Title>
        <Card.Text>
        The Biggest IT Parks In Pune That Will Blow Your Mind!
        </Card.Text>
        <Button variant="primary">Register Here</Button>
      </Card.Body>
      <Card.Img variant="top" src="https://orelpc.com/img/image-23.png" />
      <Card.Body>
        <Card.Title>DLF Cybercity – Manapakkam</Card.Title>
        <Card.Text>
        DLF Cybercity is developed by DLF Assets LTD. One of India’s most successful SEZ developments in the Southern Region of India located in Mount Poonamallee Road
        </Card.Text>
        <Button variant="primary">Register Here</Button>
      </Card.Body>
      <Card.Img variant="top" src="https://cdn.siasat.com/wp-content/uploads/2022/02/IT-Park-ORR.jpg" />
      <Card.Body>
        <Card.Title> Telangana IT Park</Card.Title>
        <Card.Text>
        Telangana has been planning to expand IT sectors to tier-2 and tier-3 cities to encourage companies to initiate facilities where skilled talent and adequate infrastructure are available.
        </Card.Text>
        <Button variant="primary">Register Here</Button>
      </Card.Body>
    </Card>
        
        
        </div>
  )
}

export default Task11Ternary