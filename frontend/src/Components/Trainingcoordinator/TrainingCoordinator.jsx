import React from 'react'
import NavbarTraining from './NavbarTraining'
import { Button} from '@mui/material';
import trainer  from '../images/trainer.png';
import NewCourseList from './NewCourseList';
import CommonFooter from '../Footer/CommonFooter';
import { Link } from 'react-router-dom';

const TrainingCoordinator = () => {
  return (
    <div >
<NavbarTraining/>

<div >
<div className=" row jumbotron p-3 p-md-5 mt-5 text-white " style={{backgroundColor:"navy",marginBottom:"50px"}}>
        <div className="col-md-6 col-lg-6 px-0">
          <h1 className="display-6 font-italic">  Welcome  Training Co-ordinator  !!</h1>
          <p className="lead my-3"> As a Training Coordinator, you will have access to a range of functionalities to efficiently manage training courses and ensure that all  information is up-to-date.Curriculum Design and Development,Execution and Distribution of the Programme,Analysis of Needs, Schedule and logistics for training programs,
Manage training materials and resources,
Provide administrative support to trainers,
Track and report training data </p>
          <p className="lead mb-0"><a href="#" className="text-white font-weight-bold">Continue reading...</a></p>
        </div>
        <div className="col-md-5   col-lg-5 px-0"  >
         <img  className=" img-fluid"src={trainer} alt="trainer" style={{height:"350px",width:"400px",marginLeft:"200px"}} />
        
        </div>
      </div>
      <Button  className="feedbackbutton" color="inherit" style={{border:"1px solid",marginLeft:"490px",backgroundColor:"Navy",color:"white",width:"250px",borderRadius:"10px"}}> <Link to='/addcourse' style={{textDecoration:'none',color:'white'}}>Add New Course</Link></Button>

<div className='table'>


</div>

</div>
     <NewCourseList/>  
     <CommonFooter/>
    </div>
  )
}

export default TrainingCoordinator