const express = require('express');
const passport = require('../passport');

// Import data models
var User = require('../models/user');

const router = new express.Router();



router.post('/signup2', (req, res) => {
    //console.log(req.body);
    var newUser = new User({
        email: req.body.email,
        password: req.body.password
    });
    newUser.save((err) => {
        if (err) 
        return res.status(500);

        res.redirect('/login2')


    });
});

router.post('/login2', passport.authenticate('local'), (req, res) => {
    res.status(200);
})

module.exports = router;