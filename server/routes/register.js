let express =require('express');
let router=express.Router();
let login_schema=require('../model/login_schema');


router.post('/',(req,res,next)=>{
	console.log(res.body);
	 let login =new login_schema({
	  emailId:req.body.emailId,
	  name:req.body.name,
	  password:req.body.password,
	  phone_number:req.body.phone_number})
	  
	  login_schema.find({emailId:req.body.emailId}, (err, data)=>{
	  	if(data.emailId==undefined){		
		  	login.save((err,data)=>{
	         if(err){
	         	let resp={
	         		"message":"email already exists"
	         	}
				return res.json(resp);
			}
			else {
				res.json({"message":"successfully registered"});
				console.log(res.json());
			}

		  })
	  	}
	  	else{
	  		res.json({"message":"You are already registered"});
	  		console.log(res.json());
	  	}


	}); 
});

module.exports=router;