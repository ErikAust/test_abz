import React from "react";
import { IButtonProps } from "../interfaces";

import "./styles.scss";

const Button = ({ title, className, onClick, disabled }: IButtonProps) => (
  <button
    onClick={onClick}
    className={`button ${className ? className : "button--width"} ${
      disabled && "button--disabled"
    }`}
    disabled={disabled}>
    {title}
  </button>
);

export default React.memo(Button);
