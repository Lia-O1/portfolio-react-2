import React from "react";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import myPhoto from "../images/my-photo.jpg";
import "../styles/About.css";

export default function About() {
  return (
    <>
      <Nav />
      <div className="About">
        <h1 className="text-center">About me</h1>
        <div className="container rounded-2 mx-auto p-4 b-shadow wrapper">
          <div className="row">
            <div className="col-4 d-none d-md-block my-auto">
              <img src={myPhoto} alt="Olha" className="rounded-2 w-100" />
            </div>
            <div className="col-md-8 d-flex flex-column justify-content-center align-items">
              <div className="rounded-2 p-3 my-2 p-wrapper b-shadow d-flex flex-column justify-content-center">
                <span>Hello there!</span>
                <p className="m-0">
                  My name is Olha, and I am a committed Web Developer with
                  expertise in HTML, CSS, JavaScript, and React, with a passion
                  for creating intuitive and engaging user experiences
                </p>
              </div>
              <div className="rounded-2 p-3 my-2 p-wrapper b-shadow">
                <span>Educational Background</span>
                <p className="m-0">
                  I hold a Bachelor’s degree in Audio-Visual Techniques and
                  Media Production. It was during my time at university that I
                  discovered my passion for web development. In addition to
                  programming, my studies also encompassed design, typography,
                  infographics, and 3D modeling and animation. This diverse
                  educational background has equipped me with a unique blend of
                  technical and creative skills, enabling me to create web
                  solutions that are not only functional, but also aesthetically
                  pleasing and user-friendly
                </p>
              </div>
              <div className="rounded-2 p-3 my-2 p-wrapper b-shadow">
                <span>Technical Proficiencies</span>
                <p className="m-0">
                  HTML, CSS, JavaScript, React.js, Next.js, TypeScript, Tailwind
                  CSS, Bootstrap, APIs
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
