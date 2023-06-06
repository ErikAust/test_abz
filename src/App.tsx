import React, { useEffect } from "react";
import Logo from "./components/Logo";
import Header from "./containers/Header";
import Users from "./containers/Users";
import Registration from "./containers/Registration";
import { useAppDispatch } from "./redux/store";
import { thunkGetToken, thunkGetUsers } from "./redux/thunk";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(thunkGetToken());
    dispatch(thunkGetUsers());
  }, []);

  return (
    <>
      <Logo />
      <div className="App">
        <Header />
        <Users />
        <Registration />
      </div>
    </>
  );
};

export default App;
