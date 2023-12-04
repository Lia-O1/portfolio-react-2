import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import myPhoto from "../images/my-photo.jpeg";
import "../styles/About.css";

export default function About() {
  return (
    <div className="About">
      <Navbar />
      <div className="text-center about-greeting">
        <h1>About me</h1>
        <h3 className="px-2">
          Passionate <br className="d-md-inline d-md-none" />
          Front-End Developer <br />
          with a unique blend of technical expertise and creative flair
        </h3>
      </div>
      <div className="pb-5">
        <div className="rounded-2 mx-auto px-1 py-3 b-shadow wrapper">
          <div className="container about-me-inf">
            <hr className="py-2" />
            <div className="row d-flex align-items-center justify-content-center">
              <div className="col-sm-4 d-none d-lg-block">
                <div className="d-flex justify-content-start">
                  <img
                    src={myPhoto}
                    alt="Olha"
                    className="rounded-2 w-100 mb-3"
                  />
                </div>
              </div>
              <div className="col-md-8">
                <p>
                  Hello there! I’m Olha, a dedicated Front-End Developer with a
                  strong foundation in HTML, CSS, JavaScript, and React, and a
                  passion for creating intuitive and engaging user experiences.
                  Originally from Ukraine, I moved to Melbourne two years ago. I
                  hold a Bachelor’s degree in Audio-Visual Techniques and Media
                  Production, and this is where I discovered my passion for web
                  development.
                </p>
                <p>
                  My unique blend of technical skills and creative flair enables
                  me to develop websites and applications that are not only
                  functional but also visually appealing. I have a keen eye for
                  design and a deep understanding of user-centered design
                  principles, which I believe are crucial for creating effective
                  web solutions.
                </p>
                <p className="pb-0">
                  I am committed to continuous learning and self-improvement,
                  and always eager to take on new challenges and expand my
                  knowledge. Here’s to the code yet to be written, the designs
                  yet to be drawn, and the journey yet to be traveled!
                </p>
                <p className="d-none d-md-block">
                  <a
                    href="https://drive.internxt.com/sh/file/89258a82-43ff-4c18-a5f2-bbb532161d03/f46dbf3a2a4ba9bf31acd54622bac9019017bc20f4d9929fdb770442a8dc3333"
                    className="resume-link animation-link"
                  >
                    My Resume
                  </a>
                </p>
                <p className="d-block d-md-none text-center">
                  <a
                    href="https://drive.internxt.com/sh/file/89258a82-43ff-4c18-a5f2-bbb532161d03/f46dbf3a2a4ba9bf31acd54622bac9019017bc20f4d9929fdb770442a8dc3333"
                    className="resume-link animation-link"
                  >
                    My Resume
                  </a>
                </p>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
