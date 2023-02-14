const Login = require('../models/data')

exports.getData = async (req,res)=>{
    try{
        const fullData = await Login.findAll()
        res.status(200).json({success:true,message:'fetched successfully',fullData:fullData})
    }
    catch(err){
        res.status(500).json({success:false,message:`failed at controllers/getData--> ${err}`})
    }
}