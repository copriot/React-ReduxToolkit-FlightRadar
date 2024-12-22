import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to={"/"}>
        <img src="/planelogo.png" alt="planeLogo" />
        <h2>Flight Radar</h2>
      </Link>

      <h3>275 flights found</h3>
    </header>
  );
};

export default Header;
