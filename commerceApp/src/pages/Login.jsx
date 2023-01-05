import React, { useState } from 'react'
import { Container,Row,Col,Form,  FormGroup } from 'reactstrap'
import { Link,NavLink } from 'react-router-dom'
import Helmet from '../Components/Helmet/Helmet'
import { useNavigate } from 'react-router-dom'
import CommonSection from '../Components/UI/CommonSection'
import { signInWithEmailAndPassword } from 'firebase/auth'
import {toast} from 'react-toastify'
import { async } from '@firebase/util'
function Login() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [loading,setLoading]=useState(false)
  const navigate=useNavigate()
  const logIn=async(e)=>{
e.preventDefault()
setLoading(true)
try {
  const userCredential=await signInWithEmailAndPassword(auth,email,password)
  const user=userCredential.user
  setLoading(false)
toast.success('Acount Created Succesfully')
navigate('/checkout')
} catch (error) {
  setLoading(false)
  toast.error(error.message)
}
  }
  return (
   
     <Helmet title='Login'>
     <CommonSection/>
     <section>
       <Container>
         <Row>
          {
         loading?<Col lg='12'><h1>Loading...</h1></Col>:
           <Col lg='12' className=' d-flex flex-column justify-center items-center mt-3'>
             <h1 className='text-gray-500 text-4xl'>Login</h1>
             <div class="bg-grey-lighter min-h-screen flex flex-col">
             <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                 <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                     <h1 class="mb-8 text-3xl text-center">Login</h1>
                     <form onSubmit={logIn}>
                     <input 
                         type="text"
                         class="block border border-grey-light w-full p-3 rounded mb-4"
                         name="fullname"
                         placeholder="Full Name" />
 
                     <input 
                         type="text"
                         class="block border border-grey-light w-full p-3 rounded mb-4"
                         name="email"
                         placeholder="Email" />
 
                     <input 
                         type="password"
                         class="block border border-grey-light w-full p-3 rounded mb-4"
                         name="password"
                         placeholder="Password" />
                     
                     <button
                         type="submit"
                         class="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                     >Create Account</button>
                      <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Login
      </button>
      <NavLink to='/signup' class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Sign Up?
      </NavLink>
    </div>
                     </form>
 
                     <div class="text-center text-sm text-grey-dark mt-4">
                         By signing up, you agree to the 
                         <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                             Terms of Service
                         </a> and 
                         <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                             Privacy Policy
                         </a>
                     </div>
                 </div>
 
                 <div class="text-grey-dark mt-6">
                     Already have an account? 
                     <a class="no-underline border-b border-blue text-blue" href="../signup/">
                         sign Up
                     </a>.
                 </div>
             </div>
         </div>
           </Col>
}
         </Row>
       </Container>
     </section>
   </Helmet>
          
  )
}

export default Login