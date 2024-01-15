import React, { useState } from "react";
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
      {isOpen && <ProjectOverlay close={hadleClose} {...props} />}
    </>
  );
}
