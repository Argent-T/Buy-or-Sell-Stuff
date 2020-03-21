import axios from "axios";

export default {
  // Gets all books
  getListings: function() {
    return axios.get("/api/listings");
  },
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
    console.log(listingData, "listing data")
    const form = new FormData();
    form.append('file',listingData.file)
    form.append('title', listingData.title)
    form.append('price', listingData.price)
    form.append('description', listingData.description)
    const config = { headers:{
      'content-type': 'multipart/form-data'
    }}
    return axios.post("/api/listings/", form, config);
  }
};