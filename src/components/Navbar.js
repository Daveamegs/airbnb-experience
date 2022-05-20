import React from "react";
import AirBnB_Logo from "../images/airbnb-logo.png";

function Navbar() {
  return (
    <header className="container">
      <nav className="nav">
        <img src={AirBnB_Logo} alt="Airbnb" className="nav-logo" />
      </nav>
    </header>
  );
}

export default Navbar;
