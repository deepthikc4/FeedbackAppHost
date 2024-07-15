const mongoose=require('mongoose');

// create schema
const feedbackSchema = mongoose.Schema({
    // courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    courseId:Number,
    question1: Number,
    question2: Number,
    question3: Number,
    question4: Number,
    like: String,
    additionalComments: String,
    finalFeedback: Number
  });



const feedbackModel=mongoose.model('feedback',feedbackSchema);
module.exports=feedbackModel;

