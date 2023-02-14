const Login = require('../models/data')

exports.postData = async (req,res)=>{
    try{
        const {email,password} = req.body
        await Login.create({email,password})
        res.status(201).json({success:true,message:'successful'})
    }
    catch(err){
        res.status(500).json({success:false,message:`failed here--> ${err}`})
    }
}