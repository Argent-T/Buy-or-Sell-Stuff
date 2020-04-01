const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  category:{
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  img: { 
    type: String, 
      
     },
  description: {
    type:String,
    required: true
  },
  date: { 
    type: Date, 
    default: Date.now },
    bidDate: {
      type: Date
    },
  topBid:{
    type: Number
  },
  topBidUser:{
    type: String
  }
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;