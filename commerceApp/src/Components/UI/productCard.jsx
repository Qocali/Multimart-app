import React from 'react'
import "../../Styles/product-card.css"
import {motion} from "framer-motion"
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {cartActions} from '../../redux/slices/cartSlice'
import { Action } from '@remix-run/router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function productCard({item}) {
  const dispatch=useDispatch()
  const addproduct=()=>{
    dispatch(cartActions.addItem({
      id:item.id,
      productName:item.productName,
      imgUrl:item.imgUrl,
      price:item.price,
      quantity:1,
      totalprice:item.price
    }
    ))
    toast.success("added product to your cart succesfully")
  }
  return (
   <Col lg="3" md="4">
    <div className='product_item'>
        <div className='product_img'>
            <motion.img whileHover={{scale:0.9}} src={item.imgUrl} alt="" />
        </div>
        <div className='p-2 product-info'>
        <h3 className='product_name text-black text-2xl '><Link  to={`/shop/${item.id}`}>{item.productName}</Link></h3>
        <span className='text-left d-block'>{item.category}</span>
        </div>
        <div className='product_card d-flex align-items-center justify-content-between p-2'>
            <span className='price text-gray-500 text-2xl'>${item.price}</span>
            <motion.span whileTap={{scale:1.3}}><i className="fa-solid fa-circle-plus text-2xl" onClick={addproduct}></i></motion.span>
        </div>
    </div>
    </Col>
  )
}

export default productCard