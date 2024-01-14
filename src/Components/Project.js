import React from "react";
import "../styles/Home.css";

export default function Project({ href, src, alt, title }) {
  return (
    <div className="col-lg-6 mb-3 mt-3">
      <a href={href} target="_blank" rel="noreferrer">
        <div className="d-flex flex-column b-shadow rounded-2 project ">
          <div className="w-100 d-flex justify-content-center align-items-center p-5 pb-1">
            <div className="image-transition">
              <img src={src} alt={alt} className="b-shadow rounded-2 w-100" />
            </div>
          </div>
          <div className="d-flex justify-content-start p-3 project-inf">
            {title}
          </div>
        </div>
      </a>
    </div>
  );
}
