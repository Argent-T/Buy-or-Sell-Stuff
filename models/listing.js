const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  filename:{
    type: String,
    required: true
  },
  description: {
    type:String,
    required: true
  },
  date: { 
    type: Date, 
    default: Date.now }
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;