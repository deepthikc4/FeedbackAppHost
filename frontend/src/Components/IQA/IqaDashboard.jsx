import React, { useEffect, useState } from 'react'
import NavbarTraining from '../Trainingcoordinator/NavbarTraining'
import image1 from '../images/quality.jfif';
import image2 from '../images/q2.jfif';
import image3 from '../images/quality3.jfif';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CommonFooter from '../Footer/CommonFooter';
import { Button } from '@mui/material';
import CompltedCourse from './CompltedCourse';
import axiosInstance from 'E:/NewProject/ICT-Project/frontend/src/axiosinterceptor'

const IqaDashboard = () => {
  // handle more button
  const [open, setOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const [courses,setCourse]=useState([]);


  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = () =>{

    
// to calculate and update average feeedback score in coursedb
axiosInstance.get('http://localhost:3005/api//update-final-feedback').then((res)=>{
console.log(res)
})
.catch((error)=>{
console.log(error);
});

// to display 10 completed courses

axiosInstance.get('http://localhost:3005/api/completedCourse').then((res)=>{

setCourse(res.data);
})
.catch((error)=>{

console.log(error);
})

}

// Display full details of course


const handleMoreClick = (course) => {
  console.log("clicked");
  setSelectedCourse(course);
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
  setSelectedCourse(null);
};

 
  return (
    <>
    <NavbarTraining/>
    <div>
      <h2 className='text-center fw-3 mb-3 mt-3' style={{ color: 'navy'}}> Internal QA Feedback Management     
      </h2>
   <div className="container-fluid mt-4" style={{ marginLeft:"100px" }}>
<div className="row">
<div className="col col-xs-3 col-md-10 col-lg-10">

<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
  
      <img  className="d-block w-100 " style={{width:"300px",height:"300px"}} src={image1} alt="First slide"/>
    </div>
    <div className="carousel-item " >
      <img   className="d-block w-100" style={{width:"300px",height:"300px"}}src={image2} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img   className="d-block w-100" style={{width:"300px",height:"300px"}} src={image3} alt="third slide"/>
    </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
  </div>
</div>



</div>

{/* table
 */}
 <h3 className=' fw-3 mb-3 mt-3'> Program Completion Details</h3>
 <div className="col col-xs-5 col-md-10 col-lg-10">

 <TableContainer component={Paper} style={{backgroundColor:"navy",padding:"20px"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{color:"white", fontSize:"20px"}} >No</TableCell>
            <TableCell style={{color:"white", fontSize:"20px"}} align="center">CourseId</TableCell>
            <TableCell style={{color:"white",fontSize:"20px"}} align="center">Coursename</TableCell>
            <TableCell style={{color:"white",fontSize:"20px"}} align="center">Final feedback Score</TableCell>
            <TableCell style={{color:"white",fontSize:"20px"}} align="center"></TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {courses.map((c,index)=> (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
             
            >
              <TableCell component="th" scope="row" style={{color:"white"}}>
                {index+1}
              </TableCell>

              <TableCell style={{color:"white"}}align="center"> {c.courseId}</TableCell>
              <TableCell style={{color:"white"}}align="center">{c.courseName}</TableCell>
              <TableCell style={{color:"white"}} align="center">{c.finalFeedback}</TableCell>             
              <TableCell style={{color:"white"}} align="center"><Button variant="outlined" onClick={() => handleMoreClick(c)} color="inherit" >More Details</Button></TableCell>
              {/* <i className="fa-solid fa-eye"></i> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
 </div>


   </div>
 

{/* handle More*/}

<CompltedCourse
       open={open}
       onClose={handleClose}
        course={selectedCourse}
      />

    </div>
    <CommonFooter/>
    </>
  )
}

export default IqaDashboard