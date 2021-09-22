import React from "react";
import "../Home/style.css"


function Header() {
    return (
        <div className="d-flex h-100 text-center text-white bg-dark">
         <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="mb-auto">
            <div>

        <h3 className="float-md-start mb-0">AMP</h3>
        <nav className="nav nav-masthead justify-content-center float-md-end">
          <ul>
            <li><link className="nav-link" href="#" value="About Us"></link></li>
            <li><link className="nav-link"href="#" value="Login"></link></li>
            <li><link className="nav-link" href="#" value="SignUp"></link></li>
          </ul>
        </nav>
        </div>
        </header>     
    </div>
    </div>
    )
}

export default Header;
