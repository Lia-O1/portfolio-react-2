import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Project from "./Project";
import ProjectOverlay from "./ProjectOverlay";

export default function Card(props) {
  const [isOpen, setIsOpen] = useState(false);

  const hadleOpen = () => {
    setIsOpen(true);
  };
  const hadleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Project open={hadleOpen} {...props} />
      <AnimatePresence>
        {isOpen && <ProjectOverlay close={hadleClose} {...props} />}
      </AnimatePresence>
    </>
  );
}
