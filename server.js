if (process.env.NODE_ENV !== 'production') {
	console.log('loading dev environments')
	require('dotenv').config()
}
require('dotenv').config()

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const bodyParser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const dbConnection = require('./models/db') // loads our connection to the mongo database
const passport = require('./passport')
const app = express()
const PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(bodyParser({limit: "50mb"}))
app.use(express.json());
// ===== Middleware ====
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())
app.use(
	session({
		secret: process.env.APP_SECRET || 'this is the default passphrase',
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false,
		saveUninitialized: false
	})
)

// ===== Passport ====
app.use(passport.initialize())
app.use(passport.session())


// Serve up static assets (usually on heroku)

if (process.env.NODE_ENV === 'production') {
	const path = require('path')
	console.log('YOU ARE IN THE PRODUCTION ENV')
	app.use('/static', express.static(path.join(__dirname, '..client/build/static')))
	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname, './client/build'))
	})
}

// Add routes, both API and view
app.use('/auth', require('./auth'))
app.use(routes);

// ====== Error handler ====
app.use(function(err, req, res, next) {
	console.log('====== ERROR =======')
	console.error(err.stack)
	res.status(500)
})

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/boss",
{ useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});