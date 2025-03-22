import React from "react";
import ReactDOM from "react-dom/client"; // Use React 18+ method
import App from "./App";
import "./components/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
