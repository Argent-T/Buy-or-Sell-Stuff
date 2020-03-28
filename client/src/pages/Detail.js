import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../utils/API";
import Navbar from "../components/Navbar";

function Detail(props) {
    const [listing, setListing] = useState({})
    const [bidvalue, setBidValue] = useState()
    // When this component mounts, grab the book with the _id of props.match.params.id
    // e.g. localhost:3000/books/599dcb67f0f16317844583fc
    const { id } = useParams()
    useEffect(() => {
        API.getListing(id)
            .then(res => setListing(res.data))
            .catch(err => console.log(err));
    }, [])



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
           
            
        }
        // bid.classList.remove("is-active")
    }
/////////////////////////////////////////////////////////////

    function bidDate(){
        if(listing.bidDate === undefined){
            return
        }
        else{
            var d = listing.bidDate;
           var date = d.substring(0,10);
            console.log(date);
            return ("Auction End Date: " + date);
        }
        
    }

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
                        ${listing.price}
                    </h1>
                    <h1 id="detailDescription">
                        {listing.description}
                    </h1>
                    <br></br>
                    <br></br>
                    <div className="columns">
                        <div className="column is-half">
                            <div className="center">Category: {listing.category}</div>
                            <div id="detailUsername center">Listing by: "UserNameHere"</div>
                            <div id="detailUsername center">Current Bid by: "UserNameHere"</div>
                        <div id="bidDate">{bidDate()}</div>
                        </div>
                        <div className="column is-half">
                            <div className="modal">
                                <div className="modal-background"></div>
                                <div className="modal-card">
                                    <header className="modal-card-head">
                                        <p className="modal-card-title">Place your Bid</p>
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
                            <button className="placeBid" onClick={placeBid}>Place Bid</button>
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
                                    class="facebook">
                                    <span className="icon"><i className="fab fa-facebook-f"></i></span>
                                    <span>Share</span>
                                </a>
                            </span>
                            {/* <!-- twitter --> */}
                            <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" target="_blank" className="button tweet" data-size="large"
                                data-show-count="false">
                                <span class="icon"><i class="fab fa-twitter"></i></span>
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