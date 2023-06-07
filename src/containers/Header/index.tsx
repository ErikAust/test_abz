import React from "react";
import Button from "../../components/Button";

import "./style.scss";

const Header = () => {
  return (
    <header className="banner" role="banner">
      <h1 className="banner--title">Test assignment for front-end developer</h1>
      <p className="banner--text">
        What defines a good front-end developer is one that has skilled
        knowledge of HTML, CSS, JS with a vast understanding of User design
        thinking as they'll be building web interfaces with accessibility in
        mind. They should also be excited to learn, as the world of Front-End
        Development keeps evolving.
      </p>
      <Button title="Sign up" />
    </header>
  );
};

export default React.memo(Header);
