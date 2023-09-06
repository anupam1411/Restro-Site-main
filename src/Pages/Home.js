import { Button } from "@mui/material";
import React from "react";
import banner from "../images/Banner.jpg";
import "../STYLES/Home (1).css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${banner})` }}>
      <div className="headerContainer">
        <h1>KHAANA PEENA</h1>
        <p>DESI KHANA</p>
        <Link>
          <Button>
            <Link to="/menu">ORDER NOW</Link>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
