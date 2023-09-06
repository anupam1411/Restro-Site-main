import React from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import "../STYLES/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import { useState } from "react";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={logo} alt="none img" />
        <div className="hiddenLinks">
          <Link to="/">HOME</Link>
          <Link to="/menu">MENU</Link>
          {/* <Link to="/">MOST POPULAR</Link> */}
          <Link to="/about">ABOUT US</Link>
          <Link to="/contact">CONTACT US</Link>
        </div>
      </div>

      <div className="rightSide">
        <Link to="/">HOME</Link>
        <Link to="/menu">MENU</Link>
        {/* <Link to="/">MOST POPULAR</Link> */}
        <Link to="/about">ABOUT US</Link>
        <Link to="/contact">CONTACT US</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
