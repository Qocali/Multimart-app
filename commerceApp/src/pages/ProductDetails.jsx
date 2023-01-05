import React,{useState,useRef} from 'react'
import ProductList from '../Components/UI/productList';
import Helmet from '../Components/Helmet/Helmet'
import CommonSection from '../Components/UI/CommonSection'
import { Container, Row, Col } from "reactstrap";
import {toast} from 'react-toastify'
import products from '../assets/data/products';
import {useParams} from 'react-router-dom'
import '../Styles/product-details.css'
import { useDispatch } from 'react-redux';
import { cartActions } from '../redux/slices/cartSlice';
import {motion} from 'framer-motion'
function ProductDetails() {
  const [tab,setTab]=useState('desc')
  const [rating,setrating]=useState(null)
  const {id}=useParams()
  const product=products.find((item)=>item.id===id)
  const dispatch=useDispatch()
 const reviewUser=useRef("")
 const reviewMes=useRef('')
  const {imgUrl,productName,price,avgRating,reviews,shortDesc,description,category}=product
  const relatedproduct=products.filter((item)=>item.category==category)

  const submitHandler=(e)=>{
e.preventDefault()
const reviewName=reviewUser.current.value
const reviewMessage=reviewMes.current.value
  
  const reviewobj={
    userName:reviewUser,
text:reviewMes,
rating
  }
  toast.success("Review Submitted succesfully")
}
  const addToCart=()=>{
    dispatch(cartActions.addItem({
      id,
      image:imgUrl,
productName,
price,

    }))
    toast.success("added product succesfully")
  }
  
  return (
    <Helmet title={productName}>
      <CommonSection  title={productName}/>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="" />
            </Col>
            <Col lg="6">
              <div className="product_details">
                <h2 className='text-3xl' my-4>{productName}</h2>
                <div className="product_rating d-flex align-items-center gap-5 mb-4"></div>
                <div className='star'>
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                  <span><i className="fa-solid fa-star"></i></span>
                  <span className='ml-3'>(<span className='text-1.5xl' style={{color:'coral'}}>{avgRating}</span> Rating)</span>
                </div>
                
                <span className='text-2xl text-red-600 mt-2'>${price}</span>
                <p className='mt-2'>{shortDesc}</p>
                <motion.button  whileTap={{scale:1.2}} type="button" class="btn btn-info mt-2" onClick={addToCart}>Add to Cart</motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='ml-10'>
        <Container>
          <Row>
            <Col lg="10">
              <div className="tab_wrapper d-flex align-items-center gap-5">
                <h3 className={`${tab=='desc' ? 'Active':""}`}>Description</h3>
                <h3>review ({reviews.length})</h3>
              </div>
              <div className="tab_content mt-3">
                <h3 className='text-black-100'>{description}</h3>
                
              </div>
              
<form className='mt-3 ' onSubmit={submitHandler}>
  <h2 className='text-orange-500'>Leave Your Experience</h2>
    <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="text" placeholder="Enter name" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
        </div>
      </div>
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div className='stars'>
           <motion.span whileTap={{scale:1.2}} style={{marginLeft:'0px'}} onClick={()=>setrating(1)}>1<i className="fa-sharp fa-solid fa-star"></i></motion.span>
           <motion.span whileTap={{scale:1.2}} onClick={()=>setrating(2)}>2<i className="fa-sharp fa-solid fa-star" ></i></motion.span>
           <motion.span whileTap={{scale:1.2}} onClick={()=>setrating(3)}>3<i className="fa-sharp fa-solid fa-star" ></i></motion.span>
           <motion.span whileTap={{scale:1.2}} onClick={()=>setrating(4)}>4<i className="fa-sharp fa-solid fa-star" ></i></motion.span>
           <motion.span whileTap={{scale:1.2}} onClick={()=>setrating(5)}>5<i className="fa-sharp fa-solid fa-star" ></i></motion.span>
        </div>
      </div>
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <textarea type="text" placeholder="Review message..." id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
        </div>
      </div>
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

            </Col>
           <Col lg="12">
            <h2 className='mt-4 text-3xl text-center'>You Might also Like</h2>
           </Col>
           <ProductList data={relatedproduct}/>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default ProductDetails