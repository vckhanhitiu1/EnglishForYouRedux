var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/login', (req, res) => {
    res.render('login', { user: req.user });
});

// auth logout
router.get('/logout', (req, res) => {
    // handle with passport
    res.send('logging out');
});


// auth with google+
router.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));


//  auth with facebook
router.get('/auth/facebook',
    passport.authenticate('facebook')
);

router.get('/auth/google/redirect', passport.authenticate('google',{ scope: ['profile'] }), (req, res) => {
    res.send('you reached the redirect URI');
});

module.exports = router
