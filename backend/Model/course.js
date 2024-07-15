const mongoose=require('mongoose');

// create schema
const courseSchema = new mongoose.Schema({
    courseId:Number,
    courseName: String,
    ou: { type: String, enum: ['Academic', 'Corporate', 'Retail', 'Government'] },
    typeOfTraining: { type: String, enum: ['LTT', 'MDT', 'Microskill'] },
    startDate: Date,
    endDate: Date,
    batchCount: Number,
    trainerName: String,
    status: { type: String, enum: ['Hold', 'Ongoing', 'Completed', 'Cancelled', 'Upcoming'] },
    finalFeedback:{
type:Number,
default:0
    }
  });

const courseModel=mongoose.model('course',courseSchema);
module.exports=courseModel;

