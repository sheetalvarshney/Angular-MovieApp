var express =require('express');
var bodyParser =require('body-parser');
var morgan =require( 'morgan');
var fs =require('fs');
var path =require('path');
var index =require('./routes/index');
var users =require('./routes/users');
var login= require('./routes/login');
var register= require('./routes/register');

let mongoose=require('mongoose');
var http =require('http');
let passport=require('passport');
let config=require('./config/config');

let passportJwt=require('passport-jwt');
var cors=require('cors');
let jwt=require('jsonwebtoken');

let User=require('./model/login_schema');

http.createServer((req,res)=>{
	//res.writeHead(200,{'Content-Type':'text/plain'});
})
let app=express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(passport.initialize());
mongoose.connect(config.url);

require('./config/passport')(passport); 
 
 var apiRoutes= express.Router();
// mongoose.connection.on('connected',function(){
	
// });
// mongoose.connection.on('error',function(){
	
// // });

let accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})
//app.use(morgan('combined', {stream: accessLogStream}))

app.use('/',index);
app.use('/users',users);
app.use('/login',login);
app.use('/register',register);

apiRoutes.post('/register',function(req,res){
	if(!req.body.emailId || !req.body.password){
		res.json({ success: false, message: 'please enter correct mailId or Password'});
	}
	else{
		var newUser=new User({
			emailId:req.body.emailId,
			password:req.body.password,
			name:req.body.name,
			phone_number:req.body.phone_number
		})
	newUser.save(function(err){
		if(err){
			return res.json({success:false, message:'email already exist'});
		}
		res.json({ success:true,message: 'successfully registered '});
		});
	}
});


apiRoutes.post('/authenticate', function(req, res) {  
  User.findOne({
    emailId: req.body.emailId
  }, function(err, user) {
    if (err) throw err;

    if (!user) {
      res.send({ success: false, message: 'Authentication failed. User not found.' });
    } else {
      user.comparePassword(req.body.password, function(err, isMatch) {
        if (isMatch && !err) {
        	
        	console.log(user);
          var token = jwt.sign({ id:req.body.id, emailId:req.body.emailId }, config.secret, {
            expiresIn: 20000
          });
          res.json({ success: true, token: 'JWT ' + token });
        } else {
          res.send({ success: false, message: 'Authentication failed. Passwords did not match.' });
        }
      });
    }
  });
});

apiRoutes.get('/login',passport.authenticate('jwt',{session:false}),
	function(req,res){
		res.send('It worked!! Id is: '+ req.user.emailId);
	});

app.use('/api',apiRoutes);

app.use((req,res,next)=>{
	let err=new Error('Not Found');
	err.status(404);
	next(err);
});

app.listen(3030,()=>{});

module.exports= app;
