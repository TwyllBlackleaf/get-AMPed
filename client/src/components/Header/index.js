import React from "react";
import "../Home/style.css"
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className="mb-auto">
      <div className="d-flex h-100 text-center text-white bg-dark">
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <div>
            <Link to="/" className="text-white">
              <h3 className="float-md-start mb-0">AMP</h3>
            </Link>
            <nav className="nav nav-masthead justify-content-center float-md-end">
              <ul>
                <li className="text-white"><Link to="/" className="nav-link text-white" value="About Us">About Us</Link></li>
                <li className="text-white"><Link to="/login" className="nav-link text-white" value="Login">Login</Link></li>
                <li className="text-white"><Link to="/login" className="nav-link text-white" value="SignUp">SignUp</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
