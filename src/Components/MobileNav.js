import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useMatch } from "react-router-dom";
import { MdClose } from "react-icons/md";

const MobileNavItem = ({ to, children, liVariants }) => {
  const match = useMatch(to);
  return (
    <motion.li className="mb-2" variants={liVariants}>
      <NavLink
        to={to}
        className={`nav-link d-flex justify-content-center align-items-center px-4 ${
          match ? "active" : ""
        }`}
      >
        {children}
      </NavLink>
    </motion.li>
  );
};

const MobileNav = ({ toggle, isOpen }) => {
  const liVariants = {
    open: { y: 0, opacity: 1, transition: { duration: 0.45 } },
    closed: {
      y: 20,
      opacity: 0,
      transition: { duration: 0.45 },
    },
  };

  const ulVariants = {
    open: {
      y: "0%",
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.6,
        duration: 0.6,
      },
    },
    closed: {
      y: "-100%",
      opacity: 0,
      transition: {
        staggerChildren: 0.15,
        staggerDirection: -1,
        duration: 0.6,
        when: "afterChildren",
      },
    },
  };
  return (
    <nav className="d-flex p-relative">
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.ul
            className={`sidebar d-flex flex-column justify-content-center ${
              isOpen ? "open" : ""
            }`}
            initial="closed"
            animate="open"
            exit="closed"
            variants={ulVariants}
          >
            <motion.div
              className="d-flex flex-row justify-content-between position-absolute top-0 w-100 mt-3"
              variants={liVariants}
            >
              <span className="nav-logo d-flex justify-content-center align-items-center ms-4">
                Olha Stepko
              </span>

              <button
                className="d-flex justify-content-center align-items-center me-4"
                onClick={toggle}
              >
                <MdClose size="30px" />
              </button>
            </motion.div>
            <MobileNavItem to="/" liVariants={liVariants}>
              Home
            </MobileNavItem>
            <MobileNavItem to="/about" liVariants={liVariants}>
              About
            </MobileNavItem>
            <MobileNavItem to="/contact" liVariants={liVariants}>
              Contact
            </MobileNavItem>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNav;
