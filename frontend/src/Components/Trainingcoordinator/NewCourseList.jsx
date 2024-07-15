import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import AddnewCourse from './AddnewCourse'
import { useNavigate } from 'react-router-dom';
import axiosInstance from 'E:/NewProject/ICT-Project/frontend/src/axiosinterceptor'


const NewCourseList = () => {
const[newCourse,setNewCourse]=useState([]);
const[selectCourse,setSelectCourse]=useState('');
const [filteredSub, setFilteredSub] = useState([]);
const navigate=useNavigate();


useEffect(() => {
  fetchData();
}, []);

const fetchData = () =>{
axiosInstance.get('http://localhost:3005/api/newcourses').then((res)=>{
setNewCourse(res.data);
setFilteredSub(res.data);
  })
  .catch((error=>{
console.log(error);
  }))
}
// deleting new courses
const handleDelete=(id)=>{
axiosInstance.delete('http://localhost:3005/api/removenewcourse/'+id).then((res)=>{
  alert(res.data.Message);
  fetchData();
})
.catch((error)=>{
  console.log(error);
})
}
// updating new Courses
const [update,setUpdate]=useState(false);
const[uvalue,setUvalue]=useState([])

const updateCourse=(data)=>{
console.log(data);
setUpdate(true);
navigate('/addcourse',{state:{data,update}});

}

// filter starts

const handleSelectedChange = (e) => {
  const value = e.target.value;
  setSelectCourse(value);
  
};

const filteredCourses = selectCourse
? newCourse.filter(course => course.ou === selectCourse)
: newCourse;



return (
  

    <div style={{backgroundColor:"#f5f5f5",paddingBottom:"100px"}}>
        <div style={{marginBottom:"50px",textAlign:"center",paddingTop:"50px"}}>
        <h3 style={{color:"navy",fontWeight:"bold"}}>New training programs List</h3>
      
        <div style={{marginTop:"40px"}}>
        <span style={{marginRight:"10px",color:"navy",fontWeight:"bold"}}>Filter By OU</span>
<select name="ou"   id=""
 value={selectCourse}
 onChange={handleSelectedChange}
  style={{width:"200px",borderRadius:"8px",padding:"5px",color:"navy"}}>
  <option value="">All</option>
  <option value="Academic">Academic</option>
  <option value="Corporate">Corporate</option>
  <option value="Retail">Retail</option>
  <option value="Government">Government</option>
</select>

        </div>
        </div>
    <TableContainer component={Paper} style={{marginRight:"30px",marginLeft:"145px", width:"1000px",backgroundColor:"#f5f5f5",border:".5px solid navy"}}>
      <Table sx={{ minWidth:350 }} aria-label="simple table">
        <TableHead >
          <TableRow>
            <TableCell style={{fontSize:"18px",fontWeight:"bold",color:"navy"}}>CourseID</TableCell>
            <TableCell align="left" style={{fontSize:"18px",fontWeight:"bold",color:"navy"}}>CourseName</TableCell>
            <TableCell align="left" style={{fontSize:"18px",fontWeight:"bold",color:"navy"}}>OU</TableCell>
            <TableCell align="left" style={{fontSize:"18px",fontWeight:"bold",color:"navy"}}>Name of the Trainer</TableCell>
            <TableCell align="left" style={{fontSize:"18px",fontWeight:"bold",color:"navy"}}>Batch count</TableCell>
            <TableCell align="left"></TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredCourses.map((course) => (
            <TableRow
              key={course.courseId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="course">
                {course.courseId}
              </TableCell>            
              <TableCell align="center">{course.courseName}</TableCell>
              <TableCell align="left">{course.ou}</TableCell>
              <TableCell align="center">{course.trainerName}</TableCell>
              <TableCell align="center">{course.batchCount}</TableCell>
              <TableCell align="center"><Button onClick={()=>updateCourse(course)}>Edit</Button></TableCell>
              <TableCell align="center"><Button onClick={()=>handleDelete(course._id)}>Delete</Button></TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>



    </div>
  )
  
}

export default NewCourseList





