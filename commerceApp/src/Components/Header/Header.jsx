import React,{useRef,useEffect} from "react";
import { Container, Row, Col } from "reactstrap";
import { useSelector } from 'react-redux'
import { NavLink ,useNavigate} from "react-router-dom";
import {motion} from 'framer-motion'
import useAuth from "../../custom-hooks/useAuth";
import "./header.css";
const nav_link=[
  {
    path:'Home',
    display:'Home'
  },
  {
    path:'Shop',
    display:'Shop'
  },
  {
    path:'Cart',
    display:'Cart'
  }, 
  
]
function Header() {
 const headerRef=useRef(null)
 const navRef=useRef(null)
 const menuRef=useRef(null)
 const del=useRef(null)
 const productTotal=useSelector(state=>state.cart.totalQuantity)
 const {currentUser}=useAuth()
 const mobile=()=>{
  
navRef.current.classList.toggle("mobile-nav");
menuRef.current.classList.toggle("mobile-menu");
navRef.current.style.display='block'
del.current.style.display='block'
 }
 const mobile2=()=>{
  navRef.current.classList.remove("mobile-nav");
menuRef.current.classList.remove("mobile-menu");
navRef.current.style.display='block'
del.current.style.display='none'
 }
 const navigate=useNavigate()
 const Navigate=()=>{
  console.log('click')
navigate('/cart')
 }
 const stickfunc=()=>{
  window.addEventListener("scroll",()=>{
    if(document.body.scrollTop>80  || document.documentElement.scrollTop>80){
      headerRef.current.classList.add("sticky-header")
    }
    else{
      headerRef.current.classList.remove("sticky-header")
    }
  })
 }
 useEffect(()=>{
  stickfunc();
  return window.removeEventListener("scroll",stickfunc)
 })
  return (
    <header ref={headerRef}>
      <Container>
        <Row>
          <div className="naw_wrapper">
            <div className="logo">
              <img src="../../../src/assets/images/eco-logo.png" alt="" />
              <div>
                <h1>Multimart</h1>
                <p>Since 1990s Working</p>
              </div>
            </div>
            <div className="navigation" ref={navRef}>
              <ul className="menu" ref={menuRef}>
              <li className="nav_item"> <span onClick={mobile2} style={{marginRight:'90px'}} ref={del} id="x"><i class="fa-solid fa-x" ></i></span></li>
               {nav_link.map((item,index)=>(
                 <li className="nav_item" key={index}>
                 <NavLink to={item.path} className={(nav)=>nav.isActive ? 'nav_active':''}>{item.display}</NavLink>
               </li>
               
               ))}
              
              </ul>
            </div>
            <div className="nav_icon mx-2">
            <span className="fav_icon" ><i className="fa-solid fa-heart" ></i><span className="badge">0</span></span>
            
              <span className="cart_icon" onClick={Navigate}><i className="fa-solid fa-bag-shopping"></i><span className="badge">{productTotal}</span></span>
              
              <span ><motion.img className="rounded-full" whileTap={{scale:1.2}} src="../../../src/assets/images/WhatsApp Image 2022-11-02 at 11.28.50 AM.jpeg" alt="" /></span>
              <span className="sign"><NavLink to='signup'>Sign Up</NavLink></span>
              <div className="Mobile">
              <span><i onClick={mobile} className="fa-solid fa-bars"></i></span>
             
             
            </div>
            </div>
            
          </div>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
