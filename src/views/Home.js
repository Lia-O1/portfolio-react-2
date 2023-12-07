import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import tsukiNoYoru from "../images/tsuki-no-yoru-website.png";
import weatherToday from "../images/weather-web-app.png";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="Home" id="home-head">
      <Navbar />
      <div className="d-flex flex-column ustify-content-center align-items-center text-center">
        <h2>Hi, I am</h2>
        <h1>Olha Stepko</h1>
        <h3>Front-end developer, based in Australia</h3>
        <div className="d-flex justify-content-center text-center mt-4 buttons">
          <button href="/about-me.html" className="primary-btn rounded-2 me-3">
            <NavLink to="/contact" className="link">
              About me
            </NavLink>
          </button>
          <button
            href="/contact-me.html"
            className="secondary-btn rounded-2 ms-3"
          >
            <NavLink to="/contact" className="link">
              Contact me
            </NavLink>
          </button>
        </div>
      </div>
      <div className="space py-5" id="portfolio">
        <div className="d-flex flex-column between-parts">
          <div className="d-flex justify-content-start">
            Take a look at my portfolio - projects
          </div>
        </div>
      </div>
      <div className="py-5">
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6 mb-3 mt-3">
              <a
                href="https://sparkling-sundae-e35163.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="d-flex flex-column b-shadow rounded-2 project ">
                  <div className="w-100 d-flex justify-content-center align-items-center p-5 pb-1">
                    <div className="image-transition">
                      <img
                        src={tsukiNoYoru}
                        alt="Tsuki No Yoru Preview"
                        className="b-shadow rounded-2 w-100"
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-start p-3 project-inf">
                    Tsuki No Yoru
                  </div>
                </div>
              </a>
            </div>
            <div className="col-lg-6 mb-3 mt-3">
              <a
                href="https://jovial-bienenstitch-a81bd9.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="d-flex flex-column rounded-2 project b-shadow">
                  <div className="w-100 d-flex justify-content-center align-items-center p-5 pb-1">
                    <div className="image-transition">
                      <img
                        src={weatherToday}
                        alt="WeatherToday Preview"
                        className="b-shadow rounded-2 w-100"
                      />
                    </div>
                  </div>
                  <div className="d-flex justify-content-start p-3 project-inf">
                    WeatherToday
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
