import React, { useEffect, useState } from 'react';
import FeedbackNavbar from './FeedbackNavbar';
import './Feedbackform.css';
import CommonFooter from '../Footer/CommonFooter';

import axiosInstance from 'E:/NewProject/ICT-Project/frontend/src/axiosinterceptor'
// import axiosInstance from 'axiosInstance';
import { Rating, Typography } from '@mui/material';

const FeedbackForm = () => {
 
  const [formdata, setform] = useState({});
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axiosInstance.get('http://localhost:3005/api/completedCourse')
      .then((res) => {
        setCourses(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const inputHandler = (e) => {
   
setform({...formdata,[e.target.name]:e.target.value});
  
    
  };

  const addData = (e) => {
    e.preventDefault();
    console.log('clicked', formdata);
// Calculate the final feedback
const finalFeedback = parseInt(formdata.question1) + parseInt(formdata.question2 )+parseInt( formdata.question3 )+ parseInt(formdata.question4);
// updatescore(formdata.courseId,finalFeedback);
// Include the final feedback in the form data
const formDataWithFinalFeedback = { ...formdata,finalFeedback };
   
    axiosInstance.post('http://localhost:3005/api/addfeedback', formDataWithFinalFeedback)
      .then((res) => {
        alert(res.data.Message);
        console.log(res.data);
        window.location.href = 'https://www.ictkerala.org';
      })
      .catch((error) => {
       console.log(error);
      });
  };

  // for uppdating final score in courseDb
//   const updatescore=(courseId,finalFeedback )=>{
//     axiosInstance.put('http://localhost:3005/api/addfinalscore/'+courseId,finalFeedback ).then((res)=>{
// console.log(res.data);
//     })
//     .catch((error)=>{
// console.log(error);
//     })
//   }

  return (
    <>
      <FeedbackNavbar />
      <div>
     

      {/* feedback form */}
        <div className="container feedbackform">
          <div className="row feedback">
            <div className="col col-xs-4 col-md-10 col-lg-12">
              <form onSubmit={addData}>
              {/* <label style={{marginLeft:"60px",marginTop:"50px"}}>Please Enter your completed course id:</label>
              <input onChange={inputHandler}  name="courseId"   style={{padding:"10px",marginLeft:"50px"}} required /> */}

              <label style={{ marginLeft: "60px", marginTop: "50px" }}>Please select your completed course:</label>
                <select name="courseId" onChange={inputHandler} style={{ padding: "10px", marginLeft: "50px" }} required>
                  <option value="">Select Course</option>
                  {courses.map((course) => (
                    <option key={course.courseId} value={course.courseId}>{course.courseId}</option>
                  ))}
                </select>
                <div className='questions'>
                 
                  <Typography component="legend">The training course was relevant and helpful for me to relate.</Typography>
            <Rating
                name="question1"
                onChange={inputHandler}
               required
            />
            </div>
            <div className='questions'>
                 
                  <Typography component="legend">Delivery of the content was clear and understandable.</Typography>
            <Rating
                name="question2"
                onChange={inputHandler}
                required
            />
            </div>
            <div className='questions'>
                  <Typography component="legend">I am confident in applying the learnings into practice
                  </Typography>
            <Rating
                name="question3"
                onChange={inputHandler}
                required
            /></div>
             <div className='questions'>
                  <Typography component="legend">How would you rate the trainer?</Typography>
            <Rating
                name="question4"
                onChange={inputHandler}
                color='primary'
                required
            /> </div>
          
                

                <div className='questions'> 
                  <label>What did you enjoy the most about the training session?</label>
                  <textarea onChange={inputHandler} name="like" 
                   style={{padding:"10px"}}required/>
                </div>
                <div className='questions'>
                  <label>Any additional comments/suggestions</label>
                  <textarea onChange={inputHandler} className="answers" name="additionalComments"
                  style={{padding:"10px"}} required/>
                </div>
                <div>
                  <button className='feedbackbutton' type="submit">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <CommonFooter />
    </>
  );
};

export default FeedbackForm;
