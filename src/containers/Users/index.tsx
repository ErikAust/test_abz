import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store";
import { thunkGetUsers } from "../../redux/thunk";
import Spinner from "../../components/Spinner";
import Button from "../../components/Button";
import UserCard from "./components/UserCard";
import { IInitialState, IUser } from "../../interfaces";
import { sortByDate } from "../../utils/helpers";

import "./style.scss";

const Users = () => {
  const dispatch = useAppDispatch();
  const { users } = useSelector((state: IInitialState) => state);

  const pageHandler = () => {
    dispatch(thunkGetUsers(users.links.next_url));
  };

  return (
    <section className="users" role="group">
      <h1 className="users--header">Working with GET request</h1>
      {users.loading ? (
        <Spinner />
      ) : (
        <>
          <div className="users--cards">
            {sortByDate(users.users).map((user: IUser) => {
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
            })}
          </div>
          {!(users.page === users.total_pages) && (
            <Button
              title="Show more"
              className="users--button"
              onClick={pageHandler}
            />
          )}
        </>
      )}
    </section>
  );
};

export default Users;
