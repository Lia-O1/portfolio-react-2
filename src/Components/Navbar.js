import React, { Fragment, useState } from "react";
import { NavHashLink } from "react-router-hash-link";
import "../styles/Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Fragment>
      <div className="container-fluid Navbar">
        <nav className="navbar navbar-expand-lg fixed-top px-3 my-navbar">
          <NavHashLink to="/#home-head" className="navbar-brand m-0">
            <span className="nav-logo">Olha Stepko</span>
          </NavHashLink>
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
              <NavHashLink
                to="/#home-head"
                className="nav-link"
                activeClassName="active"
                exact
              >
                Home
              </NavHashLink>
              <NavHashLink
                to="/#portfolio"
                className="nav-link no-underline"
                activeClassName="active"
                smooth
              >
                Portfolio
              </NavHashLink>
              <NavHashLink
                to="/about/#about-head"
                className="nav-link"
                activeClassName="active"
                exact
              >
                About
              </NavHashLink>
              <NavHashLink
                to="/contact"
                className="nav-link"
                activeClassName="active"
                exact
              >
                Contact
              </NavHashLink>
            </ul>
          </div>
        </nav>
      </div>
    </Fragment>
  );
}
