const express = require('express')
const router = express.Router()
const User = require('../../models/user')
const passport = require('../../passport')

router.post('/', (req, res) => {
    console.log('user signup');

    const { username, password, first, last, address, city, state, zip, email } = req.body
    // ADD VALIDATION
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log('User.js post error: ', err)
        } else if (user) {
            res.json({
                error: `Sorry, already a user with the username: ${username}`
            })
        }
        else {
            const newUser = new User({
                username: username,
                password: password,
                first: first,
                last: last,
                address: address,
                city: city,
                state: state,
                zip: zip,
                email: email

            })
            newUser.save((err, savedUser) => {
                if (err) return res.json(err)
                res.json(savedUser)
            })
        }
    })
})

router.post(
    '/login',
    function (req, res, next) {
        console.log('routes/user.js, login, req.body: ');
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('logged in', req.user);
        var userInfo = {
            username: req.user.username,
          first: req.user.first,
          last: req.user.last,
          address: req.user.address,
          city: req.user.city, 
          state: req.user.state,
          zip: req.user.zip,
          email: req.user.email,
          listings: req.user.listings
        };
        res.send(userInfo);
    }
)

router.get('/', (req, res, next) => {
    console.log('===== user!!======')
    console.log("get data",req.user)
    if (req.user) {
        User.findOne({_id: req.user._id}, {password:0})
        .then( data =>res.json(data) )
        
    } else {
        res.json({ user: null })
    }
})

router.post('/logout', function(req, res){

        console.log('=====Logout!=====')
        console.log(req.body)
        req.logout();
        res.redirect("/");
    } 
)

module.exports = router