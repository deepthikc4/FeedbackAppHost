
const mongoose=require('mongoose');
const userschema= new mongoose.Schema({

email:{type:String,required:true,unique:true},
password:{type:String,required:true},
role:{type:String,required:true,enum:["IQA","trainer"]}

});

const usermodel=mongoose.model('user',userschema);
module.exports=usermodel;


