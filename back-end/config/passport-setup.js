var passport = require('passport')
, GoogleStrategy = require('passport-google-oauth20').Strategy,
FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('./keys');
const User = require('../models/user');

passport.use(

    new FacebookStrategy({
        clientID : keys.facebook.clientID,
        clientSecret : keys.facebook.clientSecret,
        callbackURL: 'http://www.example.com/auth/facebook/callback'
    },
        function(accessToken, refreshToken, profile, done) {
        console.log('passport callback function fired:');
        console.log(profile);
        new User({
            facebookId:profile.id,
            username: profile.displayName,
            email: profile.emails[0].value

        }).save().then((newUser) =>{
            console.log('new user created: ', newUser);
        })

        }
    )

);

passport.use(
    new GoogleStrategy({
            callbackURL: 'http://localhost:8081/auth/google/redirect',
            clientID : keys.google.clientID,
            clientSecret : keys.google.clientSecret,
    },
         (accessToken, refreshToken, profile, done)=>{
        console.log('passport callback function fired:');
        console.log(profile);
        new User({
            googleId:profile.id,
            username: profile.displayName,

        }).save().then((newUser) =>{
            console.log('new user created: ', newUser);
        })

        }
    )
)