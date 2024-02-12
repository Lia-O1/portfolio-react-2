import React, { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import Project from "./Project";
import ProjectOverlay from "./ProjectOverlay";
import useClickOutside from "../hooks/useClickOutside";

export default function Card(props) {
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <>
      <Project hadleOpen={hadleOpen} {...props} />
      <AnimatePresence>
        {isOpen && <ProjectOverlay ref={ref} close={hadleClose} {...props} />}
      </AnimatePresence>
    </>
  );
}
