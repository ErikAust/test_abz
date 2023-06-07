import React from "react";
import { IInputProps } from "../interfaces";

import "./styles.scss";

const Input = ({
  placeholder,
  onFocus,
  onChange,
  onBlur,
  type,
  value,
  name,
  errorStatus,
  errorMsg,
  helperText,
}: IInputProps) => {
  return (
    <div className="form--field" role="textbox" aria-label={name}>
      <input
        className={`form--field--input ${
          errorStatus && "form--field--input--error"
        }`}
        type={type}
        value={value}
        name={name}
        onFocus={onFocus}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        aria-labelledby={name}
      />
      {errorStatus ? (
        <span className="form--field--span form--field--span--error">
          {errorMsg}
        </span>
      ) : (
        <span className="form--field--span form--field--span--helpertext">
          {helperText}
        </span>
      )}
    </div>
  );
};

export default React.memo(Input);
