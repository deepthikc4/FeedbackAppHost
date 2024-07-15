import React from 'react'
import  './BannerStyle.css';
import image from '../images/Feedback-rafiki.png'
import image2 from '../images/AboutUs.jpg'

const Banner = () => {
  return (
    <div>

<div className="container-fluid ">
  {/* left content */}
  <div className="row banner   justify-content-center align-items-center  maincontainer">
    <div className="col-xs-2 col-md-6 col-lg-4 content">
      <h2 className="text-light title "> ICTAK Training Feedback System</h2>
      <p className='para'>Welcome to the ICTAK Training Feedback System.Your feedback helps us improve our training programs. </p>
      <button className="btn btn-block btn-info button"> Read More</button>
      <button className="btn btn-block btn-info button"> Give Feedback</button>
    </div>
{/* right image */}
    <div className="col-xs-6 col-md-6">
    <img className="animate__animated animate__lightSpeedInRight img-fluid "src={image} alt="image" style={{width:'800px',height:'600px',right:'50px'}} />
    </div>
  </div>


  {/* 2nd row */}

  <div className="row  " style={{marginTop:'30px',paddingLeft:'70px'}}>
   
    <div className="col-xs-4 col-md-4 col-lg-4 ">
    <div className="card justify-content-center align-items-center" style={{width: "18rem",border:'none',textAlign:'center',color:'navy'}}>
      {/* solid font awsome icons */}
   
  <div className="card-body mycards">

  <i className="fa-solid fa-plus fa-3x fa-fade "></i>
    <h5 className="card-title " style={{marginTop:"10px"}}>Create</h5>
    <p className="card-text">Craft detailed and comprehensive feedback surveys to assess our training programs. Your input is vital in helping us understand what works and what needs improvement.</p>
    {/* <a href="#" className="btn btn-light readbutton">Read More</a> */}
  </div>
</div>
  </div>
  <div className="col-xs-4 col-md-4 col-lg-4">
  <div className="col-xs-4 col-md-4 col-lg-4  ">
    <div className="card" style={{width: "18rem",border:'none',textAlign:'center',color:'navy'}}>
   
  <div className="card-body  mycards ">

  <i className="fa-solid fa-square-poll-vertical fa-fade fa-3x "></i>
    <h5 className="card-title"  style={{marginTop:"10px"}}>Deduce</h5>
    <p className="card-text">Analyze the feedback received to uncover key insights about our training programs. Your feedback helps us identify strengths and areas for improvement, ensuring the highest quality of training.</p>
    {/* <a href="#" className="btn btn-light readbutton ">Read More</a> */}
  </div>
</div>
  </div>
  </div>
  <div className="col-xs-4 col-md-4 col-lg-4 ">
  <div className="col-xs-4 col-md-4 col-lg-4 ">
    <div className="card"  style={{width: "18rem",border:'none',textAlign:'center',color:'navy'}}>
 
  <div className="card-body mycards">

  <i className="fa-solid fa-gear  fa-3x fa-fade"></i>
    <h5 className="card-title"  style={{marginTop:"10px"}}>Act</h5>
    <p className="card-text">Implement actionable plans based on feedback insights.Our commitment to continuous improvement ensures that every training program gets better with your valuable input.</p>
    {/* <a href="#" className="btn btn-light readbutton">Read More</a> */}
  </div>
</div>
  </div>
  </div>

  </div>


  {/* 3rd row About Us */}

  

  {/* left content */}
  <div className="row justify-content-center align-items-center " style={{marginTop:"50px"}}>

  <div className="col-xs-6 col-md-6">
    <img src= {image2} alt="image" style={{width:'500px',height:'300px',right:'50px'}} />
    </div>  

    <div className="col-xs-2 col-md-6 col-lg-4 ">
      <h2 className="text-primary title">ABOUT US</h2>
      <p className='para'>ICT Academy of Kerala (ICTAK) is a social enterprise officially launched on the 24th of June, 2014. The organization had a humble beginning providing skill training programs to selected academic institutions</p>
     
     
    </div>

   
  </div>


    </div>
    </div>
  )
}

export default Banner