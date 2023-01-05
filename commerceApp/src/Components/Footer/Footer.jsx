import React from 'react'
import './Footer.css'
import { Container,Row,Col,ListGroup,ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'
function Footer() {
  const year=new Date().getFullYear()
  return (
    <div className='footer mt-5 p-5 '>
      <Container>
        <Row>
          <Col lg="4">
         
              <div>
                <h1>Multimart</h1>
                <p>Since 1990s Working</p>
              
            
            </div>
            <p className="footer-text mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
             Expedita doloremque error culpa possimus enim ratione libero quas delectus pariatur debitis,
             consequatur quibusdam necessitatibus incidunt dolores, veniam cupiditate maiores porro. At!</p>
          </Col>
          <Col lg="2">
            <div className="footer-quicker">
              <h4 className="quick-link text-2xl mb-4">Top Catigories</h4>
              <ListGroup >
                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Modern Sofa</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Arm Chair</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3">
          <div className="footer-quicker">
              <h4 className="quick-link text-2xl mb-4">Useful Links</h4>
              <ListGroup >
                <ListGroupItem className='ps-0 border-0'>
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to="/login">Login</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg="3">
          <div className="footer-quicker">
              <h4 className="quick-link text-2xl mb-4">Contact</h4>
              <ListGroup >
                <ListGroupItem className='ps-0 border-0 d-flex  align-items-center gap-2'>
                <span><i className="fa-solid fa-location-dot"></i></span>
                <p>Qocali Home,Baku</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex  align-items-center gap-2'>
                <span><i className="fa-solid fa-phone-volume"></i></span>
                <p>(+994) 516926941</p>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0 d-flex  align-items-center gap-2'>
                <span><i className="fa-solid fa-envelope"></i></span>
                <p>babayevqocheli@gmail.com</p>
                </ListGroupItem>
               
              </ListGroup>
            </div>
          </Col>
          <Col lg='12'>
            <p className="footer-right mt-5 text-center">Copyright {year} Developed by Qochali.All Reserved</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer