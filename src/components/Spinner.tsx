import React from "react";
import "./styles.scss";

const Spinner = () => {
  return (
    <div className="preloader">
      <img
        src="./assets/images/Preloader.svg"
        alt="preloader"
        className="preloader--image"
      />
    </div>
  );
};

export default Spinner;
