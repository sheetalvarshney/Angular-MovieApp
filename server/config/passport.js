var JwtStrategy = require('passport-jwt').Strategy;  
var ExtractJwt = require('passport-jwt').ExtractJwt;  
var User = require('../model/login_schema');  
var config = require('./config');

// Setup work and export for the JWT passport strategy
module.exports = function(passport) {  
  const opts = {
  jwtFromRequest :ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey :config.secret}

  passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({emailId: jwt_payload.emailId}, function(err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        done(null, user);
      } else {
        done(null, false);
      }
    });
  }));
};