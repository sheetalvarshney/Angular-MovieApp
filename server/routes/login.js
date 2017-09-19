let express =require('express');
let router=express.Router();
let login=require('../model/login_schema');

router.get('/',(req,res,next)=>{
	login.find({},(err,data)=>{
		if(err){
			return res.json(err);
		}
		else{
			console.log(data);
			res.json(data);
		}
	})
});

module.exports= router;