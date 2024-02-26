import React from "react";
import { HashLink } from "react-router-hash-link";
import Nav from "../Components/Nav";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import promptekey from "../images/propmtekey.png";
import tsukiNoYoru from "../images/tsuki-no-yoru.png";
import weatherToday from "../images/weather-today.png";
import emeraldhandmade from "../images/emeraldhandmade.png";
import promptekeyMob from "../images/propmtekey-mobile.png";
import tsukiNoYoruMob from "../images/tsuki-no-yoru-mobile.jpeg";
import weatherTodayMob from "../images/weather-today-mobile.png";
import emeraldhandmadeMob from "../images/emeraldhandmade-mobile.png";
import "../styles/Home.css";

export default function Home() {
  return (
    <>
      <Nav />
      <div className="Home">
        <div className="d-flex flex-column ustify-content-center align-items-center text-center">
          <h2>Hi, I am</h2>
          <h1>Olha Stepko</h1>
          <h3>Web Developer, based in Australia</h3>
          <div className="d-flex justify-content-center text-center mt-4 buttons">
            <HashLink
              to="/#portfolio"
              className="primary-btn link rounded-2 me-3"
            >
              My Portfolio
            </HashLink>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://1drv.ms/b/s!Amwf-W7QJ58AmM5yUQA8BBIe4hb1Og?e=yyF4bL"
              className="secondary-btn link rounded-2 ms-3"
            >
              My Resume
            </a>
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
                href="https://emeraldhandmade.vercel.app/"
                src={emeraldhandmade}
                srcMob={emeraldhandmadeMob}
                alt="EmeraldHandmade Preview"
                title="EmeraldHandmade"
                description="EmeraldHandmade is an online shop where enthusiasts can discover unique handmade items. It features an intuitive navigation bar. Users can explore various categories, each opening into a dropdown with three subcategories. Each dropdown menu displays an image and name for the subcategory. Product images are displayed in a slider format. The custom useCart hook uses Zustand for state management and persists the cart state in local storage. The hook provides functions to add items to the cart, remove items from the cart, and clear the cart"
                tech="HTML, CSS, JavaScript, Next.js, React.js, TypeScript, Tailwind CSS, Zustand"
                git="https://github.com/Lia-O1/emeraldhandmade"
              />
              <Card
                href="https://share-ai-prompts-eosin.vercel.app/"
                src={promptekey}
                srcMob={promptekeyMob}
                alt="Promptekey Preview"
                title="Promptekey"
                description="This project is a platform that allows users to create and share AI prompts. It features a home page where users can see a list of all posts and search for prompts by keyword, which can be in the username, tag, or prompt itself. Users can also click on a tag to search for it. After signing in, the profile page shows all the posts created by the user, and allows them to delete or edit their posts. Users can also view other users' profiles by clicking on their username or image on the home page"
                tech="HTML, CSS, JavaScript, Next.js, React.js, NextAuth.js, Tailwind CSS, Mongoose, MongoDB"
                git="https://github.com/Lia-O1/share-ai-prompts"
              />
              <Card
                href="https://sparkling-sundae-e35163.netlify.app/"
                src={tsukiNoYoru}
                srcMob={tsukiNoYoruMob}
                alt="Tsuki No Yoru Preview"
                title="Tsuki No Yoru"
                description="This project is a website for a Japanese restaurant. The Menu page contains a photo carousel at the top. The Reservations page contains a form for booking a table. All fields will be validated and will show errors if the data is not valid. The booking form is integrated with Firestore to store and manage booking data. The form fetches booked times from Firestore whenever the date changes and disables time options in the form if they are already booked. When the form is submitted, it adds the new booking to Firestore"
                tech="HTML, CSS, JavaScript, React.js, React Router, Bootstrap, Firestore"
                git="https://github.com/Lia-O1/tsuki-no-yoru"
              />
              <Card
                href="https://jovial-bienenstitch-a81bd9.netlify.app/"
                src={weatherToday}
                srcMob={weatherTodayMob}
                alt="WeatherToday Preview"
                title="WeatherToday"
                description="This project is a weather web app that uses the OpenWeather API to fetch weather data. You can search for locations around the world, or click the My Location button to search for your current location automatically"
                tech="HTML, CSS, JavaScript, React.js, Bootstrap, Web API"
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
