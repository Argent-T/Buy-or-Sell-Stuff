const router = require("express").Router();
const listingRoutes = require("./listings");
const passport = require('../../server/passport');

var User = require('../../server/models/user');


// Listing routes
router.use("/listings", listingRoutes);

router.post('/signup2', (req, res) => {
    console.log(req.body);
    console.log("api")
    var newUser = new User({
        email: req.body.email,
        password: req.body.password
    });
    console.log("still")
    newUser.save((err) => {
        if (err) 
        return res.status(500).end();
        console.log("working")
        res.redirect('/api/login2')


    });
});

router.post('/login2', passport.authenticate('local'), (req, res) => {
    console.log("success")
    console.log(req.user)
    res.status(200).end();
})


module.exports = router;
