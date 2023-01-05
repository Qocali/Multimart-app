import React,{useState,useEffect} from 'react'
import Helmet from "../Components/Helmet/Helmet"
import "../../src/Styles/home.css"
import Service from "../services/Service"
import { Container, Row, Col } from "reactstrap";
import ProductList from '../Components/UI/productList';
import products from '../assets/data/products';
import Clock from '../Components/UI/clock';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
function Home() {
  
 
  const year=new Date().getFullYear()
  const [data,setData]=useState([])
  const [trentdata,setTrendData]=useState([])
  const [mobile,setMobile]=useState([])
  const [wirelessdata,setWireless]=useState([])
  const [populardata,setPopular]=useState([])
  useEffect(()=>{
    const filterPro=products.filter((item)=>item.category=="chair");
    setData(filterPro)
    const filtertrent=products.filter((item)=>item.category=="sofa");
    setTrendData(filtertrent)
    const filterMobil=products.filter((item)=>item.category=="mobile");
    setMobile(filterMobil)
    const filterWireless=products.filter((item)=>item.category=="wireless");
    setWireless(filterWireless)
    const filterPopular=products.filter((item)=>item.category=="watch");
    setPopular(filterPopular)
  },[])
  return (
    <Helmet title={"Home"}>
      <section className="hero">
        <Container>
          <Row>
              <Col lg='6' md='8'>
                <div className="hero-content">
                  <p className="subtitle">Trending Product in {year}</p>
                  <h2>Make your Interior with these parts</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Laboriosam quam excepturi sed possimus officiis
                     autem aliquid beatae ex! Distinctio id quisquam iusto optio
                      inventore alias nulla eveniet impedit totam culpa!</p>
                      <button className="bg-transparent text-white my-5 rounded-full hover:bg-black text-blue-700 font-semibold hover:bg-black text-white py-2 px-4 border border-blue-500 hover:border-transparent bg-black">
  Shop Now
</button>
                </div>
              </Col>
              <Col lg='6' md='8'>
                <div className="hero-img">
                  <img src="../../src/assets/images/hero-img.png" alt="" />
                </div>
              </Col>
          </Row>
          </Container>
      </section>
      
      <Service/>
      <section className="trending-products">
        <Container>
          <Row>
              <Col lg='12' className='text-center'>
                <h2 className='section_title text-3xl'>Trending Products</h2>
              </Col>
              <ProductList data={data}/>
          </Row>
          </Container>
      </section>
      <section className="trending-products">
        <Container>
          <Row>
              <Col lg='12' className='text-center'>
                <h2 className='section_title text-3xl'>best sales</h2>
              </Col>
              <ProductList data={trentdata}/>
          </Row>
          </Container>
      </section>
      <section className="timer-count">
        <Container>
        <Row>
              <Col lg='6' md="5" className='d-flex flex-col align-items-start justify-between-start '>
                <div className="clock-content mt-5 ml-8" >
                  <h4 className='text-white fs-6 mb-2'>Limited Offers!</h4>
                  <h3 className='text-white fs-5 mb-4'>Quality Armchair</h3>
                </div>
               <Clock/>
               <motion.button whileTap={{scale:1.2}} type="button" className="py-2.5 px-5 ml-6 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-black-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-black-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-white-700"><Link  to="/shop">visit store</Link></motion.button>
         
              </Col>
              <Col lg='6' md="5" className='text-center'>
               <img src="../../src/assets/images/counter-timer-img.png" alt="" />
              </Col>
             
          </Row>
        </Container>
      </section>
      <section className="New-Arrivals">
        <Container>
        <Row>
        <Col lg='12' className='text-center mb-5'>
                <h2 className='section_title text-3xl'>New Arrivals</h2>
              </Col>
             <ProductList data={mobile}/>
             <ProductList data={wirelessdata}/>
          </Row>
        </Container>
      </section>
      <section className="popular-category">
      <Container>
        <Row>
        <Col lg='12' className='text-center mb-5'>
                <h2 className='section_title text-3xl'>Popular in Category</h2>
              </Col>
             <ProductList data={populardata}/>
           
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home