const express = require('express'),
    router = express.Router(),
    passport = require('passport');

router.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));
  
router.get('/auth/google/callback', passport.authenticate('google'));

module.exports = router;