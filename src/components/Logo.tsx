import React from "react";
import Button from "./Button";

import "./styles.scss";

const Logo = () => {
  return (
    <nav className="wrapper" role="navigation">
      <div className="logo">
        <img
          src="./assets/images/Logo.svg"
          alt="logo"
          width={104}
          height={26}
        />
        <div className="logo--buttons">
          <Button title="Users" />
          <Button title="Sign up" />
        </div>
      </div>
    </nav>
  );
};

export default React.memo(Logo);
