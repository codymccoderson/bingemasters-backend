const passport = require('passport'),
    GoogleStrategy = require('passport-google-oauth20').Strategy,
    keys = require('../config/keys'),
    mongoose = require('mongoose');

const User = mongoose.model('users');

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        },
        (accessToken, refreshToken, profile, done) => {
            console.log('access token', accessToken);
            console.log('refresh token', refreshToken);
            console.log('profile:', profile);

            User.findOne({ googleId: profile.id })
                .then((existingUser) => {
                    if (existingUser) {
                    } else {
                       new User({ googleId: profile.id }).save(); 
                    

                    }
                });      
        }
    )
);

module.exports = passport;