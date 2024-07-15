const express=require('express');
const morgan=require('morgan');
const dotenv=require('dotenv');
dotenv.config();
const PORT=process.env.PORT;
const app=new express();
app.use(morgan('dev'));


const feedbackRoute=require('./Routes/feedbackRoutes');
const CourseRoute=require('./Routes/courseRoutes');
const userRoute=require("./Routes/userRoutes");

const cors=require('cors');
const db=require('./DB/mongoDB');




app.use(cors());
app.use('/api',feedbackRoute);
app.use('/api',CourseRoute);
app.use('/api',userRoute);






app.listen(PORT,(req,res)=>{

    console.log(`Server is running ${PORT}`);
})