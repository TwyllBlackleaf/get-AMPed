import React from "react";
import "../Home/style.css";


function Home() {
  return (
    <div className="d-flex h-100 text-center text-white bg-dark">
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
    <section className="px-3">
    
            <h1 className="cover-heading">Get AMPed</h1>
            <p className="lead">
              What is AMP? AMPed stands for About Me Page. <br></br> We are all
              about you getting your about me content<br></br> organized and set
              in on page. Get AMPED with us.
            </p>
            <p className="lead">
      <a href="#" class="btn btn-lg btn-secondary fw-bold border-white bg-white" value="Get Started">Get Started</a>
    </p>
    </section>
    </div>
    </div>
  );
}

export default Home;
