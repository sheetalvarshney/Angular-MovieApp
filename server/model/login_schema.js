
let mongoose=require('mongoose');
mongoose.set('debug',true);
let Schema=mongoose.Schema;
var bcrypt = require('bcrypt');


let login=new Schema({
	emailId:{type:String, unique:true},
	password:String,
	name:String,
	phone_number:String
},{collection:'login',versionKey: false});


// login.pre('save', function (next) {  
//   var user = this;
//   console.log(user);
//   if (this.isModified('password') || this.isNew) {
//     bcrypt.genSalt(10, function (err, salt) {
//       if (err) {
//         return next(err);
//       }
//       bcrypt.hash(user.password, salt, function(err, hash) {
//         if (err) {
//           return next(err);
//         }
//         user.password = hash;
//         next();
//       });
//     });
//   } else {
//     return next();
//   }
// });

login.methods.comparePassword = function(pw, cb) {  
  // bcrypt.compare(pw, this.password, function(err, isMatch) {
    if(this.password==pw){
    cb(null, true);
    }
    else 
     cb(null, false)
    };

let login_model= mongoose.model('login',login);


module.exports=login_model;


