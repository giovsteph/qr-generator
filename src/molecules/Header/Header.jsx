import React from "react";
import logoWithText from "../../assets/logo-with-text.png";
import logo from "../../assets/logo.png";
import "./Header.css";

const Header = () => {
  const isMobile = window.innerWidth <= 768;

  return (
    <div className="header">
      <div className="logo">
        {isMobile ? (
          <a href="/">
            <img src={logo} alt="Mobile Logo" className="logo-mobile" />
          </a>
        ) : (
          <a href="/">
            <img
              src={logoWithText}
              alt="Desktop Logo"
              className="logo-desktop"
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default Header;
