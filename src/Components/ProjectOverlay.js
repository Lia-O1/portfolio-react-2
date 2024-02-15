import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import "../styles/ProjectOverlay.css";

const variants = {
  open: { opacity: 1, transition: { duration: 0.5 } },
  closed: { opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } },
};

const ProjectOverlay = forwardRef((props, ref) => {
  const { href, src, alt, title, description, tech, git, close } = props;

  return (
    <motion.div
      className="d-flex justify-content-center align-items-center position-fixed w-100 h-100 ProjectOverlay"
      variants={variants}
      initial={"closed"}
      animate={"open"}
      exit={"closed"}
      key="overlay"
    >
      <div className="rounded-2 p-3 overlay" ref={ref}>
        <div className="d-flex justify-content-center">
          <img src={src} alt={alt} className="rounded-2 b-shadow" />
        </div>
        <div>
          <div className="mt-4 mb-2 title">{title}</div>

          <div className="my-2">Built with: {tech}</div>

          <div className="my-2">
            Website:{" "}
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-decoration-underline"
            >
              Visit {title}
            </a>
          </div>
          <div className="my-2">
            Source code:{" "}
            <a
              href={git}
              target="_blank"
              rel="noreferrer"
              className="text-decoration-underline"
            >
              View on GitHub
            </a>
          </div>
          <div className="my-2">{description}</div>
        </div>
        <div className="d-flex justify-content-center">
          <button onClick={close}>Close</button>
        </div>
      </div>
    </motion.div>
  );
});
export default ProjectOverlay;
