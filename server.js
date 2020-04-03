const express = require("express");
// const mongoose = require("mongoose");
const routes = require("./routes");
const session = require('express-session');
const morgan = require('morgan')
const MongoStore = require('connect-mongo')(session);
const app = express();
const bodyParser = require('body-parser');
const dbConnection = require('./client/src/db');
const passport = require('./passport');
const PORT = process.env.PORT || 3001;

// Route requires
// const user = require('./routes/api/user')

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser({limit: "50mb"}))
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}




// Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
    saveUninitialized: false //required
    
	})
)




// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

// Add routes, both API and view
// app.use('/user', user)
app.use(routes);
// Routes
// app.use('/user', user)



// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/boss",
// { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});