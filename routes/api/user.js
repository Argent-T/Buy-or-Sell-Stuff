const express = require('express')
const router = express.Router()
const User = require('../../models/user')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../passport/keys");
const passport = require('../../passport')
const validateLoginInput = require("../../validation/login");

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
            username: req.user.username
        };
        res.send(userInfo);
    }
)

router.get('/', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
})

// router.post('/logout', (req, res) => {
//     if (req.user) {
//         req.logout()
//         res.send({ msg: 'logging out' })
//     } else {
//         res.send({ msg: 'no user to log out' })
//     }
// })

router.post("/logout", (req, res) => {
    // Form validation

    const { errors, isValid } = validateLoginInput(req.body);

    // Check validation
    if (!isValid) {

        console.log("valid")
        return res.status(400).json(errors);
    }
    const email = req.body;
    const password = req.body;

    User.findOne({ email }).then(user => {
        // Check if user exists
        if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found" });
        }

        bcrypt.compare(password, inputPassword).then(isMatch => {
            if (isMatch) {
                // User matched
                // Create JWT Payload
                const payload = {
                    id: user.id,
                    name: user.name
                };

            
            jwt.sign(
                payload,
                keys.secretOrKey,
                {
                    expiresIn: 31556926 // 1 year in seconds
                },
                (err, token) => {
                    res.json({
                        success: true,
                        token: "Bearer " + token
                    });
                }
            );
        } else {
            return res
                .status(400)
                .json({ passwordincorrect: "Password incorrect" });
        }
        });
});
    });

module.exports = router