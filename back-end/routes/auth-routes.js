var express = require('express');
var router = express.Router();
var passport = require('passport');



// auth with google+
router.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }),(req,res) =>{
    res.send("Khanh");
});

// //  auth with facebook
// router.get('/auth/facebook',
//     passport.authenticate('facebook')
// );

router.get('/auth/google/redirect', passport.authenticate('google',{ scope: ['profile'] }), (req, res) => {
    res.send('you reached the redirect URI');
});

module.exports = router
