import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
function LandingPage() {
  return (
    <>
      <div className="mainLandingPage">
        <div className="left">
          <img src="Images/Logo.jpeg" alt="logoImage" className="logoImage" />
        </div>
        <div className="right">
          <p id="para">10x Team 04</p>
          <Link to="/post-view">
            <button className="btnEnter">Enter</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
