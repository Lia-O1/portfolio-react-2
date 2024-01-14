import React, { useState, useEffect } from "react";
import { NavLink, useMatch, useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
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
      <nav className="d-flex">
        <ul
          className={`sidebar d-flex flex-column justify-content-center ${
            isOpen ? "open" : ""
          }`}
        >
          <div className="d-flex flex-row justify-content-between position-absolute top-0 w-100 mt-3">
            <span className="nav-logo d-flex justify-content-center align-items-center ms-4">
              Olha Stepko
            </span>

            <button
              className="d-flex justify-content-center align-items-center me-4"
              onClick={toggle}
            >
              <MdClose size="30px" />
            </button>
          </div>
          <li className="mb-2">
            <NavLink
              to="/"
              className={`nav-link d-flex justify-content-center align-items-center px-4 ${
                useMatch("/") ? "active" : ""
              }`}
            >
              Home
            </NavLink>
          </li>
          <li className="mb-2">
            <NavLink
              to="/about"
              className={`nav-link d-flex justify-content-center align-items-center px-4 ${
                useMatch("/about") ? "active" : ""
              }`}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={`nav-link d-flex justify-content-center align-items-center px-4 ${
                useMatch("/contact") ? "active" : ""
              }`}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
