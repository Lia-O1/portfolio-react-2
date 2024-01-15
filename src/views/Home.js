import React from "react";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Nav from "../Components/Nav";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import tsukiNoYoru from "../images/tsuki-no-yoru-website.png";
import weatherToday from "../images/weather-web-app.png";
import "../styles/Home.css";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="Home">
        <div className="d-flex flex-column ustify-content-center align-items-center text-center">
          <h2>Hi, I am</h2>
          <h1>Olha Stepko</h1>
          <h3>Front-end developer, based in Australia</h3>
          <div className="d-flex justify-content-center text-center mt-4 buttons">
            <HashLink
              to="/#portfolio"
              className="primary-btn link rounded-2 me-3"
            >
              My Portfolio
            </HashLink>
            <NavLink
              to="/contact"
              className="secondary-btn link rounded-2 ms-3"
            >
              Contact me
            </NavLink>
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
              <Card
                href="https://sparkling-sundae-e35163.netlify.app/"
                src={tsukiNoYoru}
                alt="Tsuki No Yoru Preview"
                title="Tsuki No Yoru"
                description="This project is a website for a Japanese restaurant. The Menu page contains a photo carousel at the top. The Reservations page contains a form for booking a table. All fields will be validated and will show errors if the data is not valid. The booking form is integrated with Firestore to store and manage booking data. The form fetches booked times from Firestore whenever the date changes and disables time options in the form if they are already booked. When the form is submitted, it adds the new booking to Firestore"
                tech="HTML, CSS, JS, React.js, React Router, Bootstrap, Firestore"
                git="https://github.com/Lia-O1/tsuki-no-yoru"
              />
              <Card
                href="https://jovial-bienenstitch-a81bd9.netlify.app/"
                src={weatherToday}
                alt="WeatherToday Preview"
                title="WeatherToday"
                description="This project is a weather web app that uses the OpenWeather API to fetch weather data. You can search for locations around the world, or click the My Location button to search for your current location automatically"
                tech="HTML, CSS, JS, React.js, Bootstrap, Web API"
                git="https://github.com/Lia-O1/weather-react"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
