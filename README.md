# Project Title - My Portfolio
This is a personal portfolio website built with React. It showcases my work as a web developer. The website includes pages for Home, About, and Contact. Users can navigate to different pages using the navigation bar at the top of the page.

## Code Showcase
- **Routing**: The `App` component in `App.js` sets up the routes for the website using `react-router-dom`. It defines routes for the Home, About, and Contact pages.
- **Navigation**: The `Navbar` component in `Navbar.js` handles the navigation for the website. It uses the `NavLink` from `react-router-dom` for navigation between different pages. The navigation bar is responsive and its state is managed using React's `useState` hook. The `useLocation` and `useEffect` hooks are used to scroll to the top of the page when the location changes.
- **Home Page**: The `Home` component in `Home.js` uses the `HashLink` from `react-router-hash-link` to enable smooth scrolling to the Portfolio section of the Home page when the "My Portfolio" button is clicked.

## Note
This repository is a continuation of a previous project (portfolio-react). The original project was developed in a different repository, but due to some deployment issues on Netlify, a new repository was created. That does not affect the quality or functionality of the code.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
You need to have the latest version of Node.js and npm installed. If not, you can download them from [here](https://nodejs.org/en/download).

### Dependencies
This project uses the following dependencies which will be installed automatically when you run `npm install`:
- `react`: A JavaScript library for building user interfaces
- `react-dom`: Serves as the entry point to the DOM and server renderers for React
- `react-router-dom`: DOM bindings for React Router
- `react-router-hash-link`: A React Router wrapper that scrolls the page to the element with the id that matches the current URL's hash
- `react-bootstrap`: Bootstrap components built with React
- `react-icons`: An npm package that provides vector icons and social logos for your React applications
- `bootstrap`: A popular HTML, CSS, and JS library for developing responsive, mobile-first projects on the web

### Installing
Follow these steps to get a development environment running:
1. Clone the repo: `git clone https://github.com/Lia-O1/portfolio-react-2.git`
2. Navigate to the project folder: `cd portfolio-react-2`
3. Install the dependencies: `npm install`
4. Start the server: `npm start` (this will start the development server and open the app in a web browser)

## Live Version
A live version of the project is hosted on Netlify and can be accessed [here](https://oswebdev.dev/).
