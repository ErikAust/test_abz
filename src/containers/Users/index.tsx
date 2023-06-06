import React from "react";
import { useAppDispatch, useTypedSelector } from "../../redux/store";
import { thunkGetUsers } from "../../redux/thunk";
import Spinner from "../../components/Spinner";
import Button from "../../components/Button";
import UserCard from "./components/UserCard";
import { IUser } from "../../interfaces";
import { sortByDate } from "../../utils/helpers";

import "./style.scss";

const Users = () => {
  const dispatch = useAppDispatch();
  const { users } = useTypedSelector((state) => state);

  const pageHandler = () => {
    dispatch(thunkGetUsers(users.links.next_url));
  };

  const renderUserList = () =>
    sortByDate(users.users).map((user: IUser) => {
      return (
        <UserCard
          key={user.id}
          photo={user.photo}
          name={user.name}
          position={user.position}
          email={user.email}
          phone={user.phone}
          registration_timestamp={user.registration_timestamp}
        />
      );
    });

  return (
    <div className="users">
      <h1 className="users--header">Working with GET request</h1>
      {users.loading ? (
        <Spinner />
      ) : (
        <>
          <div className="users--cards">{renderUserList()}</div>
          {!(users.page === users.total_pages) && (
            <Button
              title="Show more"
              className="users--button"
              onClick={pageHandler}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Users;
