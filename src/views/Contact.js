import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Nav from "../Components/Nav";
import "../styles/Contact.css";
import "../styles/Footer.css";

export default function Contact() {
  return (
    <div className="Contact">
      <Nav />
      <div className="page-wrap">
        <h1 className="text-center pb-2 contact-headline">
          Lets get in touch!
        </h1>
        <div className="container rounded-2 p-5 wrapper">
          <div className="row pb-4">
            <div className="col-md-7">
              <div className="row">
                <div className="col-md-12 d-flex pb-2 contact-me-header">
                  <span>Work inquiry</span>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 d-flex contact-me-sub">
                  <span>
                    Let's work together and I will help you by all my best
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-5 d-flex contact-me-btn align-items-center">
              <button
                href="mailto:olhastepko2020@gmail.com"
                className="primary-btn rounded-2"
              >
                Let's talk here
              </button>
            </div>
          </div>
          <hr />

          <div className="row pt-3 text-center">
            <div className="col-12 text-center">
              <a
                href="mailto:olhastepko2020@gmail.com"
                rel="noreferrer"
                className="email animation-link"
              >
                olhastepko2020@gmail.com
              </a>
            </div>
          </div>
          <div className="row d-flex pt-3">
            <div className="col-12 d-flex justify-content-center">
              <a
                href="https://github.com/Lia-O1"
                target="_blank"
                title="Github profile"
                rel="noreferrer"
              >
                <FaGithub className="social-icon p-2 m-2 rounded-2" />
              </a>
              <a
                href="https://www.linkedin.com/in/olha-stepko/"
                target="_blank"
                title="LinkedIn profile"
                rel="noreferrer"
              >
                <FaLinkedinIn className="social-icon p-2 m-2 rounded-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
