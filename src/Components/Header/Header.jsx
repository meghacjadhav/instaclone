import React from "react";
import { GiAbstract013 } from "react-icons/gi";
import { FiCamera } from "react-icons/fi";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="mainHeader">
        <div className="logo">
          <span id="logoIcon">
            <GiAbstract013 />
          </span>
          <span id="logoText">Instaclone</span>
        </div>
        <div className="camera">
          <Link to="/form">
            <FiCamera />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
