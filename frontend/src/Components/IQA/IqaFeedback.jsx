import React, { useEffect, useState } from 'react'
import CommonFooter from '../Footer/CommonFooter'

import NavbarTraining from '../Trainingcoordinator/NavbarTraining'

import { useParams } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axiosInstance from 'E:/NewProject/ICT-Project/frontend/src/axiosinterceptor'

const IqaFeedback = () => {
    const { courseId } = useParams();
    const [feedbacks, setFeedbacks] = useState([]);
  
    useEffect(() => {
      axiosInstance.get(`http://localhost:3005/api/feedbacks/${courseId}`)
        .then((response) => {
          setFeedbacks(response.data);
        })
        .catch((error) => {
          console.error('Error fetching feedbacks:', error);
        });
    }, [courseId]);
  return (
   
<>
<NavbarTraining/>
    <div>
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Feedbacks for Course {courseId}
      </Typography>
      {feedbacks.length > 0 ? (
        feedbacks.map((feedback, index) => (
          <Box key={index} sx={{ mb: 2, p: 2, border: '1px solid navy', borderRadius: '8px' }}>
            <Typography style={{color:"navy",fontSize:"20px"}}>Feedback{index+1}</Typography>
            <Typography>The training course was relevant and helpful: {feedback.question1}</Typography>
            <Typography>Delivery of the content was clear and understandable: {feedback.question2}</Typography>
            <Typography>confident in applying the learnings into practice.: {feedback.question3}</Typography>
            <Typography>Rate the trainer: {feedback.question4}</Typography>
            <Typography>Like: {feedback.like}</Typography>
            <Typography>Additional Comments: {feedback.additionalComments}</Typography>
            <Typography>Final Feedback: {feedback.finalFeedback}</Typography>
          </Box>
        ))
      ) : (
        <Typography>No feedbacks available for this course.</Typography>
      )}
    </Box>
    </div>
 
    </>
  )
}

export default IqaFeedback