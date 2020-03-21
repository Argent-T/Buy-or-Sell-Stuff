const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/boss";

  const conn = mongoose.connect(MONGODB_URI, {
    // useUnifiedTopology: true,
    useNewUrlParser: true,
    // useCreateIndex: true
  })

exports.conn = conn
exports.MONGO = MONGODB_URI
const routes = require("./routes");
app.use(routes);
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
// Connect to the Mongo DB

