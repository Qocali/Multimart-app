import React from 'react'
import { Container,Row,Col,Form,  FormGroup } from 'reactstrap'
import CommonSection from '../Components/UI/CommonSection'
import Helmet from '../Components/Helmet/Helmet'
import { useSelector } from 'react-redux'
import '../Styles/checkout.css'
function Checkout() {
  const TotalQty=useSelector(state=>state.cart.TotalQuantity)
  const TotalAmount=useSelector(state=>state.cart.TotalAmount)
  return (
   <Helmet  title='CheckOut'>
    <CommonSection title=''/>
    <section>
      <Container>
        <Row>
          <Col lg='8'><h2 className='mb-4 fw-bold mt-2'>Billing Information</h2>
          <Form>
            <FormGroup className="form_group">
              <input type="text" placeholder='Enter Your Name'/>
            </FormGroup>
            <FormGroup className="form_group">
              <input type="email" placeholder='Enter Your E-mail'/>
            </FormGroup>
            <FormGroup className="form_group">
              <input type="number" placeholder='Enter Your Phone Number'/>
            </FormGroup>
            <FormGroup className="form_group">
              <input type="text" placeholder='City'/>
            </FormGroup>
          </Form>
          </Col>
          <Col lg='4'>
            <div className="bill_checkout">
              <h2>Total Quantity:<span>${TotalQty} Items</span></h2>
              <h2>SubTotal:<span>${TotalAmount}</span></h2>
              <h2>Shipping:<span>$125</span></h2>
              <h2>Free Shiping</h2>
              <h1>Total Cost:<span>${TotalAmount}</span></h1>
              <button className="buy_btn w-100">Place an Order</button>
            </div>
           
          </Col>
        </Row>
      </Container>
    </section>
   </Helmet>
  )
}

export default Checkout