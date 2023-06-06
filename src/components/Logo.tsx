import React from "react";
import Button from "./Button";
import LogoIcon from "../assets/images/Logo.svg";
import "./styles.scss";

const Logo = () => {
  return (
    <div className="wrapper">
      <div className="logo">
        <img src={LogoIcon} alt="logo" />
        <div className="logo--buttons">
          <Button title="Users" />
          <Button title="Sign up" />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Logo);
