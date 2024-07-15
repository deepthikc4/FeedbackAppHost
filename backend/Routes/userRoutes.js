
const express=require('express');
const router=express.Router();
router.use(express.json());
const user=require('../Model/user')
const jwt=require('jsonwebtoken');



router.post('/login',async(req,res)=>{

    let email=req.body.email;
    let password=req.body.password;
    let loginuser= await user.findOne({email:email});
    if(!loginuser)
    {
        return res.status(404).send({Message:"Email not found"});
    }
    try {
        if(loginuser.password===password){
            let payload={email:email,pwd:password};
            let token=jwt.sign(payload,'feedbackapp');
            return res.status(200).send({Message:'login successful',role:loginuser.role,token:token});
        }
        else{
            return res.status(500).send({Message:"password not valid"});
        }
        
    } catch (error) {
        res.status(404).send({Message:"No user Found"});
    }
})
module.exports=router;

