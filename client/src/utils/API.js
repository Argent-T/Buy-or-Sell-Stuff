import axios from "axios";

export default {
  // Gets all books
  getUser: function() {
    return axios.get("/api/user");
  },
  getListings: function() {
    return axios.get("/api/listings");
  },

  // Gets the book with the given id
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },
  getListing: function(id) {
    return axios.get("/api/listings/" + id);
  },

  // Deletes the book with the given id
  deleteUser: function(id) {
    return axios.delete("/api/user/" + id);
  },
  deleteListing: function(id) {
    return axios.delete("/api/listings/" + id);
  },

  // Saves a book to the database

  saveUser: function(userData) {
    console.log(userData)
 
    return axios.post("/api/user", userData);
  },

  saveListing: function(listingData) {
    console.log(listingData)
 
    return axios.post("/api/listings", listingData);
  }
};