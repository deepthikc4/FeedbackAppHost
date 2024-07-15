import React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { alignProperty } from '@mui/material/styles/cssUtils';
import { Button, colors } from '@mui/material';
import { Link } from 'react-router-dom';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  textAlign: 'center',
  color: 'navy',
  fontWeight: 'bold',
  fontSize: '2.5rem',
 
  }; 
const CompltedCourse = ({ open, onClose, course }) => {

  if (!open) return null;

  // format date
const formatDate = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

  return (
    <Modal
    open={open}
    onClose={onClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h4" component="h2">
       { course.courseName}   
   
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
       Trainer Name:  {course.trainerName}
      </Typography>
      <Typography>OU: { course.ou}</Typography>
      <Typography>Type of Training: { course.typeOfTraining}</Typography>
      <Typography>Start Date: {formatDate(course.startDate)}</Typography>
      <Typography>End Date: {formatDate(course.endDate)}</Typography>
      <Typography>Batch Count: { course.batchCount}</Typography>
      <Typography>Final Feedback Score: { course.finalFeedback}</Typography>
     
   <Button variant="outlined"><Link to={`/iqafeed/${course.courseId}`} style={{color:"navy",textDecoration:"none",fontWeight:"bolder"}}>View Feedbacks</Link></Button>
    </Box>
  </Modal>
  );
};

export default CompltedCourse;
