import React,{useState} from 'react'
import Helmet from '../Components/Helmet/Helmet'
import { Container,Row,Col } from 'reactstrap'
import '../Styles/shop.css'
import CommonSection from '../Components/UI/CommonSection'
import ProductList from '../Components/UI/productList'
import products from "../assets/data/products"
import ProductDetails from './ProductDetails'
function Shop() {
  const [Product,setProduct]=useState(products)
 const handleFilter=(e)=>{
  const filt=e.target.value
if(filt=='sofa'){
  const filtered=products.filter((item)=>item.category==filt)
  setProduct(filtered)
}
if(filt=='mobile'){
  const filtered=products.filter((item)=>item.category==filt)
  setProduct(filtered)
}
if(filt=='chair'){
  const filtered=products.filter((item)=>item.category==filt)
  setProduct(filtered)
}
if(filt=='watch'){
  const filtered=products.filter((item)=>item.category==filt)
  setProduct(filtered)
}
if(filt=='wairless'){
  const filtered=products.filter((item)=>item.category==filt)
  setProduct(filtered)
}

 }
 const handleSearch=(e)=>{
  const search=e.target.value
  if(search){
    const searchProduct=products.filter((item)=>item.productName.toLowerCase().includes(search.toLowerCase()))
  console.log(searchProduct)
  setProduct(searchProduct)
  }
  else{
    setProduct(products)
  }
  }
  return (
  
      <Helmet title="shop">
        <CommonSection title="products"/>
        <section >
          <Container className='pt-4 d-flex justify-between mt-3'>
            <Row>
              <Col lg="3" md="6">
                <div className="filter_widget tag lef">
                  <select name="" id="" onChange={handleFilter}>
                  <option >Filter By Category</option>
                    <option value="sofa">Sofa</option>
                    <option value="watch">Watch</option>
                    <option value="chair">Chair</option>
                    <option value="phone">Phone</option>
                  </select>
                </div>
              </Col>
              <Col lg="3" md='6'>
              <div className="filter_widget tag lef">
                  <select name="" id="">
                  <option >Sort By</option>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                    
                  </select>
                </div>
              </Col>
              <Col lg="5" md='6'>
                
              <div class="searth flex justify-center w-[60vw] tag">
  <div class=" mb-3 xl:w-96">
    <input
   
      type="search"
      class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleSearch"
      placeholder="Search Products"
      onChange={handleSearch}
    />
  </div>
</div>

              </Col>
            </Row>
          </Container>
       
          <Container>
            <Row>
              {
                products.length===0?<h1 className='text-center text-4xl py-3'>No Product Found</h1>:<ProductList data={Product}/>
              }
            </Row>
          </Container>
        </section>
        </Helmet>
   
  )
}

export default Shop