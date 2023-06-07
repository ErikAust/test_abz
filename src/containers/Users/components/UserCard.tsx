import React from "react";
import { IUser } from "../../../interfaces";

import "../style.scss";

const UserCard = ({
  photo,
  name,
  position,
  email,
  phone,
  registration_timestamp,
}: IUser) => {
  return (
    <div className="usercard" role="listitem" aria-roledescription="user card">
      <img
        src={photo ? photo : "./assets/images/photo-cover.svg"}
        alt="user-photo"
        className="usercard--photo"
        width={70}
        height={70}
      />
      <div className="usercard--name">
        <p className="usercard--name--title">{name}</p>
        <span className="usercard--name--tooltip" role="tooltip">
          {name}{" "}
        </span>
      </div>
      <p className="usercard--position">{position}</p>
      <div className="usercard--email">
        <p className="usercard--email--title">{email}</p>
        <span className="usercard--email--tooltip" role="tooltip">
          {email}{" "}
        </span>
      </div>
      <p className="usercard--phonenumber">{phone}</p>
    </div>
  );
};

export default UserCard;
