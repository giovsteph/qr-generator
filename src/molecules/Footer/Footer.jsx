import React from "react";
import logo1 from "../../assets/gio-logo.png";
import logo2 from "../../assets/github-logo.png";
import logo3 from "../../assets/linkedin-logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          Created by{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/giovsteph"
          >
            @giovsteph
          </a>{" "}
          using React.
        </p>
        <div className="footer-logos">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://devgioportfolio.web.app/"
          >
            <img src={logo1} alt="Logo 1" className="footer-logo" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/giovsteph"
          >
            <img src={logo2} alt="Logo 2" className="footer-logo" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/giovannaponce/"
          >
            <img src={logo3} alt="Logo 3" className="footer-logo" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
