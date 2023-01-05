import React,{useState} from 'react'
import { Container,Row,Col,Form,  FormGroup } from 'reactstrap'
import { Link,NavLink } from 'react-router-dom'
import Helmet from '../Components/Helmet/Helmet'
import CommonSection from '../Components/UI/CommonSection'
import { getAuth, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../Firebase.config'
import { uploadBytesResumable,getDownloadURL, ref } from 'firebase/storage'
import { setDoc,doc } from 'firebase/firestore'
import { storage } from '../Firebase.config'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { store } from '../Firebase.config'
function SignUp() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [user,setUser]=useState("")
  const [file,setFile]=useState(null)
  const [loading,setLoading]=useState(false)
  const navigate=useNavigate()
  const signUp=async(e)=>{
    e.preventDefault()
    setLoading(true)
    try{
const userCredential=await createUserWithEmailAndPassword(auth,email,password)
const user=userCredential.user
console.log(user)
const storageRef=ref(storage,`images/${Date.now()+user}`)
const uploadTask=uploadBytesResumable(storageRef,file)
uploadTask.on((error)=>{
  thoast.error(error.message)
},()=>{
  getDownloadURL(uploadTask.snapshot.ref).then(async(downloadUrl)=>{
await updateProfile(user,{
  displayName:user,
  photoURL:downloadUrl
})
await setDoc(doc(store,users,user.uid),{
  uid:user.uid,
  displayName:user,
  email,
  photoURL:downloadUrl
})
  })
})
setLoading(false)
toast.success('Acount Created Succesfully')
navigate('/login')
    }
    catch(error){
      setLoading(false)
      console.log(error.message)
toast.error("Something Went Wrong!")
    }
  }
  return (
    <Helmet title='SignUp'>
      <CommonSection/>
      <section>
        <Container>
          <Row>
            {
              loading?<Col lg='12'><h1>Loading...</h1></Col>:
              <Col lg='12' className=' d-flex flex-column justify-center items-center mt-3'>
              <h1 className='text-gray-500 text-4xl'>Sign Up</h1>
              <div class="w-[40vw]  mt-5">
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={(e)=>signUp(e)}>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        E-mail
      </label>
      <input value={email} onChange={e=>setEmail(e.target.value)} class="shadow appearance-none border rounded w-[35vw] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="E-mail..."/>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        UserName
      </label>
      <input value={user} onChange={e=>setUser(e.target.value)} class="shadow appearance-none border rounded w-[35vw] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="UserName..."/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input value={password} onChange={e=>setPassword(e.target.value)} class="shadow appearance-none border border-red-500 rounded w-[35vw] py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        File
      </label>
      <input  onChange={e=>setFile(e.target.files[0])}  accept=".jpg, .jpeg, .png" class="shadow appearance-none border rounded w-[35vw] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="file" type="file" placeholder="Your File..."/>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Sign Up
      </button>
      <NavLink to='/Login' class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Login?
      </NavLink>
    </div>
  </form>
  <p class="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
</div>
            </Col>
            }
            
          </Row>
        </Container>
      </section>
    </Helmet>
   
  )
}

export default SignUp