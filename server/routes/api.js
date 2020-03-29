const express = require('express');
const passport = require('../passport');

// Import data models
var User = require('../models/user');

const router = new express.Router();

router.get('/dashboard', (req, res) => {
    res.status(200).json({
        message: "You're authorized to see this dashboard"
    });
});


router.get('/notes/:id', (req, res) => {
    var userID = req.params.id;
    Note.find({ userID: userID }, function (err, notes) {
        if (err) return console.error(err);
        res.status(200).json(notes);
    });

});

router.post('/notes', (req, res) => {
    //console.log(req.body);
    var submission = new Note({
        userID: req.body.userID,
        note: req.body.note
    });


    
    //console.log(submission);

    submission.save(function (err, data) {
        if (err) return console.error(err);
        console.log(data);
    });
});

router.post('/signup2', (req, res) => {
    //console.log(req.body);
    var newUser = new User({
        email: req.body.email,
        password: req.body.password
    });
    newUser.save((err) => {
        if (err) 
        return res.status(500);

        res.redirect('/api/login2')


    });
});

router.post('/login2', passport.authenticate('local'), (req, res) => {
    res.status(200);
})

module.exports = router;