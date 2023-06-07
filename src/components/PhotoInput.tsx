import React from "react";
import { IPhotoProps } from "../interfaces";

import "./styles.scss";

const PhotoInput = ({
  filename,
  onFocus,
  onChange,
  errorStatus,
  errorMsg,
}: IPhotoProps) => {
  return (
    <div className="form--field">
      <div className="form--field--photo" role="button">
        <input
          placeholder="hello"
          name="photo"
          className={`form--field--photo--button ${
            errorStatus && "form--field--photo--button"
          }`}
          type="file"
          accept="image/jpeg"
          onFocus={onFocus}
          onChange={onChange}
          aria-labelledby="photo"
        />
        <p className="form--field--photo--button--title">Upload</p>
        <p className="form--field--photo--filename">
          {!!filename ? filename : "Upload your photo"}
        </p>
      </div>
      {errorStatus && (
        <span className="form--field--span form--field--span--error">
          {errorMsg}
        </span>
      )}
    </div>
  );
};

export default React.memo(PhotoInput);
