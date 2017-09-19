

let express =require('express');
let router=express.Router();
let fav=require('../model/schema');


router.get('/',(req,res,next)=>{
	fav.find((err,data)=>{
		if(err){
			return res.send(err);
		}
		else{
			res.json(data);
		}
	})
});

router.post('/',(req,res,next)=>{
	console.log(res.body);
	let id=req.body.id;
	let title=req.body.title;
	let poster_path = req.body.poster_path;
	let release_date=req.body.release_date;
	let vote_count=req.body.vote_count;
	fav.insertMany({
		"id":id,
		"title":title,
		"poster_path":poster_path,
		"release_date":release_date,
		"vote_count":vote_count
	},(err,data)=>{
		if(err){
			res.send(err);
		}
		else{
			res.json(data);
		}
	})
});

module.exports=router;
