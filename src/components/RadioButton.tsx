import React from "react";
import { IRadioButtonProps } from "../interfaces";

import "./styles.scss";

const RadioButton = ({ id, onClick, name, checked }: IRadioButtonProps) => {
  return (
    <>
      <div className="form--field--radio" onClick={onClick}>
        <input
          className="form--field--radio--input"
          type="radio"
          checked={checked}
        />
        <label className="form--field--radio--label" id={`${id}`}>
          {name}
        </label>
      </div>
    </>
  );
};

export default React.memo(RadioButton);
