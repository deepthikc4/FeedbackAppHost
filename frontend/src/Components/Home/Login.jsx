import React, { useState } from 'react'
import './Login.css'
import Navbar from './Navbar'
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

  const[email,setemail]=useState('');
  const[password,setpassword]=useState('');
  const navigate=useNavigate();

const handleLogin=(e)=>{
  e.preventDefault();
axios.post('http://localhost:3005/api/login',{email,password}).then((res)=>{
sessionStorage.setItem('userToken',res.data.token)
const userrole=res.data.role;
alert(res.data.Message);
console.log(res.data.token);
if(userrole==='trainer')
{
  
  navigate('/training')
}
else{
  navigate('/iqa')
}
})
.catch((error)=>{
  alert('Invalid Data,Login Failed');
  console.log(error);
})


  }
  return (
    <>
    <Navbar/>
    <div className='container'>
      <div className="row">
      <div className="col-md-6 imagecontainer ">
      

        </div>
<div className="col-md-5">
<form className=' login ' onSubmit={handleLogin} id='form'>
<h3 className='text-center p-6' style={{paddingTop:"300px",fontSize:"40px",color:"navy"}}>Login to Your Account</h3>
<div className="form-group ">
   <i className="fa fa-envelope icon emailicon"></i>
<input type="email" 
onChange={(e)=>setemail(e.target.value)}
className="form-control input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
  
  </div>
  <div className="form-group">
  <i className="fa fa-lock icon passwordicon"></i>
    <input type="password"
    onChange={(e)=>setpassword(e.target.value)} className="form-control input" id="exampleInputPassword1" 
    placeholder="Password" autoComplete="off"/>
  </div> 
 
  <button type="submit" className="btn  text-light Loginbutton">Submit</button>
  {/* <button type="submit" className="btn  text-danger mt-3 mx-auto d-block">Don't have account? Sign Up Now </button> */}

</form>
</div>
      </div>
  


    </div>
    <Footer/>
    </>
  )
}

export default Login