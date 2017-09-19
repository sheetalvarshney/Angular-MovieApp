

let mongoose=require('mongoose');
mongoose.set('debug',true);
let Schema=mongoose.Schema;

let Favourite=new Schema({
	id:{type:Number, unique:true},
	title:String,
	poster_path:String,
	release_date:String,
	vote_count:Number
},{collection:"Favourite",versionKey: false});

let model= mongoose.model('Favourite',Favourite);

module.exports=model;

