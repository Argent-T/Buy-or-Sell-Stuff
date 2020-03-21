import React from "react";
import Navbar from "../components/Navbar";

function Landing() {
  return (
    <>
      <section className="hero">
        <img src="/images/sell-stuff-online.jpg" />

        {/* <div className="hero-body">
          <div className="container">
          </div>
            <h1 className="title">BOSS</h1>
            <h2 className="subtitle">Buy Or Sell Stuff</h2>
        </div> */}
      </section>
      <Navbar />
      <h1 className="midtitle">BOSS</h1>
      <hr />
      <div className="containter middesc">
        <p>Buy or Sell Stuff App</p>
        <p>
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage is attributed to
          an unknown typesetter in the 15th century who is thought to have
          scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
          type specimen book. It usually begins with
        </p>
      </div>
      <div className="columns">
      <div className="column">
        <h2>Popular Items</h2> 
        </div>
        <div className="column">
          <img className="landImg" src="/images/sell-stuff-online.jpg" />
        </div>
        <div className="column">
          <img className="landImg" src="/images/sell-stuff-online.jpg" />
        </div>
        <div className="column">
          <img className="landImg" src="/images/sell-stuff-online.jpg" />
        </div>
      </div>
    </>
  );
}

export default Landing;
