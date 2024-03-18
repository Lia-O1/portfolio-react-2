import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import "../styles/ProjectOverlay.css";

const variants = {
  open: { opacity: 1, transition: { duration: 0.5 } },
  closed: { opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } },
};

const ProjectOverlay = forwardRef((props, ref) => {
  const { href, src, srcMob, alt, title, description, tech, git, close } =
    props;

  return (
    <motion.div
      className="d-flex justify-content-center align-items-center position-fixed w-100 h-100 ProjectOverlay"
      variants={variants}
      initial={"closed"}
      animate={"open"}
      exit={"closed"}
      key="overlay"
    >
      <div
        className="p-4 overlay position-relative d-flex justify-content-center align-items-center"
        ref={ref}
      >
        <div className="container d-flex justify-content-center align-items-center">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-lg-9 d-block d-lg-none p-0">
              <img src={src} alt={alt} className="rounded-2 b-shadow" />
            </div>
            <div className="col-3 d-none d-lg-flex p-0 justify-content-center align-items-center">
              <img
                src={srcMob}
                alt={`${alt} Mobile`}
                className="rounded-2 b-shadow"
              />
            </div>

            <div className="col-12 col-lg-9 ps-lg-5">
              <div className="mt-4 mb-2 title">{title}</div>

              <div className="my-2">Built with: {tech}</div>

              <div className="my-2">
                Website:{" "}
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="position-relative link"
                >
                  Visit {title}{" "}
                  <FaArrowUpRightFromSquare
                    size={10}
                    className="position-absolute"
                  />
                </a>
              </div>
              <div className="my-2">
                Source code:{" "}
                <a
                  href={git}
                  target="_blank"
                  rel="noreferrer"
                  className="position-relative link"
                >
                  View on GitHub
                  <FaArrowUpRightFromSquare
                    size={10}
                    className="position-absolute"
                  />
                </a>
              </div>
              <div className="my-2">{description}</div>
            </div>

            <div className="d-flex d-lg-none justify-content-center">
              <button onClick={close}>Close</button>
            </div>
          </div>
        </div>
        <div className="close-btn d-none d-lg-block rounded-3" onClick={close}>
          <MdClose size="30px" />
        </div>
      </div>
    </motion.div>
  );
});
export default ProjectOverlay;
