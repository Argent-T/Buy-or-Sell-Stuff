import React, { useState, useEffect, useContext } from "react";
import API from "../utils/API";
import { Input, TextArea, FormBtn, Select } from "../components/Form";
import Navbar from "../components/Navbar";
import UserContext from "../utils/UserContext";
import { Link } from 'react-router-dom'


function Sell() {
  // Setting our component's initial state
  const [listings, setListings] = useState([]);
  const [formObject, setFormObject] = useState({});
  const [bidDate, setBidDate] = useState("");
  const [bidOption, setBidOption] = useState("Sale");
  const [prevImg, setPrevImg] = useState("");

  const categories = ["Select a Category", "Clothes", "Cars", "Sports", "Books", "Computers", "Electronics", "Toys", "Other"]
  const bidOptions = ["Sale", "Auction"];
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
    if (name == "img") {
      var file = document.querySelector('#file').files[0]
      encodeImageFileAsURL(file)
        .then(data => {
          setPrevImg(data)
        })
    }
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

      if (formObject.category === "Select a Category") {
        alert("Please Select a Category.")
      }
      else {
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
              bidOption: formObject.bidOption,
              bidDate: formObject.bidDate,
              topBid: formObject.price,
              topBidUser: " ",
              postUser: user.username,
              userid: user.id,
              available: true
            })
              .then(res => loadListings())
              .catch(err => console.log(err));
          })
        console.log("logged");
      }
    }
  }

  // Show or hide date selection/////////////////////
  useEffect(() => {
    var element = document.getElementById("bidDate");
    if (bidOption === "Auction") {
      element.style.display = "block"        
        setBidOption(bidOption)


    }
    else {
      element.style.display = "none"
    }
    console.log(bidOption)

  }, [bidOption])
  /////////////////////////////////////////

const user = useContext(UserContext);

  return (
    <>
      <Navbar />
      <section className="mySection">
        <div className="columns is-vcentered">
          <div className="column is-6-tablet is-6-desktop">
            <div className="myHero">
  <h1>What Are You Selling? {}</h1>
              <form action="/upload/photo" encType="multipart/form-data" method="POST">
                <div className="hr"></div>
                <Select
                  id="category"
                  name="category"
                  onChange={handleInputChange}
                  categories={categories}
                />

                <h2 className="headingTitle">Enter The Item Name</h2>
                <Input className="inputTitle"
                  onChange={handleInputChange}
                  name="title"
                  placeholder="Title (required)"
                />
                <h2 className="headingDesc">Item Description</h2>

                <TextArea className="inputDesc"
                  onChange={handleInputChange}
                  name="description"
                  placeholder="Description (required)"
                />

                <h2 className="headingPrice">Enter Price</h2>

                <Input className="inputPrice"
                  onChange={handleInputChange}
                  type="number"
                  name="price"
                  placeholder="Price (required)"
                />
                <div className="upload-btn-wrapper">
                  <button className="upload-btn">Upload Image</button>
                  <Input className="chooseFile"
                    onChange={handleInputChange}
                    id="file"
                    type="file"
                    name="img"
                    accept="image/*"
                  /></div>
                <h2 className="headingDesc">For Sale or Auction?</h2>

                <Select
                  id="bidOption"
                  name="bidOption"
                  categories={bidOptions}
                  onChange={() => setBidOption(document.querySelector("#bidOption").value)}
                ></Select>

                {/* date entry */}
                <div id="bidDate">
                  Select an end date
                <Input
                    id="chooseDate"
                    onChange={handleInputChange}
                    name="bidDate"
                    type="date"
                  />
                </div>

              </form>
            </div>
          </div>
          <div className="is-divider-vertical" data-content="OR"></div>
          <div className="column is-5-tablet is-5-desktop">
            <h1 className="content is-large headingTitle"><strong>See Your Listing Here</strong></h1>
            <div className="hr"></div>

            <div className="columns">
              <div className="column">
                <p className="sellTitle"><strong>{formObject.title}</strong></p>
                <p className="sellDesc"><strong>{formObject.description}</strong></p>

                <p className="sellPrice"><strong>${formObject.price}</strong></p>
                <p className="sellOption"><strong>For {bidOption}</strong></p>
                <p className="optionDate"><strong>{formObject.bidDate}</strong></p>
              </div>

              <div className="column">
                <figure className="image is-3by2 sellImg">
                  <img src={prevImg} alt="" />
                </figure>
              </div>

            </div>
            <div className="hr"></div>

            
            <button className="sublist-btn"
              disabled={!(formObject.title && formObject.price && formObject.description)}
              onClick={handleFormSubmit}
            >
              <Link to="/congrats">Submit Listing</Link>
               </button>
               

          </div>
        </div>
      </section>
    </>
  );
}

export default Sell;