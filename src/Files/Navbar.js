import React from 'react';
import { NavLink } from 'react-router-dom';
// import logo from './logo.svg';

const Navbar = () => {
  return (
    <div>
        <div className="Container mt-1">
        <nav className="navbar navbar-expand-lg bg-secondary">
          <div className="container-fluid nav">
            <a class="navbar-brand" href="#">
              <img
                src={require('./Image/logo.png')}
                alt="Logo"
                width="100"
                height="40"
                class="d-inline-block align-text-top ms-2"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 text-light">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active mx-3"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                 <li class="nav-item">
                  <NavLink className="nav-link mx-3" to="/about">
                    About
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link mx-3" to="/course">
                    Courses
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link mx-3" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
              
            </div>
          </div>
        </nav>
      </div>    
    </div>
  )
}

export default Navbar