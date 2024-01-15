import React from "react";
import "../styles/ProjectOverlay.css";

export default function ProjectOverlay({
  href,
  src,
  alt,
  title,
  description,
  tech,
  git,
  close,
}) {
  return (
    <div className="d-flex justify-content-center align-items-center position-fixed w-100 h-100 ProjectOverlay">
      <div className="rounded-2 p-3 overlay">
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
    </div>
  );
}
