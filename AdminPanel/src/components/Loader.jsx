import React from "react";
import logo from "../assets/loader.png";
import "../App.css";

const Loader = () => {
  return (
    <div className="page-loader">
      <img src={logo} alt="Loading..." className="loader-logo" />
    </div>
  );
};

export default Loader;
