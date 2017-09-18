var express =require('express');
let router=express.Router();
let fav=require('../model/schema');

router.put('/:id',(req,res,next)=>{
	fav.findOneAndUpdate({id:req.params.id},{$set:{vote_count:req.body.vote_count}},(err,data)=>{
		if(err){
			res.send(err);
		}
		else{
			res.json(data);
		}
	})
});

router.delete('/:id',(req,res)=>{
console.log(req.body);
	fav.findOneAndRemove({id:req.params.id},(err,data)=>{
		if(err){
			res.send(err);
		}
		else{
			console.log(data);
			res.json(data);
		}
	})
})


module.exports=router;
