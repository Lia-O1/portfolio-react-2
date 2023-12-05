import React, { Fragment, useState } from "react";
import { NavLink, useMatch } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Fragment>
      <div className="container-fluid Navbar">
        <nav className="navbar navbar-expand-lg fixed-top px-3 my-navbar">
          <NavLink to="/" className="navbar-brand m-0">
            <span className="nav-logo">Olha Stepko</span>
          </NavLink>
          <button
            onClick={toggle}
            className={`navbar-toggler  ${isOpen ? "" : "collapsed"}`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`${
              isOpen
                ? "collapse show text-center justify-content-center "
                : "collapse"
            } navbar-collapse`}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item px-3">
                <NavLink
                  to="/"
                  className={`nav-link ${useMatch("/") ? "active" : ""}`}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item px-3">
                <NavLink
                  to="/about"
                  className={`nav-link ${useMatch("/about") ? "active" : ""}`}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item px-3 ">
                <NavLink
                  to="/contact"
                  className={`nav-link ${useMatch("/contact") ? "active" : ""}`}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </Fragment>
  );
}
