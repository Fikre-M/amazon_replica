import React from "react";
import { Oval } from "react-loader-spinner";
import "./Loader.css"; // Import the CSS file

const Loader = () => {
  return (
    <div className="loader-container">
      <Oval color="#e9eceb" height={80} width={80} className="fade-loader" />
    </div>
  );
};

export default Loader;
