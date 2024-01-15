import React from "react";
import "../styles/Home.css";

export default function Project({ src, alt, title, open }) {
  return (
    <div className="col-lg-6 position-relative mb-3 mt-3">
      <div
        className="d-flex flex-column b-shadow rounded-2 project"
        onClick={open}
      >
        <div className="w-100 d-flex justify-content-center align-items-center p-5 pb-1">
          <div className="image-transition">
            <img src={src} alt={alt} className="b-shadow rounded-2 w-100" />
          </div>
        </div>
        <div className="d-flex justify-content-start p-3 project-inf">
          {title}
        </div>
      </div>
    </div>
  );
}
