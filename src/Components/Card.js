import React, { useState, useCallback, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Project from "./Project";
import ProjectOverlay from "./ProjectOverlay";
import useClickOutside from "../hooks/useClickOutside";

export default function Card(props) {
  const [isOpen, setIsOpen] = useState(() => {
    return JSON.parse(sessionStorage.getItem("isOpen")) || false;
  });

  useEffect(() => {
    sessionStorage.setItem("isOpen", JSON.stringify(isOpen));
  }, [isOpen]);

  const hadleOpen = () => {
    setIsOpen(true);
  };
  const hadleClose = () => {
    setIsOpen(false);
  };

  const handleClickOutside = useCallback(() => {
    setIsOpen(false);
  }, []);

  const ref = useClickOutside(handleClickOutside);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, []);

  useEffect(() => {
    if (isOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <>
      <Project hadleOpen={hadleOpen} {...props} />
      <AnimatePresence>
        {isOpen && <ProjectOverlay ref={ref} close={hadleClose} {...props} />}
      </AnimatePresence>
    </>
  );
}
