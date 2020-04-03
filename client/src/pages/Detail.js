import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../utils/API";
import Navbar from "../components/Navbar";

function Detail(props) {
    const [listing, setListing] = useState({})
    // When this component mounts, grab the book with the _id of props.match.params.id
    // e.g. localhost:3000/books/599dcb67f0f16317844583fc
    const { id } = useParams()
    useEffect(() => {
        API.getListing(id)
            .then(res => setListing(res.data))
            .catch(err => console.log(err));
    }, [])

// console.log("***********", listing.bidOption)

    const bid = document.querySelector(".modal")

    function placeBid() {
        console.log(bid)
        bid.classList.add("is-active")
    }

    function closeModal(){
        bid.classList.remove("is-active")
    }
// SUBMIT BID/////////////////////////////////////////////
    function submitBid(){
        var val = document.getElementById("bid").value;
        console.log(val)

        if(val <= listing.price){
            alert("you must submit a higher bid")
        }
        else{
            
           console.log({
                ...listing,
               topBid: val 
            })
            API.updateListing(id, {...listing, topBid: val})
            setListing({
                ...listing,
               topBid: val 
            })
            
        }
        bid.classList.remove("is-active")
    }
/////////////////////////////////////////////////////////////

//DISPLAY BIDDING INFORMATION///////////////////////////////
    function bidDate(){
        if(listing.bidDate === undefined){
            return
        }
        else{
            const i = listing.bidDate.substring(0,10).split('-');
               
            return (`Auction End Date: ${i[1]}-${i[2]}-${i[0]}`);
        }   
    }
    function listingDate(){
        if(listing.date === undefined){
            return
        }
        else{
            const i = listing.date.substring(0,10).split('-');
               
            return (`${i[1]}-${i[2]}-${i[0]}`);
        }   
    }
    function remainingTime(){

    }

/////////////////////////////////////////////////

//Button Text///////////////////////////////////
function buttonText(){
    if(listing.bidDate === undefined){
        return("Buy")
    }
    else{
        return("Place Bid")
    }
}
////////////////////////////////////////////////

    return (
        <>
            <Navbar />
            <br></br>
            <br></br>
            <div className="columns center">
                <div className="column">
                    <h1 id="detailTitle">
                        {listing.title}
                    </h1>

                    <h1 id="detailPrice">
                        ${listing.topBid}
                    </h1>
                    <h1 id="detailDescription">
                        {listing.description}
                    </h1>
                    <br></br>
                    <br></br>
                    <div className="columns">
                        <div className="column is-half">
                            <div className="center">Category: {listing.category}</div>
                            <div id="detailUsername center">Listing by: {listing.postUser}</div>
                        <div id="biddername" >Current Bid by: {listing.topBidUser}</div>
                        <div id="postDate">Date Listed: {listingDate()}</div>
                        <div id="bidDate">{bidDate()}</div>
                        <div id="remainingTime">{remainingTime()}</div>
                        </div>
                        <div className="column is-half">
                            <div className="modal">
                                <div className="modal-background"></div>
                                <div className="modal-card">
                                    <header className="modal-card-head">
                                        <p className="modal-card-title">{buttonText()}</p>
                                        <button onClick={closeModal} className="delete" aria-label="close"></button>
                                    </header>
                                    <section className="modal-card-body">
                                        <form>
                                            <input id="bid" placeholder="$$$"></input>
                                        </form>
                                    </section>
                                    <footer className="modal-card-foot">
                                        <button onClick={submitBid} className="button is-success">Submit</button>
                                        {/* <button className="button">Cancel</button> */}
                                    </footer>
                                </div>
                            </div>
                         <button className="placeBid" onClick={placeBid}>{buttonText()}</button>
                        </div>
                    </div>
                </div>

                <div className="column">
                    <div><img width="600px" height="600px" src={require = (listing.img)} /></div>
                    <div className="columns">
                        <div className="column buttons">
                            {/* <!-- Facebook --> */}
                            <span className="button facebook" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button"
                                data-size="large"><a target="_blank"
                                    href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
                                    className="facebook">
                                    <span className="icon"><i className="fab fa-facebook-f"></i></span>
                                    <span>Share</span>
                                </a>
                            </span>
                            {/* <!-- twitter --> */}
                            <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" target="_blank" className="button tweet" data-size="large"
                                data-show-count="false">
                                <span className="icon"><i className="fab fa-twitter"></i></span>
                                <span>Tweet</span>
                            </a>
                            {/* <!-- email --> */}
                            <a className="button email"
                                href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site http://www.website.com."
                                title="Share by Email">
                                <span className="icon"><i className="far fa-envelope"></i></span>
                                <span>Email Share</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/buy">← Back</Link>

        </>
    );
}


export default Detail;