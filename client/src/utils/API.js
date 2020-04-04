import axios from "axios";

export default {
  getUser: function(id){
    return axios.get("/api/user");
  },
  // Gets all books
  getListings: function() {
    return axios.get("/api/listings");
  },
  getPurchased: function(id){
    console.log("api-------------------", id)
    return axios.get("/api/profile/" + id);
  }
  
  ,
  // Gets the book with the given id
  getListing: function(id) {
    return axios.get("/api/listings/" + id);
  },
  // Deletes the book with the given id
  deleteListing: function(id) {
    return axios.delete("/api/listings/" + id);
  },
  // Saves a book to the database
  saveListing: function(listingData) {
    console.log(listingData)
 
    return axios.post("/api/listings", listingData);
  },
  updateListing: function(id, listingData){
    return axios.put("/api/listings/" + id, listingData);
  }
};