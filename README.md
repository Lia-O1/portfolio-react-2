# Project Title - My Portfolio
This is a personal portfolio website built with React. It showcases my work as a web developer. The website includes pages for Home, About, and Contact. The portfolio features a variety of functionalities such as a card component for project display, a ProjectOverlay component for detailed project view, and a custom hook for detecting clicks outside a component. It also includes complex animations managed with Framer Motion, enhancing the visual appeal and interactivity of the website.

## Code Showcase
- **Routing**: The `App` component in `App.js` sets up the routes for the website using `react-router-dom`. It defines routes for the Home, About, and Contact pages.
- **Framer Motion Animations**: Complex animations for the mobile navigation bar and the `ProjectOverlay` component have been implemented using the `framer-motion` library.
- **Card Component**: This component displays a project in the portfolio. It uses the `useState` and `useEffect` hooks to manage its open state and persist it across sessions using `sessionStorage`. It also uses a  `useClickOutside` hook to close the project when a click is detected outside the component.
- **ProjectOverlay Component**: This component displays the details of a project when a card is clicked. It uses the `forwardRef` function to receive a `ref` from the `Card` component for the click outside functionality. For accessibility purposes, component also closes when the "Escape" key is pressed. For better UX experience, scrolling on the webpage is disabled when the overlay is open and enabled when it is closed.

## Note
This repository is a continuation of a previous project (portfolio-react). The original project was developed in a different repository, but due to some deployment issues on Netlify, a new repository was created. That does not affect the quality or functionality of the code.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
You need to have the latest version of Node.js and npm installed. If not, you can download them from [here](https://nodejs.org/en/download).

### Dependencies
This project uses the following dependencies which will be installed automatically when you run `npm install`:
- `react-dom`: Serves as the entry point to the DOM and server renderers for React
- `react-router-dom`: DOM bindings for React Router
- `bootstrap`: A popular HTML, CSS, and JS library for developing responsive, mobile-first projects on the web
- `framer-motion`: A production-ready motion library for React
- And others (refer to package.json for the full list)

### Installing
Follow these steps to get a development environment running:
1. Clone the repo: `git clone https://github.com/Lia-O1/portfolio-react-2.git`
2. Navigate to the project folder: `cd portfolio-react-2`
3. Install the dependencies: `npm install`
4. Start the server: `npm start` (this will start the development server and open the app in a web browser)

## Live Version
A live version of the project is hosted on Netlify and can be accessed [here](https://oswebdev.dev/).
