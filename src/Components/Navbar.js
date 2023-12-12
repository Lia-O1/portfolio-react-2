import React, { Fragment, useState, useEffect } from "react";
import { NavLink, useMatch, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Fragment>
      <div className="container-fluid Navbar">
        <nav className="navbar navbar-expand-lg fixed-top my-navbar px-3">
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
                ? "collapse show text-center justify-content-center"
                : "collapse"
            } navbar-collapse`}
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item px-3">
                <NavLink
                  to="/"
                  className={`nav-link ${useMatch("/") ? "active" : ""}`}
                  onClick={closeMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item px-3">
                <NavLink
                  to="/about"
                  className={`nav-link ${useMatch("/about") ? "active" : ""}`}
                  onClick={closeMenu}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item ps-3">
                <NavLink
                  to="/contact"
                  className={`nav-link ${useMatch("/contact") ? "active" : ""}`}
                  onClick={closeMenu}
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
