import React from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import myPhoto from "../images/my-photo.jpg";
import "../styles/About.css";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Bootstrap",
  "Framer Motion",
  "APIs",
];

export default function About() {
  return (
    <div className="About">
      <Nav />
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
                  Hello there! My name is Olha, and I am a committed Front-End
                  Developer with expertise in HTML, CSS, JavaScript, and React,
                  with a passion for creating intuitive and engaging user
                  experiences.
                </p>
                <p>
                  I earned my Bachelor’s degree in Audio-Visual Techniques and
                  Media Production, which sparked my interest in web
                  development. My distinctive combination of technical abilities
                  and creative vision allows me to create websites and
                  applications that are not just functional, but also
                  aesthetically pleasing. I have a keen eye for design and a
                  deep understanding of user-centered design principles, which I
                  believe are crucial for creating effective web solutions.
                </p>
                <p className="pb-0 mb-0">
                  Here’s to the code yet to be written, the designs yet to be
                  drawn, and the journey yet to be traveled! I look forward to
                  bringing more creative and user-friendly solutions to life.
                </p>
                <div className="d-flex flex-wrap my-3">
                  {skills.map((skill) => {
                    return (
                      <div className="me-2 my-1 rounded-2 skill" key={skill}>
                        {skill}
                      </div>
                    );
                  })}
                </div>
                <hr className="d-block d-md-none" />
                <div className="d-flex my-2 resume-wrapper">
                  <a
                    href="https://1drv.ms/b/s!Amwf-W7QJ58Ajb4TGCAB75hamHtgRw?e=f4Nxoi"
                    className="resume-link animation-link"
                  >
                    My Resume
                  </a>
                </div>
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
