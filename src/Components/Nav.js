import React, { useState, useEffect } from "react";
import { NavLink, useMatch, useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import MobileNav from "./MobileNav";
import "../styles/Nav.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prevIsOpen) => !prevIsOpen);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="Nav">
      <nav className="d-flex">
        <ul className="d-flex justify-content-end align-items-center sticky-top">
          <li>
            {" "}
            <NavLink to="/" className="nav-logo d-flex align-items-center ps-4">
              <span>Olha Stepko</span>
            </NavLink>
          </li>
          <li className="d-none d-lg-flex">
            <NavLink
              to="/"
              className={`nav-link d-flex align-items-center px-4 ${
                useMatch("/") ? "active" : ""
              }`}
            >
              Home
            </NavLink>
          </li>
          <li className="d-none d-lg-flex">
            <NavLink
              to="/about"
              className={`nav-link d-flex align-items-center px-4 ${
                useMatch("/about") ? "active" : ""
              }`}
            >
              About
            </NavLink>
          </li>
          <li className="d-none d-lg-flex">
            <NavLink
              to="/contact"
              className={`nav-link d-flex align-items-center px-4 ${
                useMatch("/contact") ? "active" : ""
              }`}
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <button
          className="d-flex d-lg-none align-items-center justify-content-end pe-4"
          onClick={toggle}
        >
          <FiMenu size="30px" />
        </button>
      </nav>
      <MobileNav toggle={toggle} isOpen={isOpen} />
    </div>
  );
}
