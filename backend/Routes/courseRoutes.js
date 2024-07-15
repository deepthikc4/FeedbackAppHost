const express=require('express');
const router=express.Router();

const coursemodel=require('../Model/course');
const jwt=require('jsonwebtoken');
router.use(express.json());

// verify token
function verifytoken(req,res,next){
    const token=req.headers.token;
    
    try {
        if(!token) throw 'unauthorized access';
    // extract payload
    let payload=jwt.verify(token,'feedbackapp');
    if(!payload)throw 'unauthorized access';
    
    next()
    
    } catch (error) {
        res.status(404).send('caught in error');
    }
    
    }


// Adding new Course

router.post('/addnewcourse',verifytoken,async(req,res)=>{
    try {
        const newCourse=req.body;

// checking course id alredy exists or not
const existingCourse = await coursemodel.findOne({ courseId: newCourse.courseId });
if (existingCourse) {
  return res.status(400).send({Message:"Course with this ID already exists" });
}

const addedCourse=await coursemodel(newCourse).save();
console.log(addedCourse);
if(addedCourse)
    {
        res.status(200).send({Message:"new course added successfully"});
    }
    } catch (error) {
       res.status(500).send({Message:"failed"}) 
    }


})


// display NewCourses List 

router.get('/newcourses',verifytoken,async(req,res)=>{
try {
    const newCourses= await coursemodel.find({status: 'Upcoming' }).then((newCourses)=>
   
    {
        res.status(200).send(newCourses);
    })
} catch (error) {
    res.status(404).send({Message:"can not display new course details"}) 
}

})

// Delete New Courses


router.delete('/removenewcourse/:id',verifytoken,async(req,res)=>{
    try {
       
const deletecourse=await coursemodel.findByIdAndDelete(req.params.id);
if(!deletecourse)
{
    return res.status(404).json({ error: "Course not found" });
}
 res.status(200).send({Message:'Course deleted Successfully'});
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }



});
// updating new courses

router.put('/newcourseupdate/:id',verifytoken,async(req,res)=>{

    try {
   
       const updateddata= await coursemodel.findByIdAndUpdate(req.params.id,req.body);
       console.log(updateddata);
       if(!updateddata)
       {
        console.log("no Course updated");
        return req.status(404).send({error:'no data found'});

       }
       res.status(200).json({Message:"course data updated"})
    } catch (error) {
        res.status(400).json({Message:"Bad request"});
    }
})
// Update final feedback score

//     router.put('/addfinalscore/:id',async(req,res)=>{
//         try {
//         const id=req.params.id;
        
//         const updatedscore = await coursemodel.findOneAndUpdate(
//             { courseId: id },
//             { finalFeedback: req.body.finalFeedback },
//             { new: true } // This option returns the updated document
//         );
//         if(!updatedscore){
//             res.send({Message:"no data found"})
//         }
//         res.send({Message:"updated"})
//         }
//  catch (error) {
//     res.send(error);
// }})



    
// router.put('/update/:id',async(req,res)=>{
//     try {
//         let id=req.params.id;
//         const updatedmentor= await  mentordetails.findByIdAndUpdate(id, req.body);
//         console.log(updatedmentor);
//         if(!updatedmentor)
//         {
//             console.log("no mentor found");
//            return res.status(404).json({error:`no data found`});
//         }
//         res.status(200).send({Message:"data updated"});
//     } catch (error) 
//     {
//         res.status(400).json({ error: 'Bad Request' });
//     }
// })



module.exports=router;