import React from "react";
import Preloader from "../assets/images/Preloader.svg";
import "./styles.scss";

const Spinner = () => {
  return (
    <div className="preloader">
      <img src={Preloader} alt="preloader" className="preloader--image" />
    </div>
  );
};

export default Spinner;
