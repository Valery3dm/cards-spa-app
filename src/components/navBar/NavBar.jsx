import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Link to={`/`}>
        <button type="button">Home</button>
      </Link>
      <Link to={`/create-view`}>
        <button type="button">Create</button>
      </Link>
      <Link to={`/card-view`}>
        <button type="button">Basket</button>
      </Link>
    </>
  );
};

export default NavBar;
