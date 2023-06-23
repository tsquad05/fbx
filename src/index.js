import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

/* import "./js/jquery-3.6.0";
import "https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.js";
import "./js/script.js";
import "./js/bootstrap.bundle.min.js";
import "./js/tiny-slider.js";
import "./js/aos.js";
import "./js/navbar.js";
import "./js/counter.js";
import "./js/custom.js"; */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
