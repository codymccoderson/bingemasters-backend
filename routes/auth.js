const express = require('express'),
    router = express.Router(),
    passport = require('passport');

router.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));
  
router.get('/auth/google/callback', passport.authenticate('google'));

// deserialize user function makes the user model instance add to req object as req.user
router.get('/api/current_user', (req, res) => {
    res.send(req.user);
});


module.exports = router;