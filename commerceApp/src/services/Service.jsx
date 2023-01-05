import React from 'react'
import {motion} from "framer-motion"
import serviceData from '../assets/data/serviceData'
import { Container, Row, Col } from "reactstrap";
import "../services/Service.css"
function Service() {
  return (
    <section className="services">
        <Container>
          <Row>
            {
              serviceData.map((item,index)=>{
              return  <Col lg='4' md='4'  key={index}>
                <motion.div whileHover={{scale:1.2}} className="services-item" style={{background:`${item.bg}`,margin:'20px'}}>
                    <span><i className={item.icon}></i></span>
                    <div>
                    <h3>{item.title}</h3>
                    <p>{item.subtitle} </p>
                    </div>
                </motion.div>
              </Col>
              })
            }
             
          </Row>
          </Container>
      </section>
  )
}

export default Service