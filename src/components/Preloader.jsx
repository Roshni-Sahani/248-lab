import React from "react";
import logo from "../assets/images/logo.webp";
const Preloader = () => {
  return (
    <div className="min-vh-100 bg-blue position-fixed overflow-hidden d-flex justify-content-center align-items-center top-0 left-0 right-0 w-100 next-bg bg-black">
      <div className="position-relative d-flex justify-content-center align-items-center animation">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Preloader;
