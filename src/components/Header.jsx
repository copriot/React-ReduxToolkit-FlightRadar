import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { flights, isLoading, error } = useSelector((store) => store.flight);
  // console.log(flights);
  return (
    <header>
      <Link to={"/"}>
        <img src="/planelogo.png" alt="planeLogo" />
        <h2>Flight Radar</h2>
      </Link>

      <h3>
        {isLoading
          ? "Searching for flights..."
          : error
          ? "Uppps an error has been detected pls try again later"
          : `${flights.length} Flights found`}
      </h3>
    </header>
  );
};

export default Header;
