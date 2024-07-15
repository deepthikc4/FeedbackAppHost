import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const FeedbackNavbar = () => {
  return (
    <div>

<nav className="navbar sticky-top navbar-light " style={{backgroundColor:"navy"}}>
  <a className="navbar-brand" href="#" style={{padding:"10px",color:'white',fontSize:"24px"}}>Feedback Form</a>
 <Typography><Link to="/"  style={{textDecoration:"none",color:"white",marginRight:"100px",fontSize:"20px" }} >Home</Link></Typography>
</nav>
    </div>
  )
}

export default FeedbackNavbar