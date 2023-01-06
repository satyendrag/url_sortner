import React from "react";
import kgsLogo from "../assets/kgs-logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={kgsLogo} alt="KGS Logo" />
      <h1>URL Hasher</h1>
    </div>
  );
};

export default Navbar;
