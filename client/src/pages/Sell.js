import React, { useState, useEffect, useContext } from "react";
import API from "../utils/API";
import { Input, TextArea, FormBtn, Select } from "../components/Form";
import Navbar from "../components/Navbar";
import UserContext from "../utils/UserContext";


function Sell() {
  // Setting our component's initial state
  const [listings, setListings] = useState([]);
  const [formObject, setFormObject] = useState({});
  const [bidDate, setBidDate] = useState("");
  const [bidOption, setBidOption]= useState("Sale")

  const categories = ["Select a Category","Clothes","Cars","Sports","Books","Computers", "Electronics","Toys","Other"]
  const bidOptions = ["Sale","Auction"];
  // Load all books and store them with setBooks
  // useEffect(() => {
  //   loadListings()
  // }, [])


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

// Converts image to base64 for storage/////////////////////////////
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
//////////////////////////////////////////////////

  function handleFormSubmit(event) {

    event.preventDefault();
    
    if (formObject.title && formObject.price && formObject.description) {

      if(formObject.category === "Select a Category"){
        alert("Please Select a Category.")
      }
      else{
      var file = document.querySelector('#file').files[0]
      console.log(file)
      encodeImageFileAsURL(file)
        .then(data => {
          API.saveListing({
            img: data,
            category: formObject.category,
            title: formObject.title,
            price: formObject.price,
            description: formObject.description,
            bidDate: formObject.bidDate,
            topBid: formObject.price,
            topBidUser: " "

          })
            .then(res => loadListings())
            .catch(err => console.log(err));
        })
        console.log("logged");
      }
    }
  }

  // Show or hide date selection/////////////////////
useEffect(()=>{
  var element = document.getElementById("bidDate");
  if(bidOption === "Auction"){
    element.style.display = "block"
  }
  else{
  element.style.display = "none"}

},[bidOption])
/////////////////////////////////////////

const user = useContext(UserContext);

  return (
    <>
      <Navbar />
      <section className="mySection">
        <div className="columns is-vcentered">
          <div className="column is-5-tablet is-5-desktop">
            <div className="myHero">
  <h1>What Are You Selling? {}</h1>
              <form action="/upload/photo" encType="multipart/form-data" method="POST">
                <div className="hr"></div>
                <h2 className="headingTitle">Enter The Item Name</h2>
                <Input className="inputTitle"
                  onChange={handleInputChange}
                  name="title"
                  placeholder="Title (required)"
                />
                <h2 className="headingPrice">Selling Price</h2>

                <Input className="inputPrice"
                  onChange={handleInputChange}
                  name="price"
                  placeholder="Price (required)"
                />
                <h2 className="headingDesc">Item Description</h2>

                  <TextArea className="inputDesc"
                    onChange={handleInputChange}
                    name="description"
                    placeholder="Description (required)"
                  />
                <Input className="chooseFile"
                  onChange={handleInputChange}
                  id="file"
                  type="file"
                  name="img"
                  accept="image/*"
                />
                <Select 
                id="category"
                name = "category"
                onChange = {handleInputChange}
                categories = {categories}
                />
                 
                 For Sale or Auction?
                <Select 
                id="bidOption"
                name = "bidOption"
                categories = {bidOptions}
                onChange = {()=> setBidOption(document.querySelector("#bidOption").value)}
                ></Select>
                  
                  
                {/* date entry */}
                <div id="bidDate">
                  Select an end date
                <Input 
                  onChange={handleInputChange}
                  name="bidDate"
                  type= "date"
                />
                </div>

                <FormBtn 
                  disabled={!(formObject.title && formObject.price && formObject.description)}
                  onClick={handleFormSubmit}
                >
                  Submit Listing
               </FormBtn>
              </form>
            </div>
          </div>
          <div className="column is-7-tablet is-7-desktop">
            <figure className="image is4by3">
              <img src="/images/sell-stuff-online.jpg" alt="" />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sell;