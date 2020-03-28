import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Input, TextArea, FormBtn } from "../components/Form";

function Sell() {
  // Setting our component's initial state
  const [listings, setListings] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    loadListings()
  }, [])


  function loadListings() {
    API.getListings()
      .then(res =>
        setListings(res.data)
      )
      .catch(err => console.log(err));
  };


  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };



  function encodeImageFileAsURL(file) {
    return new Promise((res, rej) => {


      var reader = new FileReader();
      reader.addEventListener("load", function () {
        // convert image file to base64 string
        res(reader.result)
      }, false);

      if (file) {
        reader.readAsDataURL(file);
      }
    })
  }




  function handleFormSubmit(event) {

    event.preventDefault();
    console.log("logged");
    if (formObject.title && formObject.price && formObject.description) {

      var file = document.querySelector('#file').files[0]
      console.log(file)
      encodeImageFileAsURL(file)
        .then(data => {
          API.saveListing({
            img: data,
            title: formObject.title,
            price: formObject.price,
            description: formObject.description
          })
            .then(res => loadListings())
            .catch(err => console.log(err));
        })
    }
  }



  return (
    <>
      <h1>Sell</h1>
      <form action="/upload/photo" enctype="multipart/form-data" method="POST">
        <Input
          onChange={handleInputChange}
          id="file"
          type="file"
          name="img"
          accept="image/*"
        />

        <Input
          onChange={handleInputChange}
          name="title"
          placeholder="Title (required)"
        />
        <Input
          onChange={handleInputChange}
          name="price"
          placeholder="Price (required)"
        />
        <TextArea
          onChange={handleInputChange}
          name="description"
          placeholder="Description (required)"
        />
        <FormBtn
          disabled={!(formObject.title && formObject.price && formObject.description)}
          onClick={handleFormSubmit}
        >
          Submit Listing
              </FormBtn>
      </form>

    </>
  );
}

export default Sell;