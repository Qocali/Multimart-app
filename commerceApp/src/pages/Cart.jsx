import React from 'react'
import '../Styles/cart.css'
import Helmet from '../Components/Helmet/Helmet'
import CommonSection from '../Components/UI/CommonSection'
import { Container,Row,Col,NavLink } from 'reactstrap'
import { cartActions } from '../redux/slices/cartSlice'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
function Cart() {
 
  const cartItems=useSelector((state)=>state.cart.cartItems)
 
  return (
   <Helmet title="Cart">
<CommonSection title="Shoping Cart"/>
<section className='d-flex'>
  <Container>
    <Row>
      <Col lg="9">
        
<div class="overflow-x-auto relative shadow-md sm:rounded-lg mt-3">
    {
      cartItems.length===0?<h1>No Any Items Added to the cart</h1>:
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                    Image
                </th>
                <th scope="col" class="py-3 px-6">
                    Title
                </th>
                <th scope="col" class="py-3 px-6">
                    price
                </th>
                <th scope="col" class="py-3 px-6">
                    Quantity
                </th>
                <th scope="col" class="py-3 px-6">
                    <span >Delete</span>
                </th>
            </tr>
        </thead>
        <tbody>
            
           {
            
            cartItems?.map((item,index)=><Tr item={item} key={index}/>)
           }
           
        </tbody>
    </table>
    }
</div>


      </Col>
      <Col lg="3 pt-2">
      <div>
<button type="button" class=" w-[300px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"><Link to='/Checkout'>CheckOut</Link></button>
<button type="button" class="w-[300px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>
</div>
      </Col>
    </Row>
  </Container>
</section>
   </Helmet>
  )
 
}
const Tr=({item})=>{
  const dispatch=useDispatch()
  const deleteItems=(id)=>{
    dispatch(cartActions.deleteItem(item.id))
  }

  return (
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" k>
    <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      
<img class="w-16 h-16 rounded-full" src={item.imgUrl} alt="image description"/>

    </th>
    <td class="py-4 px-6">
        <h1>{item.productName}</h1>
    </td>
    <td class="py-4 px-6">
    <h1>{item.quantity}</h1>
    </td>
    <td class="py-4 px-6">
        <h1>{item.price}</h1>
    </td>
    <td class="py-4  px-6 ">
    <i onClick={deleteItems} class="fa-solid fa-trash"></i>
    </td>
</tr>)
}
export default Cart