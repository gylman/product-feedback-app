import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Theme from "./Theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Theme>
      <Router>
        <App />
      </Router>
    </Theme>
  </React.StrictMode>
);
